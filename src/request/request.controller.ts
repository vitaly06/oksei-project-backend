import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { RequestService } from "./request.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from "path";
import { CreateRequestDto } from "./dto/create-request.dto";
import { diskStorage } from 'multer'; 
import { TelegramService } from "src/telegram.service";

@Controller('requests')
export class RequestController {
  constructor(
    private readonly requestService: RequestService,
    private readonly telegramService: TelegramService 
  ) {}

  @Post("sendRequest")
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files', 
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + extname(file.originalname)); 
      }
    })
  }))
  async sendRequest(@Body() createRequestDto: CreateRequestDto, @UploadedFile() file: Express.Multer.File) {
    // Сохраняем путь к файлу в DTO
    createRequestDto.filePath = file.path; 

    // Сохраняем данные в базе данных
    const request = await this.requestService.create(createRequestDto);

    // Формируем сообщение для отправки в Telegram
    const message = `
      Новая заявка:
      Организация: ${createRequestDto.organizationName}
      Контактное лицо: ${createRequestDto.contactPerson}
      Телефон: ${createRequestDto.phoneNumber}
      Email: ${createRequestDto.email}
      Дедлайн: ${createRequestDto.deadline}
      Первая категория: ${createRequestDto.firstCategory}
      Вторая категория: ${createRequestDto.secondCategory}
      Описание: ${createRequestDto.description}
    `;

    // Отправляем сообщение в Telegram
    await this.telegramService.sendMessage(message, createRequestDto.filePath);

    return request;
  }
}