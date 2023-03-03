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
        title: 'Template',
        description: 'O comando "/template" mencionado na pergunta, pode se referir a uma mensagem enviada por um bot ou por um sistema automatizado, informando que um template que estava sendo criado ou utilizado foi cancelado ou interrompido por algum motivo.',
    },
    {
        title: 'Pausa',
        description:'essa funcionalidade pode estar relacionada a pausar temporariamente a execução do bot, por exemplo, durante a manutenção ou atualização do bot.',
    },
];

export const NewFeatures = [
    {
        id: 1,
        title: 'Sistema de chamados.',
    },
    {
        id: 2,
        title: '/Pausa.',
    },
    
    {
        id: 3,
        title: '/Templates.',
    },
]
