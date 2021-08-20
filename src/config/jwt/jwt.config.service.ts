import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtVariables } from './enums';

@Injectable()
export class JwtConfigService {

    constructor(private readonly jwtConfigService:ConfigService){}

    get SECET_KEY():string{      
        return this.jwtConfigService.get(JwtVariables.SECRET_KEY);
    }

    get EXPIRE_IN():string{
        return this.jwtConfigService.get(JwtVariables.EXPIRE_IN);
    }

}
