import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StackController],
  providers: [StackService, PrismaService],
})
export class StackModule {}
