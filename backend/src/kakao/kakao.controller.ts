import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { KakaoService } from './kakao.service';

@Controller('kakao')
export class KakaoController {
    constructor(private readonly kakaoService: KakaoService) { }

    @Get()
    getHiKakao() {
        return this.kakaoService.getHelloKakao();
    }

    // General payment start
    @Get('/start/:prodName')
    getPayStart(@Param('prodName') prodName: string) {
        return this.kakaoService.getPayStart(prodName);
    }

    // General payment approve
    @Get('/approve/:getKakaoPayToken/:getTID')
    getPayApprove(@Param('getKakaoPayToken') getKakaoPayToken: string, @Param('getTID') getTID: string) {
        return this.kakaoService.getApprove(getKakaoPayToken, getTID);
    }

    // Regular payment start
    @Get('/startregular/:prodName')
    getRegularPayStart(@Param('prodName') prodName: string) {
        return this.kakaoService.getRegularPayStart(prodName);
    }

    // Regular payment approve
    @Get('/approveregular/:getKakaoPayToken/:getTID')
    getPayApproveRegular(@Param('getKakaoPayToken') getKakaoPayToken: string, @Param('getTID') getTID: string) {
        return this.kakaoService.getApproveRegular(getKakaoPayToken, getTID);
    }

    // Regular payment again 
    @Get('/regularagain/:prodName/:getSID')
    getRegularPayAgain(@Param('prodName') prodName: string, @Param('getSID') getSID: string) {
        return this.kakaoService.getRegularPayAgain(prodName, getSID)
    }

    // sid key status check, is it available or not
    @Get('/sidkeystatus/:getSID')
    getSidKeyStatus(@Param('getSID') getSID: string) {
        return this.kakaoService.getSidKeyStatus(getSID)
    }

    @Get('/inactive/:getSID')
    changeStatusInActive(@Param('getSID') getSID: string) {
        return this.kakaoService.changeStatusInActive(getSID)
    }
}
