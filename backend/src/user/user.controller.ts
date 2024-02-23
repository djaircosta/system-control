import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';

@Controller('user')
export class UserController {
    @Get()
    async getAllUser() {
        return JSON.stringify({test: 'abc'});

    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
        return createUser
    }

}
