import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { RequestService } from "./request.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { extname } from "path";
import { CreateRequestDto } from "./dto/create-request.dto";
import { diskStorage } from "multer";
import { TelegramService } from "src/telegram.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags("Request(Форма заявки)")
@Controller("requests")
export class RequestController {
  constructor(
    private readonly requestService: RequestService,
    private readonly telegramService: TelegramService
  ) {}

  @Post("sendRequest")
  @ApiBody({
    description: "Данные заявки",

    type: CreateRequestDto,
  })
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads/files",
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    })
  )
  async sendRequest(
    @Body() createRequestDto: CreateRequestDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    if (file?.path) {
      createRequestDto.filePath = file.path;
    }
    const request = await this.requestService.create(createRequestDto);
    const message = `
      Новая заявка:
      Организация: ${createRequestDto.organizationName ?? "Не указана"}
      Контактное лицо: ${createRequestDto.contactPerson}
      Телефон: ${createRequestDto.phoneNumber}
      Email: ${createRequestDto.email}
      Категория: ${createRequestDto.category}
    `
      .trim()
      .replace(/^\s+/gm, "");
    if (createRequestDto.filePath) {
      await this.telegramService.sendMessage(
        message,
        createRequestDto.filePath
      );
    } else {
      await this.telegramService.sendMessage(message);
    }

    return request;
  }
}
