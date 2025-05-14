import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminLoginDto } from './dto/admin-login.dto';
import * as bcrypt from 'bcryptjs'; // Импортируем bcryptjs
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AdminRegDto } from './dto/admin-reg.dto';
import { Admin } from '@prisma/client';

@Injectable()
export class AdminService {
    constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService){}
    async login(adminLoginDto: AdminLoginDto): Promise<{ access_token: string }> {
            const admin = await this.prisma.admin.findUnique({ where: { login: adminLoginDto.login } });
            if (!admin || !(await bcrypt.compare(adminLoginDto.password, admin.password))) {
                throw new UnauthorizedException();
            }
            const payload = { login: admin.login, sub: admin.adminId };
            return {
                access_token: this.jwtService.sign(payload),
            };
    }

    async register(adminRegDto: AdminRegDto): Promise<Admin> {
            const hashedPassword = await bcrypt.hash(adminRegDto.password, 10);
            // Сохраните пользователя в базе данных
            const admin = await this.prisma.admin.create({
                data: {
                    login: adminRegDto.login,
                    email: adminRegDto.email,
                    password: hashedPassword,
                },
            });
            return admin;
        }
}
