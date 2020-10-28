class ProductRepository {
    constructor({ productModel }) {
        this.productModel = productModel;
    }

    async createProduct(data) {
        return await this.produtoModel.create(data);
    }
}

module.exports = ProductRepository;