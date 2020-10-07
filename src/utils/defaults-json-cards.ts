export const fastCard = {
  fastCard: {
    title: 'fast card title',
    subTitle: 'fast card subtitle',
    date: '00/00',
    show: true,
  },
};

const random = () => Math.floor(Math.random() * 400);

export const defaultCard = {
  position: {
    x: random(),
    y: random(),
  },
  data: {
    title: 'Title',
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
    description: 'here here a new description',
    tags: [
      {
        color: '#000',
        text: 'tags',
      },
    ],
  },
};

export const defaultBoard = {
  title: 'titulo do board',
  description: 'descrição do board',
  users: [],
};
