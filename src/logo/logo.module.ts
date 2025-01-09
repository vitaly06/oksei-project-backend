import { Module } from '@nestjs/common';
import { LogoService } from './logo.service';
import { LogoController } from './logo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LogoController],
  providers: [LogoService, PrismaService],
})
export class LogoModule {}
