import { Injectable } from '@nestjs/common';
import * as fs from 'fs'


@Injectable()
export class AlipayService {

    getHi() {
        return 'hi i am alipay!'
    }
    writefile() {
        const privateKey = fs.readFileSync(__dirname + './fixtures/text.txt', 'utf8');



        return privateKey;
    }

}
