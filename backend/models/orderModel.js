import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "User",
    },
    orderItems:[
        {
            name: {type: String, required: true},
            qty: {type: Number, required: true},
            image: {type: String, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId, 
                required: true,
                ref: "Product",
            },
        }
    ],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentResult: {
        id: {type: String },
        status: {type: String },
        update_time: {type: String },
        email_address: {type: String },
    },
    itemsPrice:{
        type: Number,
        reuqired: true,
        default: 0.0,
    },
    taxPrice: {
        type: Number,
        reuqired: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        reuqired: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        reuqired: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        reuqired: true,
        default: false,
    },
    paidAt:{
        type: Date,
    },
    isDelivered:{
        type: Boolean,
        reuqired: true,
        default: false,
    },
    deliveredAt:{
        type: Date,
    },
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;