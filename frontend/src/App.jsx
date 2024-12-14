import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import OnBoardPage from './pages/OnBoardPage'
import RegisterUser from './pages/RegisterUser'
import PaymentStatus from './components/PaymentStatus'
import RootPage from './Root'
import './App.css'
import LandingPage from './pages/LandingPage'
import EmployesPage from './pages/EmployesPage'

function App() {
    const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootPage/>}>
            <Route index element={<LandingPage/>} />
            <Route path='register' element={<RegisterUser/>}/>
            <Route path='/onboard'element={<OnBoardPage/>} />
            <Route path='/employess' element={<EmployesPage/>}/>
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
