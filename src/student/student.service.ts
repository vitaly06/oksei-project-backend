import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto } from './dto/add-student.dto';

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
                description: student.description,
                projectPhotoPath,
                studentPhotoPath
            }
        })
    }

    async findStudentById(id: number): Promise<Student>{
        return this.prisma.student.findUnique({
            where: {studentId: id}
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
            where: { studentId: id },
            data: updateData,
          });
    }

    async deleteStudent(id: number){
        return this.prisma.student.delete({
            where: {studentId: id}
        })
    }
}
