class ProductRepository {
    constructor({ productModel }) {
        this.productModel = productModel;
    }

    async createProduct(data) {
        return await this.productModel.create(data);
    }
}

module.exports = ProductRepository;