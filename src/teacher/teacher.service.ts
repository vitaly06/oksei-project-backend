import { Injectable } from '@nestjs/common';
import { Teacher } from '@prisma/client';
import * as path from 'path';
import { PrismaService } from 'src/prisma.service';
import * as fs from 'fs';

@Injectable()
export class TeacherService {
    constructor(private readonly prisma: PrismaService){}

    async getAllTeachers(): Promise<Teacher[]>{
        return this.prisma.teacher.findMany();
    }

    async create(data: Omit<Teacher, 'teacherId'>): Promise<Teacher>{
        return this.prisma.teacher.create({
            data
        })
    }

    async getTeacherById(id: number){
        return this.prisma.teacher.findUnique({
            where: {teacherId: Number(id)}
        })
    }

    async update(id: number, data: Partial<Omit<Teacher, 'teacherId'>>){
        return this.prisma.teacher.update({
            where: {teacherId: Number(id)},
            data
        })
    }

    async delete(id: number){
        const teacher = await this.prisma.teacher.findUnique({
            where: {teacherId: Number(id)},
            select: {photoPath: true}
        })
        if(teacher && teacher.photoPath){
            console.log(teacher.photoPath)
            const imagePath = path.join("uploads", teacher.photoPath)
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
        await this.prisma.teacher.delete({
            where: {teacherId: Number(id)}
        })
    }
}
