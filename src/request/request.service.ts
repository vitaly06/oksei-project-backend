import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestService {
    constructor(private readonly prisma: PrismaService){}

    async create(createRequestDto: CreateRequestDto){
            return this.prisma.request.create({
                data: createRequestDto
        });
    }           
}
