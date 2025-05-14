import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @ApiProperty({
        description: "Логин",
        example: "nagibator2006"
    })
    @IsString()
    @IsNotEmpty()
    login: string;

    @ApiProperty({
        description: "Почта",
        example: "nagibator2006@yandex.ru"
    })
    @IsEmail()
    email: string;
    @ApiProperty({
        description: "Пароль",
        example: "nagibator2006password"
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}