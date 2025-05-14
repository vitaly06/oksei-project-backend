import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto{
    @ApiProperty({
        description: "ФИО",
        example: "Пупков Пупа Пупов"
    })
    fullName: string
    @ApiProperty({
        description: "Направление",
        example: "Креатив"
    })
    industry: string
    @ApiProperty({
        description: "Описание",
        example: "TESTTESTTEST"
    })
    description: string
    @ApiProperty({
        description: "Фото проекта",
        example: "img"
    })
    projectPhoto: any;
    @ApiProperty({
        description: "Фото студента",
        example: "img"
    })
    personPhoto: any;
}