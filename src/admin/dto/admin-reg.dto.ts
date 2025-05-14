import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AdminRegDto{
    @ApiProperty({
        description: "логин",
        example: "admin"
    })
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty({
        description: "почта",
        example: "admin@yandex.ru"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty({
        description: "пароль",
        example: "123451"
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}