import { Injectable } from '@nestjs/common';
import { Logo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LogoService {
    constructor(private readonly prisma: PrismaService){}

    async getAll(): Promise<Logo[]>{
        return this.prisma.logo.findMany()
    }

    async addLogo(logoFileName: string){
        return this.prisma.logo.create({
            data: {
                logoPath: logoFileName
            }
        })
    }

    async delete(id: number){
        const logo = await this.prisma.logo.findUnique({
            where: {logoId: Number(id)},
            select: {logoPath: true}
        })
        if(logo && logo.logoPath){
            const imagePath = path.join("uploads", logo.logoPath)
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
        return this.prisma.logo.delete({
            where: {logoId : Number(id)},
        })
    }
}
