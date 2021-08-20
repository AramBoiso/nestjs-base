import { BadRequestException, Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/models/usr/users/decorators';
import { User as UserEntity } from 'src/models/usr/users/entities';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @User() user:UserEntity
    ){
        return await this.authService.login(user);
    }

}
