import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AdminLoginDto{
    @ApiProperty({
        description: "логин",
        example: "admin"
    })
    @IsString()
    @IsNotEmpty()
    login: string;

    @ApiProperty({
        description: "пароль",
        example: "123451"
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}