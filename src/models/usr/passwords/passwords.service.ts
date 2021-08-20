import { Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';

@Injectable()
export class PasswordsService {

    validatePassword(password, hashPassword){
        return hashPassword === SHA256( SHA256(password).toString() ).toString();
    }

}
