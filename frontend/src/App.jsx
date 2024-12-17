import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import OnBoardPage from './pages/OnBoardPage'
import RegisterUser from './pages/RegisterUser'
import CompanyPage from './pages/CompanyPage'
import PaymentStatus from './components/PaymentStatus'
import VerifyPayment from './pages/VerifyPayment'
import RootPage from './Root'
import './App.css'
import LandingPage from './pages/LandingPage'
import EmployesPage from './pages/EmployesPage'
import ContextApi from './context/ContextApi'
import { ContextApiProvider } from './context/ContextApi'

function App() {
    const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootPage/>}>
            <Route index element={<LandingPage/>} />
            <Route path='register' element={<RegisterUser/>}/>
            <Route path='/onboard'element={<OnBoardPage/>} />
            <Route path='/employess' element={<EmployesPage/>}/>
            <Route path='/company' element={<CompanyPage/>}/>
            {/* <Route path='/paymentstatus' element={<PaymentStatus/>} /> */}
            <Route path='/verifypayment' element={<VerifyPayment/>}/>
        </Route>
      )
    )

  return (
    <ContextApiProvider>
        <RouterProvider router={router}/>
    </ContextApiProvider>
   
  )
}

export default App
