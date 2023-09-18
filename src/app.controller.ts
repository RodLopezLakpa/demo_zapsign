import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('webhook')
  webhook(@Req() request: Request) {
    console.log(request.headers);
    console.log(request.body);
    return true;
  }
}

//https://app.zapsign.co/verificar/9fffd264-cd7a-4fa8-9441-f589611aad6a

//https://app.zapsign.co/verificar/9fffd264-cd7a-4fa8-9441-f589611aad6a
