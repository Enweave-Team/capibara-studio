import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create-user.dto";


@Controller('users')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post('create-user')
    create(@Body() dto: CreateUserDto) {
        console.log(dto)
        return this.userService.create(dto);
    }

    delete() {

    }

    edit() {

    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    getOne() {

    }

}