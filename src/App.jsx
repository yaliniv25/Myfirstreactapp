import React from "react";
import './App.css'

function App(){

  let username="Yaaal"

  function Greet(){
    alert("Hii people")
  }


  return (
    //html is always writtem inside return , under div cintainer
    //most close all the html tags.
    //no id tag used
    <div className="app">
      <nav>
        <ul>
          <li>HOME</li>
          <li> Support </li>
        </ul>
      </nav>

      <h1 className="head"> This is REACT session  </h1>
      <h2> My name is:{username}</h2>

      <p> good evening folks!!! </p>

      <button onClick={Greet}> Click meeee !!!! </button>

      <input type="text" placeholder="Enter your name bruh" /> 

    </div>
  )

}

export default App