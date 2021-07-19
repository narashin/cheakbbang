import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){

    }
    @Get()
    getUsers(@Req() req){
        return req.user;
    }

    @Post()
    postUsers(@Body() data: JoinRequestDto){
        this.usersService.postUsers(data.username, data.name, data.email, data.password, data.phone)

    }
    @Post('login')
    logIn(@Req() req){
        return req.user;
    }

    
    @Post('logout')
    logOut(@Req() req, @Res() res){
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok')

    }

}
