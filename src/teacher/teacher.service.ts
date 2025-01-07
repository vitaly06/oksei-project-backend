import { Injectable } from '@nestjs/common';
import { Teacher } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

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
            where: {teacherId: id}
        })
    }

    async update(id: number, data: Partial<Omit<Teacher, 'teacherId'>>){
        return this.prisma.teacher.update({
            where: {teacherId: id},
            data
        })
    }

    async delete(id: number){
        await this.prisma.teacher.delete({
            where: {teacherId: id}
        })
    }
}
