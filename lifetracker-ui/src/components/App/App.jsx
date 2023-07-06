import './App.css'
import * as React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import Navbar from "../Navbar/Navbar.jsx"
import Home from "../Home/Home.jsx"
import ActivityPage from '../ActivityPage/ActivityPage'
import ExercisePage from "../ExercisePage/ExercisePage"
import NutritionPage from '../NutritionPage/NutritionPage'
import SleepPage from '../SleepPage/SleepPage'
import LoginPage from '../LoginPage/LoginPage'

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>

          <Route path = "/activity" 
          element = {<ActivityPage/>}/>

          <Route path = "/exercise" 
          element = {<ExercisePage/>}/>

          <Route path = "/nutrition" 
          element = {<NutritionPage/>}/>
          
          <Route path = "/sleep" 
          element = {<SleepPage/>}/>

          <Route path = "/login" element = {<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
