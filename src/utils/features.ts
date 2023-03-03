interface BotFunction {
    title: string;
    description: string;
    icon?: JSX.Element;
}

export const FunctionsBot: BotFunction[] = [
    {
        title: 'Chamado',
        description: 'essa funcionalidade pode estar relacionada a um sistema de suporte, onde os usuários podem criar um chamado para reportar um problema ou solicitar ajuda.',
    },
    {
        title: 'Templates',
        description: 'essa funcionalidade pode estar relacionada a uma funcionalidade de modelagem ou criação de modelos de conversação para o bot.',
    },
    {
        title: 'Pausa',
        description:'essa funcionalidade pode estar relacionada a pausar temporariamente a execução do bot, por exemplo, durante a manutenção ou atualização do bot.',
    },
];

export const NewFeatures = [
    {
        id: 1,
        title: 'Sistema de chamados',
    },
    {
        id: 2,
        title: '/Pausa',
    },
    
    {
        id: 3,
        title: '/Templates',
    },
]
