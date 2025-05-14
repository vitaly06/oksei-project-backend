import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import * as bcrypt from 'bcryptjs'; // Импортируем bcryptjs
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma.service';
import { AppUser } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private readonly prisma: PrismaService) {}

    async register(createUserDto: CreateUserDto): Promise<AppUser> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        // Сохраните пользователя в базе данных
        const user = await this.prisma.appUser.create({
            data: {
                login: createUserDto.login,
                email: createUserDto.email,
                password: hashedPassword,
            },
        });
        return user;
    }

    async login(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
        const user = await this.prisma.appUser.findUnique({ where: { login: loginUserDto.login } });
        if (!user || !(await bcrypt.compare(loginUserDto.password, user.password))) {
            throw new UnauthorizedException();
        }
        const payload = { login: user.login, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}