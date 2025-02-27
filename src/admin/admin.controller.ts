import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminRegDto } from './dto/admin-reg.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() adminLoginDto: AdminLoginDto){
    return this.adminService.login(adminLoginDto);
  }

  @Post('register')
  async register(@Body() adminRegDto: AdminRegDto){
    return this.adminService.register(adminRegDto);
  }
}
