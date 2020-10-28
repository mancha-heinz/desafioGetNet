module.exports = ({ ProductRepository }) => ({
    createProduct: async (data) => {
        return await ProductRepository.createProduct(data);
    },
    deleteProduct: async (data) => {
        return await ProductRepository.deleteProduct(data);
    },
    getProduct: async product => {
        return await ProductRepository.getProduct(product);
    }
});