import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
@Controller('auth')
export class AuthController {
  @Get('test')
  test() {
    return {
      message: 'Auth module is working!',
    };
  }

  @Post('register')
register(@Body() registerDto: RegisterDto) {
  return {
    message: 'User registered successfully',
    user: registerDto,
  };

  }
}