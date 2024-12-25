import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private jwtService;
    private readonly prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    register(createUserDto: CreateUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
