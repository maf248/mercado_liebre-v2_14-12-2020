const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), { encoding: 'utf-8'});
products = JSON.parse(products);


module.exports = {
    detalle: function(req, res, next) {
      
        let producto = products[req.params.id - 1];
        let descuento = producto.price / 100 * producto.discount;
        let precioFinal = producto.price - descuento;
        precioFinal = Math.round(precioFinal);
        res.render('./detallesProducto', { producto: producto, precioFinal: precioFinal });
      },
}