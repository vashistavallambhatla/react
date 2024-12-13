import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from '../pages/todo'
import Products from '../pages/products'
import RegistrationForm from '../pages/registrationForm'
import WeatherApp from '../pages/weatherApp'
import CustomHook from '../pages/customHook'
import RouterPage from '../pages/routes'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <RouterPage></RouterPage>
    </>
  )
}

export default App
