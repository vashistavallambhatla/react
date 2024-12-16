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
import ProductList from '../pages/productList'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { CartContextProvider } from '../context/CartContext'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Router>
    <QueryClientProvider client={queryClient}>
    <CartContextProvider>
        <ProductList></ProductList>
    </CartContextProvider>
    </QueryClientProvider>
    </Router>
    </>
  )
}

export default App
