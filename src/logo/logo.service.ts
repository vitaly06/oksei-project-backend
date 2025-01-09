import { Injectable } from '@nestjs/common';
import { Logo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

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
        return this.prisma.logo.delete({
            where: {logoId : id}
        })
    }
}
