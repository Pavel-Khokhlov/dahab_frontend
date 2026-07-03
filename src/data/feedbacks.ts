export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Анна Иванова',
    role: 'CEO, Company A',
    avatar: 'https://i.pravatar.cc/150?img=1',
    text: 'Отличный сервис! Команда профессионалов, которые помогли нам вывести продукт на новый уровень.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Петр Сидоров',
    role: 'Marketing Lead, Company B',
    avatar: 'https://i.pravatar.cc/150?img=2',
    text: 'Работаем с этой компанией уже год. Всегда качественно и в срок. Рекомендую!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Елена Петрова',
    role: 'Product Manager, Company C',
    avatar: 'https://i.pravatar.cc/150?img=3',
    text: 'Лучшее решение на рынке. Интуитивный интерфейс и отличная поддержка клиентов.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Михаил Смирнов',
    role: 'CTO, Company D',
    avatar: 'https://i.pravatar.cc/150?img=4',
    text: 'Благодаря этому сервису мы увеличили продажи на 40% за 3 месяца.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ольга Кузнецова',
    role: 'Founder, Company E',
    avatar: 'https://i.pravatar.cc/150?img=5',
    text: 'Простота использования и мощный функционал — именно то, что нужно для бизнеса.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Алексей Морозов',
    role: 'Sales Director, Company F',
    avatar: 'https://i.pravatar.cc/150?img=6',
    text: 'Отличная платформа для автоматизации бизнес-процессов. Сэкономили много времени.',
    rating: 4,
  },
  {
    id: 7,
    name: 'Татьяна Васильева',
    role: 'HR Director, Company G',
    avatar: 'https://i.pravatar.cc/150?img=7',
    text: 'Наши сотрудники в восторге! Удобный интерфейс и быстрая адаптация.',
    rating: 5,
  },
];