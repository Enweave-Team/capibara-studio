import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order, OrderDocument} from "../../schemas/order.schema";
import {CreateOrderResponse} from "./response";


@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
    }

    async createOrder(user, dto): Promise<CreateOrderResponse> {
        try {
            const order = {
                title: dto.title,
                price: dto.price,
                user: user._id,
                picture: dto.picture,
                datetime: dto.datetime,
            }
            await this.orderModel.create(order);
            return order;
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteOrder(userId: string, orderId: string) {
        try {
            return this.orderModel.deleteOne({_id: orderId, user: userId})
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAllOrders(userId: string) {
        try {
            return this.orderModel.find({user: userId});
        } catch (e) {
            throw new Error(e)
        }
    }

}
