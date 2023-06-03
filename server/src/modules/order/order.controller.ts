import {Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards} from "@nestjs/common";
import {OrderService} from "./order.service";
import {JwtGuard} from "../../guards/jwt-guard";
import {OrderDto} from "./dto/order.dto";
import {CreateOrderResponse} from "./response";
import {ApiResponse, ApiTags} from "@nestjs/swagger";


@Controller('orders')
export class OrderController {

    constructor(private readonly orderService: OrderService) {
    }

    @ApiTags('API')
    @ApiResponse({status: 201, type: CreateOrderResponse})
    @UseGuards(JwtGuard)
    @Post('create')
    createOrder(@Body() orderDto: OrderDto, @Req() request): Promise<CreateOrderResponse> {
        const user = request.user;
        return this.orderService.createOrder(user,orderDto);

    }

    @ApiTags('API')
    @ApiResponse({status: 200})
    @UseGuards(JwtGuard)
    @Get('get-all')
    getAllOrders(@Req() request) {
        const {_id} = request.user;

        return this.orderService.getAllOrders(_id);
    }

    @ApiTags('API')
    @ApiResponse({status: 200})
    @UseGuards(JwtGuard)
    @Delete()
    deleteOrder(@Query('id') orderId: string, @Req() request) {
        const {_id} = request.user;

        return this.orderService.deleteOrder(_id,orderId);
    }
}
