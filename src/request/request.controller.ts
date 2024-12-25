import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { RequestService } from "./request.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from "path";
import { CreateRequestDto } from "./dto/create-request.dto";// Импортируем diskStorage из multer
import { diskStorage } from 'multer'; 

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post("sendRequest")
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files', // Папка для сохранения файлов
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + extname(file.originalname)); // Уникальное имя файла
      }
    })
  }))
  async sendRequest(@Body() createRequestDto: CreateRequestDto, @UploadedFile() file: Express.Multer.File) {
    // Сохраняем путь к файлу в DTO
    createRequestDto.filePath = file.path; // Путь к файлу

    return this.requestService.create(createRequestDto);
  }
}