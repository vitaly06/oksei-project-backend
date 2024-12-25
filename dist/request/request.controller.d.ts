import { RequestService } from "./request.service";
import { CreateRequestDto } from "./dto/create-request.dto";
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
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
