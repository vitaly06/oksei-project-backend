import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRequestDto {
  @ApiProperty({
    description: "Наименование организации",
    example: "ООО 'Стройландия'",
    required: false,
  })
  @IsString({ message: "Название организации должно быть строкой" })
  @IsNotEmpty({ message: "Название организации не может быть пустой строкой" })
  @IsOptional()
  organizationName: string;

  @ApiProperty({
    description: "Контактное лицо",
    example: "Иванов Иван Иванович",
  })
  @IsString({ message: "Контактное лицо должно быть строкой" })
  @IsNotEmpty({ message: "Контактное лицо не может быть пустой строкой" })
  contactPerson: string;

  @ApiProperty({
    description: "Номер телефона",
    example: "+79510341677",
  })
  @IsString({ message: "Номер телефона должен быть строкой" })
  @IsNotEmpty({ message: "Номер телефона не может быть пустым" })
  phoneNumber: string;

  @ApiProperty({
    description: "Электронная почта",
    example: "test@mail.ru",
  })
  @IsEmail({}, { message: "Некорректный формат почты" })
  @IsNotEmpty({ message: "Почта не может быть пустой" })
  email: string;

  @ApiProperty({
    description: "Категория работы",
    example: "Веб-сайт",
  })
  @IsString({ message: "Категория должна быть строкой" })
  @IsNotEmpty({ message: "Категория не может быть пустой строкой" })
  category: string;

  @IsOptional()
  filePath: string;
  @ApiProperty({
    description: "ТЗ файл",
    type: "string",
    format: "binary",
    required: false,
  })
  file: any;
}
