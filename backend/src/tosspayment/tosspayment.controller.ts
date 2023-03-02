import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { TosspaymentService } from './tosspayment.service';
import { PaymentDto } from './dto/payment.dto';

@Controller('tosspayment')
export class TosspaymentController {
    constructor(private readonly tosspaymentService: TosspaymentService) { }

    @Get()
    getHi() {
        return 'hi'
    }

    @Get('/hello')
    getHello(@Query('name') name: string, @Query('age') age: string) {
        return this.tosspaymentService.getHello(name, age)
    }
    // @Get('/success') 
    //     requestTossPayment(@Query('paymentKey') paymentKey:string ) {
    //         return this.tosspaymentService.requestTossPayment(paymentKey);
    //     }

    @Post('/success')
    requestTossPayment(@Query('orderId') orderId: string, @Query('paymentKey') paymentKey: string, @Query('amount') amount: string) {
        return this.tosspaymentService.requestTossPayment(orderId, paymentKey, amount);
    }

    @Get('/fail')
    paymentfail() {
        return this.tosspaymentService.paymentfail();
    }

}
