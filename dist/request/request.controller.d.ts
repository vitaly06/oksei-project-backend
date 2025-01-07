import { RequestService } from "./request.service";
import { CreateRequestDto } from "./dto/create-request.dto";
import { TelegramService } from "src/telegram.service";
export declare class RequestController {
    private readonly requestService;
    private readonly telegramService;
    constructor(requestService: RequestService, telegramService: TelegramService);
    sendRequest(createRequestDto: CreateRequestDto, file: Express.Multer.File): Promise<{
        organizationName: string;
        contactPerson: string;
        phoneNumber: string;
        email: string;
        deadline: string;
        firstCategory: string;
        secondCategory: string;
        description: string;
        filePath: string;
        requestId: number;
    }>;
}
