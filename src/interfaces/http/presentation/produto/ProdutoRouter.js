module.exports = ({ container }) => {
    const ctx = container.container;
    return [{
        method: 'post',
        path: '/',
        validation: {
            body: ctx.produtoSchema.create,
        },
        handler: ctx.produtoController.createProduto
    }]
}