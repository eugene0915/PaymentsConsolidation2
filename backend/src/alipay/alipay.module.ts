import { Module } from '@nestjs/common';
import { AlipayController } from './alipay.controller';
import { AlipayService } from './alipay.service';

@Module({
    controllers: [AlipayController],
    providers: [AlipayService]

})
export class AlipayModule { }
