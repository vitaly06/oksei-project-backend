import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import path from 'path';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  
  @Get('all')
  async getAllTeachers(): Promise<Teacher[]>{
    return this.teacherService.getAllTeachers();
  }

  @Post('addTeacher')
  @UseInterceptors(FileInterceptor('photo'))
  async create(@UploadedFile() file: Express.Multer.File, @Body() body: Omit<Teacher, 'teacherId'>){
    const photoPath = path.join('teachersImgs', file.filename);
    const teacher = {...body, photoPath};
    return this.teacherService.create(teacher);
  }

  @Get(":id")
  async getTeacherById(@Param("id") id: number): Promise<Teacher>{
    return this.teacherService.getTeacherById(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('photo'))
  async update(@Param('id') id: number, @UploadedFile() file: Express.Multer.File, @Body() body: Partial<Omit<Teacher, 'teacherId'>>) {
    const teacherData: Partial<Omit<Teacher, 'teacherId'>> = { ...body };
    if (file) {
      teacherData.photoPath = path.join('teachersImgs', file.filename);
    }
    return this.teacherService.update(id, teacherData);
  }

  @Delete(":id")
  async deleteTeacher(@Param("id") id: number){
    return this.teacherService.delete(id);
  }

}
