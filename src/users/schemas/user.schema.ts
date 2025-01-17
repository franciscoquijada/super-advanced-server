import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  //   @Prop()
  //   name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  //   @Prop([String])
  //   address: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
