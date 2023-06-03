import {Body, Controller, Delete, Get, Patch, Post, Req, UseGuards} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {JwtGuard} from "../../guards/jwt-guard";
import {ApiResponse, ApiTags} from "@nestjs/swagger";


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @ApiTags("API")
    @ApiResponse({status: 200, type: UpdateUserDto})
    @UseGuards(JwtGuard)
    @Patch()
    updateUser(@Body() updateDto: UpdateUserDto, @Req() request): Promise<UpdateUserDto> {
        const user = request.user;
        return this.userService.updateUser(user.email,updateDto)
    }

    @UseGuards(JwtGuard)
    @Delete()
    deleteUser(@Req() request): Promise<boolean> {
        const user = request.user;
        return this.userService.deleteUser(user.email)
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }



}
