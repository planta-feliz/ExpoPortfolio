import { Controller, Render, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("v")
  getHello(): string {
    return this.appService.getHello();
  }


  @Get()
  @Render('index.hbs')
  root() {
    return { message: '🐪 . . . just the beginning' };
  }


  

}
