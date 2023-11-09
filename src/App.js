import React from "react"; 
import WordLetterCounter from "./WordLetterCounter"; 
import "./App.css"; 
  
function App() { 
    return ( 
        <div className="App"> 
            <h1> 
            Responsive Paragraph Word Counter
            </h1> 
            <WordLetterCounter /> 
        </div> 
    ); 
} 
  
export default App;