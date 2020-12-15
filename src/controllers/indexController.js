const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), { encoding: 'utf-8'});
products = JSON.parse(products);

module.exports = {
    root: function(req, res, next) {
      let data = products.reduce(function (result, product) {
        if (product.category == 'visited') {
          result.visited.push(product);
        } else {
          result.inSale.push(product);
        }
        return result;
      }, { inSale: [], visited: [] });

        res.render('index', data);
      }
}