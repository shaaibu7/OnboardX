import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import OnBoardPage from './pages/OnBoardPage'
import HomePage from './pages/HomePage'
import PaymentStatus from './components/PaymentStatus'
import RootPage from './Root'
import './App.css'

function App() {
    const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootPage/>}>
            <Route index element={<HomePage/>} />
            <Route path='/onboard'element={<OnBoardPage/>} />
            <Route path='/paymentstatus'element={<PaymentStatus/>} />
        </Route>
      )
    )

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
