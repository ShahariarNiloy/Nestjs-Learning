import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getProduct() {
    return 'I am protected route';
  }
}
