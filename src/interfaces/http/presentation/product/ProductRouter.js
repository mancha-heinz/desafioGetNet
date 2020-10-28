module.exports = ({ container }) => {
    const ctx = container.cradle;
    return [{
        method: 'post',
        path: '/',
        validation: {
            body: ctx.productSchema.create,
        },
        handler: ctx.productController.createProduct
    }]
}