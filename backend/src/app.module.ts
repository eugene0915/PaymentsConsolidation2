import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TosspaymentModule } from './tosspayment/tosspayment.module';
import { AlipayModule } from './alipay/alipay.module';
import { KakaoModule } from './kakao/kakao.module';

@Module({
  imports: [TosspaymentModule, AlipayModule, KakaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
