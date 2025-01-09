"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const request_controller_1 = require("./request/request.controller");
const request_service_1 = require("./request/request.service");
const request_module_1 = require("./request/request.module");
const prisma_service_1 = require("./prisma.service");
const auth_module_1 = require("./auth/auth.module");
const telegram_service_1 = require("./telegram.service");
const admin_module_1 = require("./admin/admin.module");
const teacher_module_1 = require("./teacher/teacher.module");
const student_module_1 = require("./student/student.module");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const logo_module_1 = require("./logo/logo.module");
const stack_module_1 = require("./stack/stack.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/api/uploads/'
            }), request_module_1.RequestModule, auth_module_1.AuthModule, admin_module_1.AdminModule, teacher_module_1.TeacherModule, student_module_1.StudentModule, logo_module_1.LogoModule, stack_module_1.StackModule
        ],
        controllers: [request_controller_1.RequestController],
        providers: [request_service_1.RequestService, prisma_service_1.PrismaService, telegram_service_1.TelegramService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map