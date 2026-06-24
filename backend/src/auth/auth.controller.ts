import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('test')
  test() {
    return {
      message: 'Auth module is working!',
    };
  }

  @Post('register')
  register(@Body() body: any) {
    return {
      message: 'User registered successfully',
      user: body,
    };
  }
}