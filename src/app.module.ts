import { Module } from '@nestjs/common';
import { RequestController } from './request/request.controller';
import { RequestService } from './request/request.service';
import { RequestModule } from './request/request.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { TelegramService } from './telegram.service';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [RequestModule, AuthModule, AdminModule, TeacherModule],
  controllers: [RequestController],
  providers: [RequestService, PrismaService, TelegramService],
})
export class AppModule {}

