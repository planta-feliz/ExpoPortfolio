import { Controller, Render, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('v')
  @Render('index.hbs')
  getHello() {
    return this.appService.getHello();
  }
}
