import { Injectable } from "@nestjs/common";
import * as TelegramBot from 'node-telegram-bot-api';


@Injectable()
export class TelegramService{
    private bot: TelegramBot;
  private chatId: string; 

  constructor() {
    this.bot = new TelegramBot('7373181913:AAHYVUr0Uy9gjcQD3eas5SIJhQGq8_j33Tw', { polling: true });
    this.chatId = '-1002308003531'; 
  }

  async sendMessage(message: string, filePath: string) {
    await this.bot.sendMessage(this.chatId, message);
    await this.bot.sendDocument(this.chatId, filePath);
  }
}