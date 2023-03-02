import { Module } from '@nestjs/common';
import { TosspaymentController } from './tosspayment.controller';
import { TosspaymentService } from './tosspayment.service';

@Module({
    controllers: [TosspaymentController],
    providers: [TosspaymentService]

})
export class TosspaymentModule { }
