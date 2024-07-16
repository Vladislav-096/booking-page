// Создаю контекст, который будет принимать имя и телефон пользователя
import { createContext } from 'react';

type ContextParams = { name: string; phone: string; };

export const UserContext = createContext<ContextParams>(
  {
    name: '',
    phone: '',
  }
);
