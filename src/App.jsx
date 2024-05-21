import { useState, useEffect } from "react";

function App() {

  // declaring joke state

  const [joke, SetJoke] = useState(null);
  const [pullJoke, SetpullJoke] = useState(false);

  // fetching joke

    useEffect((()=>{
      fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(res=>{return res.json()})
      .then(data=>{SetJoke(data)})
    }
    ),[pullJoke]);
    

  // render fetch, grab a new joke !

  function grabJoke(){
    SetpullJoke(!pullJoke);
  }

 // return joke to the interface

  return (
   <div>
    <h3 style={{color:"blue"}}>Joke of the Day, Please Click button below to get a new joke!</h3>
      <h2>{joke && "Joke ID:  "+joke.id+" Joke Type:  "+joke.type}</h2>
      <h1>{joke && joke.setup}</h1>
        <h1>{joke && joke.punchline}</h1>
    <button id="button" onClick={grabJoke} className="button">Click me to get a new joke</button>
   </div>   
  );
}

export default App;