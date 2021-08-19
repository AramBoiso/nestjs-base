import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentsVariables } from './enums/app.enums';

@Injectable()
export class AppConfigService {

    constructor(private configService: ConfigService){}

    get PORT():number {
        return this.configService.get<number>(EnvironmentsVariables.PORT);
    }
    

}
