import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from './entities';
import { UserI } from './interfaces';

@Injectable()
export class UsersService {

    constructor(private readonly connection:Connection){}

    async getOne(userOpts:UserI){
        const user = await this.connection.getRepository(User).findOne(userOpts);
        return user;
    }

}
