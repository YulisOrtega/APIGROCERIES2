import { Schema, model } from "mongoose";
const productSchema= new Schema({
    barcode:{
        type: String,
        unique: true,
        require: true
    },
    description: String,
    brand: String,
    price: Number,
    cost: Number,
    stock: Number,
    expiredDate: String,
    status: Number
}, {
    versionKey:false,//para que no se inserte en los documentos "_versionV"
    timestamps: true,
});

export default model('product', productSchema);//para exportar el producto y utilizar el esquema "productSchema"