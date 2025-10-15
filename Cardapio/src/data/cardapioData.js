

// ATENÇÃO: Se suas imagens estiverem na pasta 'assets',
// você deve usar o caminho correto dentro da função require().

// Importa todas as imagens locais para que o React Native as inclua no bundle
const IMAGENS = {
    BOLINHO_COBERTURA: require('../assets/bolinhos-com-cobertura.jpg'),
    BOLO_BAUNILHA: require('../assets/bolo-de-baunilha.jpg'),
    TORTA_CEREJA: require('../assets/torta.jpg'),
    MACARRONS: require('../assets/images/macarrons.jpg'),
    TORTA_BANANA: require('../assets/torta-de-banana.jpg'),
    CUPCAKES_AVELA: require('../assets/cupcakes-avela.jpg'),
    TORTA_CHOCOLATE: require('../assets/torda-de-chocolate.jpg'),
    CUPCAKES: require('../assets/cupcakes.jpg'),
    BOLO_AVELA: require('../assets/bolo-de-avela.jpg'),
    BOLINHOS_CHOCOLATE: require('../assets/bolinhos-de-chocolate.jpg'),
};

export const CARDAPIO = [
    {
        id: 'bolo-vanilla-drip',
        nome: 'Bolo Clássico de Baunilha',
        categoria: 'Bolos',
        preco: 120.00,
        descricao: 'Bolo de baunilha com camadas generosas de chantilly cremoso, coberto com uma elegante calda de chocolate amargo.',
        imagem: IMAGENS.BOLO_BAUNILHA,
        disponivel: true,
    },
    {
        id: 'torta-floresta-negra',
        nome: 'Torta Floresta Negra Gourmet',
        categoria: 'Bolos',
        preco: 22.90, // Preço por fatia
        descricao: 'Fatia de bolo de chocolate intenso, creme de baunilha leve e recheio de cerejas silvestres. Acompanha chantilly.',
        imagem: IMAGENS.TORTA_CEREJA,
        disponivel: true,
    },
    {
        id: 'bolo-avelas-roxas',
        nome: 'Bolo Avelã e Amora (Premium)',
        categoria: 'Bolos',
        preco: 180.00,
        descricao: 'Um bolo audacioso com camadas de avelã, cobertura em tons de roxo, decorado com amoras frescas e flores comestíveis.',
        imagem: IMAGENS.BOLO_AVELA,
        disponivel: true,
    },
    {
        id: 'torta-tiramisu',
        nome: 'Torta Tiramisu de Banana',
        categoria: 'Bolos',
        preco: 25.50, // Preço por fatia
        descricao: 'Versão autoral e irresistível do Tiramisu, com camadas de massa de cacau, creme de banana e finalizada com chocolate em pó.',
        imagem: IMAGENS.TORTA_BANANA,
        disponivel: true,
    },
    {
        id: 'torta-choc-morango',
        nome: 'Torta Suprema de Chocolate',
        categoria: 'Bolos',
        preco: 21.00, // Preço por fatia
        descricao: 'Fatia de bolo de chocolate super cremoso com cobertura de ganache, acompanhada de um morango fresco.',
        imagem: IMAGENS.TORTA_CHOCOLATE,
        disponivel: true,
    },
    {
        id: 'bolinho-red-dot',
        nome: 'Bolinho Festa Silvestre',
        categoria: 'Cupcakes & Bolinhos',
        preco: 8.50,
        descricao: 'Cupcakes de massa branca com cobertura de glacê tradicional e uma framboesa fresca. Embalagem em poá vermelho.',
        imagem: IMAGENS.BOLINHO_COBERTURA,
        disponivel: true,
    },
    {
        id: 'cupcake-choc-chip',
        nome: 'Muffin de Gotas de Chocolate',
        categoria: 'Cupcakes & Bolinhos',
        preco: 7.00,
        descricao: 'Muffin tradicional de baunilha, macio e fofo, com muitas gotas de chocolate ao leite por dentro e por cima.',
        imagem: IMAGENS.CUPCAKES,
        disponivel: true,
    },
    {
        id: 'cupcake-avelã-roxo',
        nome: 'Cupcake Paixão Lilás',
        categoria: 'Cupcakes & Bolinhos',
        preco: 9.00,
        descricao: 'Cupcake de massa de avelã com uma generosa cobertura de creme lilás e confeitos em formato de coração.',
        imagem: IMAGENS.CUPCAKES_AVELA,
        disponivel: true,
    },
    {
        id: 'cupcake-choc-swirl',
        nome: 'Cupcake Redemoinho de Chocolate',
        categoria: 'Cupcakes & Bolinhos',
        preco: 9.50,
        descricao: 'Cupcake de chocolate amargo com uma cobertura alta e saborosa de creme de chocolate, finalizado com raspas de cacau.',
        imagem: IMAGENS.BOLINHOS_CHOCOLATE,
        disponivel: true,
    },
    {
        id: 'macarron-torre',
        nome: 'Macarrons Sortidos (Torre)',
        categoria: 'Macarons',
        preco: 6.00, // Preço por unidade
        descricao: 'Macarrons artesanais e crocantes de sabores tradicionais (caramelo, chocolate e baunilha). Perfeitos para um café.',
        imagem: IMAGENS.MACARRONS,
        disponivel: true,
    },
];