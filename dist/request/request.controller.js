"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestController = void 0;
const common_1 = require("@nestjs/common");
const request_service_1 = require("./request.service");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const create_request_dto_1 = require("./dto/create-request.dto");
const multer_1 = require("multer");
const telegram_service_1 = require("../telegram.service");
let RequestController = class RequestController {
    constructor(requestService, telegramService) {
        this.requestService = requestService;
        this.telegramService = telegramService;
    }
    async sendRequest(createRequestDto, file) {
        createRequestDto.filePath = file.path;
        const request = await this.requestService.create(createRequestDto);
        const message = `
      Новая заявка:
      Организация: ${createRequestDto.organizationName}
      Контактное лицо: ${createRequestDto.contactPerson}
      Телефон: ${createRequestDto.phoneNumber}
      Email: ${createRequestDto.email}
      Дедлайн: ${createRequestDto.deadline}
      Первая категория: ${createRequestDto.firstCategory}
      Вторая категория: ${createRequestDto.secondCategory}
      Описание: ${createRequestDto.description}
    `;
        await this.telegramService.sendMessage(message, createRequestDto.filePath);
        return request;
    }
};
exports.RequestController = RequestController;
__decorate([
    (0, common_1.Post)("sendRequest"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './files',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_request_dto_1.CreateRequestDto, Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "sendRequest", null);
exports.RequestController = RequestController = __decorate([
    (0, common_1.Controller)('requests'),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        telegram_service_1.TelegramService])
], RequestController);
//# sourceMappingURL=request.controller.js.map