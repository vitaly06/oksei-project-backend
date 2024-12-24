import { Module } from '@nestjs/common';
import { RequestController } from './request/request.controller';
import { RequestService } from './request/request.service';
import { RequestModule } from './request/request.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RequestModule, AuthModule],
  controllers: [RequestController],
  providers: [RequestService, PrismaService],
})
export class AppModule {}

