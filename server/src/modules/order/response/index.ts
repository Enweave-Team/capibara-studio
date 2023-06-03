import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateOrderResponse {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsString()
    picture: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    datetime: string;

    @ApiProperty()
    @IsString()
    user: string

}