import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { PrismaService } from 'src/prisma.service';
import { TelegramService } from 'src/telegram.service';

@Module({
  controllers: [RequestController],
  providers: [RequestService, PrismaService, TelegramService],
})
export class RequestModule {}
