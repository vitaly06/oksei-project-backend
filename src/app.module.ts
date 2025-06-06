import { Module } from "@nestjs/common";
import { RequestController } from "./request/request.controller";
import { RequestService } from "./request/request.service";
import { RequestModule } from "./request/request.module";
import { PrismaService } from "./prisma.service";
import { TelegramService } from "./telegram.service";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/api/uploads/",
    }),
    RequestModule,
  ],
  controllers: [RequestController],
  providers: [RequestService, PrismaService, TelegramService],
})
export class AppModule {}
