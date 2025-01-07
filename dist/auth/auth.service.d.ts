import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma.service';
import { AppUser } from '@prisma/client';
export declare class AuthService {
    private jwtService;
    private readonly prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    register(createUserDto: CreateUserDto): Promise<AppUser>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
