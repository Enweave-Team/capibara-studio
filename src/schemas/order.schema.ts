import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {User} from "./user.schema";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    picture: string;

    @Prop()
    datetime: string;

    @Prop({type: Types.ObjectId, ref: 'User'})
    user: User;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
