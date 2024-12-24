import { PrismaService } from 'src/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';
export declare class RequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createRequestDto: CreateRequestDto): Promise<{
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
