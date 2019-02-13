import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({

    dateTime: {
        type: Date,
        default: Date.now
    },
    poNumber: String,
    freightForwarder: {
        companyName: String,
        contactName: String,
        companyId: Number
    },
    shipByDate: String,
    destination: {
        destinationId:Number,
        destinationName: String
    }

});

const Order = mongoose.model('orders', orderSchema);

export default Order;