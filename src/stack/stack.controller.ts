import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StackService } from './stack.service';
import { Stack } from '@prisma/client';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Get('all')
  async getAll(): Promise<Stack[]>{
    return this.stackService.getAll()
  }

  @Post("addStack")
  async addStack(@Body() stack: Omit<Stack, "stackId">){
    return this.stackService.addStack(stack)
  }

  @Get(":id")
  async getStackById(@Param("id") id: number): Promise<Stack> {
    return this.stackService.getStackById(id)
  }

  @Put(":id")
  async updateStack(@Param("id") id: number, @Body() updateStack: Omit<Stack, "stackId">): Promise<Stack> {
    return this.stackService.updateStack(id, updateStack)
  }

  @Delete(":id")
  async deleteStack(@Param("id") id: number){
    return this.stackService.delete(id)
  }
}
