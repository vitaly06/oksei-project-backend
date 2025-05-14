import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto } from './dto/add-student.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StudentService {
    constructor(private readonly prisma: PrismaService){}

    async findAll(): Promise<Student[]>{
        return this.prisma.student.findMany()
    }

    async createStudent(student: CreateStudentDto, projectPhotoPath: string, studentPhotoPath: string){
        return this.prisma.student.create({
            data: {
                fullName: student.fullName,
                industry: student.industry,
                description: student.description,
                projectPhotoPath,
                studentPhotoPath
            }
        })
    }

    async findStudentById(id: number): Promise<Student>{
        return this.prisma.student.findUnique({
            where: {studentId: Number(id)}
        })
    }

    async updateStudent(id: number, student: CreateStudentDto, projectPhotoPath?: string, studentPhotoPath?: string){
        const updateData: any = {
            fullName: student.fullName,
            description: student.description,
          };
      
          if (projectPhotoPath) {
            updateData.projectPhotoPath = projectPhotoPath;
          }
      
          if (studentPhotoPath) {
            updateData.personPhotoPath = studentPhotoPath;
          }
      
          return this.prisma.student.update({
            where: { studentId: Number(id) },
            data: updateData,
          });
    }

    async deleteStudent(id: number){
        const student = await this.prisma.student.findUnique({
            where: {studentId: Number(id)},
            select: {studentPhotoPath: true, projectPhotoPath: true}
        })
        if(student && student.projectPhotoPath && student.studentPhotoPath){
                    let imagePath;
                    const pathes = [student.projectPhotoPath, student.studentPhotoPath]
                    for(let i = 0; i < 2; i++){
                        imagePath = path.join("uploads", pathes[i])
                        fs.access(imagePath, fs.constants.F_OK, (err) => {
                            if (!err) {
                                // Удаляем файл изображения
                                fs.unlink(imagePath, (unlinkErr) => {
                                    if (unlinkErr) {
                                        console.error('Ошибка при удалении файла изображения:', unlinkErr);
                                    } else {
                                        console.log('Файл изображения успешно удален');
                                    }
                                });
                            } else {
                                console.log('Файл изображения не существует, пропускаем удаление');
                            }
                    });
        }
        return this.prisma.student.delete({
            where: {studentId: Number(id)}
        })
    }
}
}
