import productDAO from "../dao/products.dao.js";

export const getAll=(request, response)=>{
    productDAO.getAll()
    .then(products=>response.json('../src/views/index', {products}))
    .catch(err=>response.json({
        status:"Server unavailable"
    }));
};

export const getOne=(request, response)=>{
    productDAO.getOne(request.params.barcode)
    .then(product=>{
        !product ? response.json({
            message: "product not found"
        }) : response.json('../src/views/edit',{product});
    })
    .catch(err=>response.json({
        status:"Server unavailable"
    }));
};

export const insertOne=(request, response)=>{
    productDAO.insertOne(request.body)
    .then(result=>response.json('/'))
    .catch(err=>response.json({status:"Server unavailable"}));
};

export const updateOne=(request, response)=>{
    console.log(request.body);
    productDAO.updateOne(request.params.barcode, request.body)
    .then(result=>response.json('/'))
    .catch(err=>response.json({status:"Server unavailable"}));
};

export const deleteOne=(request, response)=>{
    productDAO.deletetOne(request.params.barcode)
    .then(result=>response.json('/'))
    .catch(err=>response.json({status:"Server unavailable"}));
};