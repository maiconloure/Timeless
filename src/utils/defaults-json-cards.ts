export const fastCard = {
  fastCard: {
    title: 'card rapido titulo',
    subTitle: 'card rapido subtitulo',
    date: '00/00',
    show: true,
  },
};

export const defaultCard = {
  position: {
    x: 50,
    y: 50,
  },
  data: {
    checked: false,
    group: {
      color: '',
      number: 0,
    },
    users: [],
    connected: [],
    followers: [],
    blocked: false,
    title: 'Titulo do Cartão',
    time: {
      finish: {
        date: '00/00',
        hour: '00:00',
      },
      start: {
        date: '00/00',
        hour: '00:00',
      },
      done: {
        date: '00/00',
        hour: '00:00',
      },
    },
    description: 'Coloque aqui um descrição.',
    tags: [
      {
        color: '#000',
        text: '#tags',
      },
    ],
  },
};

export const defaultBoard = {
  title: 'Titulo do board',
  description: 'Descrição do board',
  users: [],
  data: {
    text: [],
    notifications: ['Aqui aparecerá as novas atualizações do seu board!'],
  },
  connections: [],
};
