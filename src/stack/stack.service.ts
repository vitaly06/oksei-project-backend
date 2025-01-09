import { Injectable } from '@nestjs/common';
import { Stack } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StackService {
    constructor(private readonly prisma: PrismaService){}

    async getAll(): Promise<Stack[]>{
        return this.prisma.stack.findMany()
    }

    async addStack(newStack: Omit<Stack, "stackId">){
        return this.prisma.stack.create({
            data: {
                areaName: newStack.areaName,
                stack: newStack.stack
            }
        })
    }

    async getStackById(id: number): Promise<Stack>{
        return this.prisma.stack.findUnique({
            where: {stackId: Number(id)}
        })
    }

    async updateStack(id: number, updateStack: Omit<Stack, "stackId">){
        return this.prisma.stack.update({
            where: {stackId: Number(id)},
            data: {
                areaName: updateStack.areaName,
                stack: updateStack.stack
            }
        })
    }


    async delete(id: number){
        return this.prisma.stack.delete({
            where: {stackId: id}
        })
    }
}
