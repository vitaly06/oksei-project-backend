import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags("Auth(авторизация/регистрация)")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @ApiBody({
    description: "Данные для регистрации",
    type: CreateUserDto
  })
  async register(@Body() createUserDto: CreateUserDto){
    return this.authService.register(createUserDto);
  }

  @ApiBody({
    description: "Данные для авторизации",
    type: LoginUserDto
  })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto){
    return this.authService.login(loginUserDto);
  }
}
