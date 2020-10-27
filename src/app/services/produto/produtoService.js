module.exports = ({ ProdutoRepository }) => ({
    createProduto: async (data) => {
        return await ProdutoRepository.createProduto(data);
    },
    deleteProduto: async (data) => {
        return await ProdutoRepository.deleteProduto(data);
    },
    getProduto: async produto => {
        return await ProdutoRepository.getProduto(produto);
    }
});