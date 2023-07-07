import './App.css'
import * as React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "../Navbar/Navbar.jsx"
import Home from "../Home/Home.jsx"
import ActivityPage from '../ActivityPage/ActivityPage'
import ExercisePage from "../ExercisePage/ExercisePage"
import NutritionPage from '../NutritionPage/NutritionPage'
import SleepPage from '../SleepPage/SleepPage'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import {getExercises, getNutrition, getSleep} from "../../utilities/apiClient"

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false)
  const[exercises, setExercises] = useState([])
  const[nutritions, setNutritions] = useState([])
  const[sleep, setSleep] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('lifetracker_token')
    if (token == "null") {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
      getExercises().then((list) => {
        setExercises(list)
      })
      getNutrition().then((list) => {
        setNutritions(list)
      })
      getSleep().then((list) => {
        setSleep(list)
      })
    }
  }, [])

  const resetEverything = function() {
    setLoggedIn(false)
    setExercises([])
    setNutritions([])
    setSleep([])
  }

  return (
    <div className = "App">
      <BrowserRouter>
        <Navbar
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          resetEverything = {resetEverything}/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>

          <Route path = "/activity" 
          element = {<ActivityPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          />}/>

          <Route path = "/exercise" 
          element = {<ExercisePage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          exercises = {exercises}
          setExercises = {setExercises}/>}/>

          <Route path = "/nutrition" 
          element = {<NutritionPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          nutritions = {nutritions}
          setNutritions= {setNutritions}/>}/>
          
          <Route path = "/sleep" 
          element = {<SleepPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          sleep = {sleep}
          setSleep = {setSleep}/>}/>

          <Route path = "/login" element = {<LoginPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}/>}/>

          <Route path = "/register" element = {<RegisterPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}/>}/>

          <Route path = "*" element = {<h1 className = "restricted"> 404 NOT FOUND </h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
