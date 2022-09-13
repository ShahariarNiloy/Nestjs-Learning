import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  @Get()
  getProducts() {
    return 'I am a product';
  }

  @Get('/:productId')
  getSingleProduct(@Param() ProductId: Number) {
    return ProductId;
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Delete('/:productId')
  deleteSingleProduct(@Param() ProductId: Number) {
    return ProductId;
  }

  @Patch('/:productId')
  updateSingleProduct(@Req() req: Request, @Param() ProductId: Number) {
    return [req.body, ProductId];
  }
}
