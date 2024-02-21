import Product from '../models/products.model.js';
const productDAO = {};
productDAO.getAll= async()=>{
    const products = await Product.find();
    return products;
};
productDAO.getOne= async(barcode)=>{
    const product = await Product.findOne({
        barcode: barcode
    });
    return product;
};

productDAO.insertOne= async(product)=>{
    return await Product.create(product);
};
productDAO.updateOne = async(barcode,product) =>{
    return await Product.findOneAndUpdate({barcode:barcode}, product)
};
productDAO.deletetOne= async(barcode)=>{
    return await Product.findOneAndDelete({barcode:barcode});
};

export default productDAO;