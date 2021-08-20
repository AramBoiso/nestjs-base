import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('usr/users')
export class UsersController {

    @UseGuards(JwtAuthGuard)
    @Get()
    getMany(){
        return {
            message: "Many users..."
        }
    }
    
    

}
