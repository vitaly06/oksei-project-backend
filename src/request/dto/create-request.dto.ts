import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateRequestDto{
    @ApiProperty({
        description: "Наименование организации",
        example: "ООО 'Стройландия'"
    })
    @IsString()
    @IsNotEmpty()
    organizationName : string;


    @ApiProperty({
        description: "Контактное лицо",
        example: "Иванов Иван Иванович",
    })
    @IsString()
    @IsNotEmpty()
    contactPerson: string;

    @ApiProperty({
        description: "Номер телефона",
        example: "+79510341677",
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;


    @ApiProperty({
        description: "Электронная почта",
        example: "test@mail.ru",
    })
    @IsEmail()
    email: string;


    @ApiProperty({
        description: "Сроки выполнения",
        example: "2 недели",
    })
    @IsString()
    deadline: string;

    @IsString()
    filePath: string;
    @ApiProperty({
        description: "ТЗ файл"
    })
    file: any;
}