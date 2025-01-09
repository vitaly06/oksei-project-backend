import { BadRequestException, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { LogoService } from './logo.service';
import { Logo } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Get('all')
  async getAll(): Promise<Logo[]>{
    return this.logoService.getAll();
  }

  @Post('addLogo')
  @UseInterceptors(FileInterceptor('logo', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        // Указываем путь для сохранения файла
        const folder = 'uploads/logo';
        cb(null, folder);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = `logo-${uniqueSuffix}${extname(file.originalname)}`;
        cb(null, fileName);
      },
    }),
  }))
  async addLogo(@UploadedFile() file: Express.Multer.File) {
   
    if (!file) {
      throw new BadRequestException('Необходимо загрузить файл: logo');
    }

    // Получаем уникальное имя файла
    const logoFileName = file.filename;

    return this.logoService.addLogo(`logo/${logoFileName}`);
  }

  @Delete(":id")
  async deleteLogo(@Param("id") id: number){
    return this.logoService.delete(id)
  }
}
