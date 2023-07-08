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
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import NutritionForm from '../NutritionForm/NutritionForm'
import SleepForm from '../SleepForm/SleepForm'
import {getExercises, getNutrition, getSleep, getUser, getActivity} from "../../utilities/apiClient"

function App() {
  const[activity, setActivity] = useState({})
  const[exercises, setExercises] = useState([])
  const[nutritions, setNutritions] = useState([])
  const[sleep, setSleep] = useState([])
  const[error, setError] = useState({})
  const[isLoggedIn, setLoggedIn] = useState(async () => {
    try {
      getUser().then((response) => {
        return response  
      })
    } catch(err) {
      setError(err)
      console.log(error)
    }
  })

  useEffect(() => {
    try {
      getUser().then((response) => {
        if (response) {
          setLoggedIn(true)
          getActivity().then((list) => {
            setActivity(list)
          })
          getExercises().then((list) => {
            setExercises(list)
          })
          getNutrition().then((list) => {
            setNutritions(list)
          })
          getSleep().then((list) => {
            setSleep(list)
          })
        } else {
          setLoggedIn(false)
        }
      })
    } catch(err) {
      setError(err)
      console.log(error)
    }
  }, [])

  const reset = function() {
    setActivity({})
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
          reset = {reset}/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>

          <Route path = "/activity" 
          element = {<ActivityPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          activity = {activity}
          setActivity = {setActivity}
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
          setLoggedIn = {setLoggedIn}
          exercises = {exercises}
          setExercises = {setExercises}
          nutritions = {nutritions}
          setNutritions = {setNutritions}
          sleep = {sleep}
          setSleep = {setSleep}/>}/>

          <Route path = "/register" element = {<RegisterPage
          isLoggedIn = {isLoggedIn}
          setLoggedIn = {setLoggedIn}
          exercises = {exercises}
          setExercises = {setExercises}
          nutritions = {nutritions}
          setNutritions = {setNutritions}
          sleep = {sleep}
          setSleep = {setSleep}/>}/>

          <Route path = "/exercise/form" element = {<ExerciseForm
          exercises = {exercises}
          setExercises = {setExercises}
          isLoggedIn = {isLoggedIn}/>}/>

          <Route path = "/nutrition/form" element = {<NutritionForm
          nutritions = {nutritions}
          setNutritions = {setNutritions}
          isLoggedIn = {isLoggedIn}/>}/>

          <Route path = "/sleep/form" element = {<SleepForm
          sleep = {sleep}
          setSleep = {setSleep}
          isLoggedIn = {isLoggedIn}/>}/>

          <Route path = "*" element = {<h1 className = "restricted"> 404 NOT FOUND </h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
