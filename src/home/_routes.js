import React from 'react';
import ArmyIndex from '../army/ArmyIndex'
import MessageIndex from '../messages/MessageIndex'
import Home from './Home'



export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      main: () => <Home />
    },
  {
    path: '/army',
    exact: true,
    main: () => <ArmyIndex />
  },
  {
    path: '/messages',
    exact: true,
    main: () => <MessageIndex />
  }
  
]