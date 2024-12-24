import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateRequestDto{
    @IsString()
    @IsNotEmpty()
    organizationName : string;

    @IsString()
    @IsNotEmpty()
    contactPerson: string;
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsEmail()
    email: string;

    @IsString()
    deadline: string;

    @IsString()
    firstCategory: string;

    @IsString()
    secondCategory: string;

    @IsString()
    description: string;

    @IsString()
    filePath: string;
}