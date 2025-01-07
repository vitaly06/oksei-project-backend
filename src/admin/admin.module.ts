import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '30d' }, // Установите время жизни токена
      }),
    ],
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
})
export class AdminModule {}
