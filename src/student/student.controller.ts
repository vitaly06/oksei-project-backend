import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from '@prisma/client';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import path, { extname } from 'path';
import { CreateStudentDto } from './dto/add-student.dto';
import * as fs from 'fs';
import { diskStorage } from 'multer';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('all')
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Post('addStudent')
@UseInterceptors(FileFieldsInterceptor([
  { name: 'projectPhoto', maxCount: 1 },
  { name: 'personPhoto', maxCount: 1 }
], {
  storage: diskStorage({
    destination: (req, file, cb) => {
      // Указываем путь для сохранения файлов
      const folder = file.fieldname === 'projectPhoto' ? 'uploads/projectPhoto' : 'uploads/personPhoto';
      cb(null, folder);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileName = `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`;
      cb(null, fileName);
    },
  }),
}))
async create(
  @Body() body: CreateStudentDto,
  @UploadedFiles() files: { projectPhoto?: Express.Multer.File[]; personPhoto?: Express.Multer.File[] },
) {
  
  if (!files.projectPhoto || !files.personPhoto) {
    throw new BadRequestException('Необходимо загрузить оба файла: projectPhoto и personPhoto');
  }

  
  const projectPhotoFile = files.projectPhoto[0];
  const personPhotoFile = files.personPhoto[0];

  if (!projectPhotoFile || !personPhotoFile) {
    throw new BadRequestException('Не удалось получить файлы');
  }

  
  const projectPhotoFileName = projectPhotoFile.filename; 
  const personPhotoFileName = personPhotoFile.filename; 

  return this.studentService.createStudent(body, `projectPhoto/${projectPhotoFileName}`, `personPhoto/${personPhotoFileName}`);
}


  @Get(":id")
  async findStudentById(@Param("id") id: number): Promise<Student> {
    return this.studentService.findStudentById(id);
  }

  @Put(':id')
@UseInterceptors(FileFieldsInterceptor([
  { name: 'projectPhoto', maxCount: 1 },
  { name: 'personPhoto', maxCount: 1 }
]))
async update(
  @Param('id') id: number,
  @Body() body: CreateStudentDto,
  @UploadedFiles(
  )
  files: { projectPhoto?: Express.Multer.File[]; personPhoto?: Express.Multer.File[] },
) {
  // Проверяем, что файлы действительно загружены
  const projectPhotoFile = files.projectPhoto ? files.projectPhoto[0] : undefined;
  const personPhotoFile = files.personPhoto ? files.personPhoto[0] : undefined;

  // Получаем уникальные имена файлов
  const projectPhotoFileName = projectPhotoFile ? projectPhotoFile.filename : undefined;
  const personPhotoFileName = personPhotoFile ? personPhotoFile.filename : undefined;

  
  if (projectPhotoFile) {
    const projectPhotoPath = path.join('uploads/projectPhoto', projectPhotoFileName);
    fs.mkdirSync(path.dirname(projectPhotoPath), { recursive: true });
  }
  if (personPhotoFile) {
    const personPhotoPath = path.join('uploads/personPhoto', personPhotoFileName);
    fs.mkdirSync(path.dirname(personPhotoPath), { recursive: true });
  }

  // Вызываем сервис для обновления студентаp
  const updatedStudentData = {
    ...body,
    projectPhoto: projectPhotoFileName,
    personPhoto: personPhotoFileName,
  };

  return this.studentService.updateStudent(id, updatedStudentData);
}

  @Delete(":id")
  async deleteStudent(@Param("id") id: number) {
    return this.studentService.deleteStudent(id);
  }
}