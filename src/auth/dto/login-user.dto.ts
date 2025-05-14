import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto{
    @ApiProperty({
            description: "Логин",
            example: "nagibator2006"
    })
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty({
        description: "Пароль",
        example: "nagibator2006password"
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}