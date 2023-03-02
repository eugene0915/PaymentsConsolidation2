import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { AlipayService } from './alipay.service';

@Controller('alipay')
export class AlipayController {
    constructor(private readonly alipayService: AlipayService) { }

    @Get()
    getHi() {
        return this.alipayService.getHi();
    }

    @Get('/write')
    writetext() {
        return this.alipayService.writefile();
    }

}
