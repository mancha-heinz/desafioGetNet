const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');

module.exports = opts => ({
    createProduto: AsyncMiddleware(async ctx => {
        const response = await opts.createProdutoOperation.execute(ctx.body);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(response);
    })
});