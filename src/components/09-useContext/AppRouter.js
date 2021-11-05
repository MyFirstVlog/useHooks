import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from "./HomeScreen";
import { Login } from "./Login";
import { NavBar } from "./NavBar";


export const AppRouter = () => {

    //implementaciones cambiaron en el switch
    return (
        <Router>
            <div>

                <NavBar/>

                <Routes>
                    <Route exact path='/' element={<HomeScreen/>} />
                    <Route exact path='/about' element={<AboutScreen/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route path="*" element={<HomeScreen />} />
                </Routes>
            </div>
        </Router>
    )
}

