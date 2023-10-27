import './App.css'
import Homepage1 from './HomePage/Homepage1'
import MainPage from './MainPage/MainPage.jsx'
import Login from './Logins/MainLogin.jsx'
import Signup from './Signup/Signup.jsx'
import { BrowserRouter,Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      
        <Route path="/">
         <Homepage1/>
        </Route>
        <Route path="/MainLogin">
         <Login/>
        </Route>
        <Route path="/Signup">
         <Signup/>
        </Route>
        <Route path="/MainPage">
        <MainPage/>
        </Route>
      
    </Switch>
    </BrowserRouter>
  )
}
