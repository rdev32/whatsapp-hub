import { createBrowserRouter } from 'react-router-dom'

import Landing from './pages/landing'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Events from './pages/events'
import Photos from './pages/photos'
import Members from './pages/members'
import Resources from './pages/resources'
import Store from './pages/store'
import Legal from './pages/legal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/photos',
    element: <Photos />
  },
  {
    path: '/members',
    element: <Members />
  },
  {
    path: '/resources',
    element: <Resources />
  },
  {
    path: '/store',
    element: <Store />
  },
  {
    path: '/legal',
    element: <Legal />
  }
])

export default router
