import { Body, Controller, Post } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post("sendRequest")
  async sendRequest(@Body() createRequestDto: CreateRequestDto){
    return this.requestService.create(createRequestDto)
  }
}

