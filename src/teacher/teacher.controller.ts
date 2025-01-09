import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import path, { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  
  @Get('all')
  async getAllTeachers(): Promise<Teacher[]>{
    return this.teacherService.getAllTeachers();
  }

  @Post('addTeacher')
  @UseInterceptors(FileInterceptor('photo', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          // Указываем путь для сохранения файла
          const folder = 'uploads/teacherImgs';
          cb(null, folder);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          const fileName = `teacher-${uniqueSuffix}${extname(file.originalname)}`;
          cb(null, fileName);
        },
      }),
    }))
  async create(@UploadedFile() file: Express.Multer.File, @Body() body: Omit<Teacher, 'teacherId'>){
    if(!file){
      throw new BadRequestException("Необходимо загрузить файл: photo")
    }
    const teacher = {...body, photoPath: `teacherImgs/${file.filename}`};
    return this.teacherService.create(teacher);
  }

  @Get(":id")
  async getTeacherById(@Param("id") id: number): Promise<Teacher>{
    return this.teacherService.getTeacherById(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        // Указываем путь для сохранения файла
        const folder = 'uploads/teacherImgs';
        cb(null, folder);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = `teacher-${uniqueSuffix}${extname(file.originalname)}`;
        cb(null, fileName);
      },
    }),
  }))
  async update(@Param('id') id: number, @UploadedFile() file: Express.Multer.File, @Body() body: Partial<Omit<Teacher, 'teacherId'>>) {
    const teacherData: Partial<Omit<Teacher, 'teacherId'>> = { ...body };
    if (file) {
      teacherData.photoPath = path.join('teacherImgs', file.filename);
    }
    return this.teacherService.update(id, teacherData);
  }

  @Delete(":id")
  async deleteTeacher(@Param("id") id: number){
    return this.teacherService.delete(id);
  }

}
