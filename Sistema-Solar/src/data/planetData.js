
import { Image, StyleSheet } from "react-native";
// Dados Científicos e Descritivos dos Planetas
export const PLANETAS_DATA = [
    {
        id: 'mercurio',
        nome: 'Mercúrio',
        categoria: 'Planeta Rochoso',
        gravidade: 3.7, // m/s²
        distanciaSol: '0.4 UA',
        distanciaTerra: '77 milhões km',
        descricao: 'O menor planeta do nosso sistema e o mais próximo do Sol. Mercúrio possui extremos de temperatura, variando drasticamente entre o dia (430°C) e a noite (-180°C). Sua superfície é muito parecida com a da Lua, coberta por crateras.',
        imagem: require('../assets/images/mercurio_img.png'), // Placeholder
        curiosidade: 'Um dia em Mercúrio (do nascer ao pôr do Sol) dura cerca de 176 dias terrestres!',
    },
    {
        id: 'venus',
        nome: 'Vênus',
        categoria: 'Planeta Rochoso',
        gravidade: 8.87,
        distanciaSol: '0.7 UA',
        distanciaTerra: '40 milhões km',
        descricao: 'Vênus é o planeta mais quente do Sistema Solar, apesar de não ser o mais próximo do Sol. Seu intenso efeito estufa, causado por uma densa atmosfera de dióxido de carbono, mantém a temperatura em torno de 460°C.',
        imagem: require('../assets/images/venus_img.png'),
        curiosidade: 'Vênus é o único planeta que gira no sentido horário, um fenômeno chamado de rotação retrógrada.',
    },
    {
        id: 'terra',
        nome: 'Terra',
        categoria: 'Planeta Rochoso',
        gravidade: 9.8,
        distanciaSol: '1.0 UA',
        distanciaTerra: '0', // É o ponto de referência
        descricao: 'Nosso lar, o único planeta conhecido por abrigar vida. A Terra é o planeta mais denso do Sistema Solar e o único com água líquida estável na superfície, crucial para a vida.',
        imagem: require('../assets/images/terra_img.png'),
        curiosidade: 'A Terra não é perfeitamente redonda, mas sim um geoide (achatada nos polos).',
    },
    {
        id: 'marte',
        nome: 'Marte',
        categoria: 'Planeta Rochoso',
        gravidade: 3.72,
        distanciaSol: '1.5 UA',
        distanciaTerra: '54.6 milhões km',
        descricao: 'Conhecido como o Planeta Vermelho devido à poeira de óxido de ferro em sua superfície. É o foco de missões espaciais em busca de sinais de vida. Possui as maiores tempestades de poeira do Sistema Solar.',
        imagem: require('../assets/images/marte_img.png'),
        curiosidade: 'Marte possui a maior montanha conhecida do Sistema Solar, o Monte Olimpo, um vulcão extinto três vezes maior que o Monte Everest.',
    },
    {
        id: 'jupiter',
        nome: 'Júpiter',
        categoria: 'Gigante Gasoso',
        gravidade: 24.79,
        distanciaSol: '5.2 UA',
        distanciaTerra: '588 milhões km',
        descricao: 'O maior planeta do Sistema Solar, tão massivo que poderia caber todos os outros planetas dentro dele. É famoso pela Grande Mancha Vermelha, uma tempestade que dura séculos.',
        imagem: require('../assets/images/jupiter_img.png'),
        curiosidade: 'Júpiter tem o dia mais curto de todos os planetas, completando uma rotação em menos de 10 horas.',
    },
    {
        id: 'saturno',
        nome: 'Saturno',
        categoria: 'Gigante Gasoso',
        gravidade: 10.44,
        distanciaSol: '9.5 UA',
        distanciaTerra: '1.2 bilhões km',
        descricao: 'Reconhecido por seu impressionante sistema de anéis, compostos primariamente de gelo e rochas. É o segundo maior planeta e tem uma densidade tão baixa que teoricamente flutuaria em água.',
        imagem: require('../assets/images/saturno_img.png'),
        curiosidade: 'Saturno possui mais de 80 luas confirmadas, sendo Titã a segunda maior lua do Sistema Solar.',
    },
    {
        id: 'urano',
        nome: 'Urano',
        categoria: 'Gigante de Gelo',
        gravidade: 8.69,
        distanciaSol: '19.2 UA',
        distanciaTerra: '2.5 bilhões km',
        descricao: 'Urano se destaca por ser o único planeta que gira deitado, com seu eixo de rotação quase paralelo ao plano orbital. Sua cor azul-esverdeada é devido ao metano em sua atmosfera.',
        imagem: require('../assets/images/urano_img.png'),
        curiosidade: 'As estações em Urano duram 21 anos terrestres cada, devido à sua inclinação extrema.',
    },
    {
        id: 'netuno',
        nome: 'Netuno',
        categoria: 'Gigante de Gelo',
        gravidade: 11.15,
        distanciaSol: '30.1 UA',
        distanciaTerra: '4.3 bilhões km',
        descricao: 'O planeta mais distante do Sol (e o mais frio). Netuno é conhecido por seus ventos supersônicos, os mais rápidos do Sistema Solar. Leva cerca de 165 anos terrestres para completar uma órbita.',
        imagem: require('../assets/images/netuno_img.png'),
        curiosidade: 'Foi o primeiro planeta a ser descoberto usando cálculos matemáticos em vez de observação telescópica.',
    },
    // Adicionando um objeto secundário para um toque extra:
    
];

const styles = StyleSheet.create({
    image:{
        height: 10,
        width: 10,
    }
})