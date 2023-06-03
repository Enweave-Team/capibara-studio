import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

class UserResponse{

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}


export class AuthUserResponse {

    @ApiProperty()
    user: UserResponse

    @ApiProperty()
    @IsString()
    token: string
}
