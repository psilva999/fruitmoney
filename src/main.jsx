import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import AuthProvider from './context/AuthProvider'

import Apresentacao from './components/Apresentacao.jsx'
import Jogar from './components/user/Jogar.jsx'
import Saque from './components/user/Saque.jsx'

import Afiliados from './components/user/Afiliados.jsx'
import Indique from './components/user/Indique.jsx'

import Deposito from './components/user/Deposito.jsx'

import App from './App.jsx'
import Game from './components/user/Game.jsx'

import './css/app.min.css'
import Admin from './components/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/fruitmoney',
    element: <App/>,
    
    children: [
      { path:'/fruitmoney', element: <Apresentacao/> },
      { path:'/fruitmoney/jogar', element: <Jogar/> },

      { path:'/fruitmoney/saque', element: <Saque/> },
      { path:'/fruitmoney/afiliados', element: <Afiliados/> },
      { path:'/fruitmoney/indique', element: <Indique/> },

      { path:'/fruitmoney/deposito', element: <Deposito/> },
      { path:'/fruitmoney/admin', element: <Admin/> },
    ],
  },

  {
    path: '/fruitmoney/game',
    element: <Game/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
