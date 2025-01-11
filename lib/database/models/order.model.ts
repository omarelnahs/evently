import { Schema, model, models, Document } from 'mongoose';

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: number;
  event: {
    _id: string;
    title: string;
  };
  buyer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

export type IOrderItem = {
  _id: string;
  totalAmount: number;
  createdAt: Date;
  eventTitle: string;
  eventId: string;
  buyer: string;
};

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  event: {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  buyer: {
    _id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
});

const Order = models.Order || model<IOrder>('Order', OrderSchema);

export default Order;