import { Module } from '@nestjs/common';
import {OrderModule} from "./order/order.module";
import {MongooseModule} from "@nestjs/mongoose";
import env from "../config";
import {UserModule} from "./user/user.module";


@Module({
  imports: [
      OrderModule,
      UserModule,
      MongooseModule.forRoot(env.dbUrl)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
