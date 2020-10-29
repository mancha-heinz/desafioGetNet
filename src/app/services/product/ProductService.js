//const ProductRepository = require('src/infra/database/repository/ProductRepository');
module.exports = ({ productRepository }) => ({
    createProduct: async (data) => {
        return await productRepository.createProduct(data);
    },
    deleteProduct: async (data) => {
        return await productRepository.deleteProduct(data);
    },
    getProduct: async product => {
        return await productRepository.getProduct(product);
    }
});