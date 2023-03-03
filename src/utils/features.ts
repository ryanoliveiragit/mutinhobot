import { GiTicket } from 'react-icons/gi';

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
        title: 'Ambientes IBB',
        description: 'essa funcionalidade pode estar relacionada à criação de um ambiente de desenvolvimento para o bot, que pode ser usado por desenvolvedores para criar e testar novas funcionalidades para o bot',
    },
    {
        title: 'Clear',
        description: 'essa funcionalidade pode estar relacionada à limpeza de conversas antigas ou ao apagamento de informações de sessões de conversas anteriores',
    },
    {
        title: 'DM',
        description: 'essa funcionalidade pode estar relacionada ao envio de mensagens diretas para os usuários do bot.',
    },
    {
        title: 'Modelo de chamado',
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
        title: 'Moderation',
    },
    {
        id: 2,
        title: 'Custom commands',
    },
    
    {
        id: 3,
        title: 'Reaction roles',
    },
    {
        id: 4,
        title: 'Twitch, YouTube and Twitter alerts',
    },
]
