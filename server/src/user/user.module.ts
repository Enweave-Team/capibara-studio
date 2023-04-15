import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../schemas/user.schema";
import {Order, OrderSchema} from "../schemas/order.schema";


@Module({
    imports : [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])
    ],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {}