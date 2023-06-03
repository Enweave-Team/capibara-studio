import {IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @ApiProperty()
    @IsPhoneNumber()
    @IsNotEmpty()
    tel: string;

    @ApiProperty()
    @IsString()
    avatar: string;

    @ApiProperty()
    @IsString()
    role: string;
}
