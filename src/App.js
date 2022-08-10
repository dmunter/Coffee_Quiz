
import './App.css';
import './resultsstyles.css';
import  { forwardRef, useState }  from 'react'
import {useRef, useEffect} from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var clicks = 0;
var correctcount = 0;

const listItems = [
  "Go for it!",
  "Only if You Must",
  "Try Skipping Today",
  "Drink Some Water!"
];

const listFact = [
  "Caffeine can raise metabolism promoting calorie burn",
  "Waiting 1 to 2 hours before drinking coffee in the morning helps aviod that mid afternoon crash",
  "Coffee contains large amounts of antioxidants that help reduce the risk of several diseases.",
  "Drinking coffee stimulates movement of the colonic muscles, which can help promote bowel regularity.",
  "Coffee can be beneficial to colon health.",
  "Several studies of coffee drinkers have shown a reduced risk of Alzheimer's disease, Type 2 diabetes, Liver cirrhosis, Heart disease",
  "Caffeine has been linked to upping anxiety, sleeplessness, and even causing psychosis."
];


function App() {
  var [Item, setItem] = useState(() => listItems[3]) 
  var [randFact, setFact] = useState (() => listFact[0])
  function results() {
    console.log(Item)
    const ele = document.querySelector('.showcase')
    ele.classList.add('display')
    if(correctcount >= 8){
      setItem(listItems[0])
    } else if( correctcount >= 6){
      setItem(listItems[1])
    } else if(correctcount > 4) {
      setItem(listItems[2])
    } 

    setFact(
      listFact[Math.floor(Math.random() * 7)]
    )
  }

  function clickHandle(e,points){
    //hook that determines the results
    


      clicks++;
      //get parent 'box' element
      var current = e.target.closest('.box')
      // get the grandparent 'container'
      var container = current.closest('.container')
      //console.log(elem.offsetTop)
      //animate the current element
      current.classList.add('fade');

      if(points == 1 ){
        correctcount+=1;
      }
      if(clicks ==10){
       results()
      }
      //change position
      var Yposition = clicks * -228;
      container.style.transform = 'translateY('+(Yposition)+'px)';
     

///----------------------------------------------------

   }
 


  return (
  <div className="app">   
   
    <div className='container'>
      <div className="box one">
        <h1>Do you like Coffee?</h1>
        
        <p>Question 1</p>
        <div className='btn-container'>
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e,0)}className='btn'>No</button>
        </div>
          
      </div>
      <div className="box 2">
      <h1>Have you had any caffeine today?</h1>
      <p>Question 2</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e,0)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>No</button>
        </div>
          
      </div>
      <div className="box 3">
      <h1>Is it past 4pm?</h1> 
      <p>Question 3</p>
        <div className='btn-container'>  
          <button onClick = {(e) => clickHandle(e)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>No</button>
        </div>
        
      </div>

      <div className="box 4">
      <h1>Are you anxious?</h1>
      <p>Question 4</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>No</button>
        </div>
        
      </div>

      <div className="box 5">
      <h1>Is coffee cheap?</h1> 
      <p>Question 5</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e)}className='btn'>No</button>
        </div>
        
      </div>

      <div className="box 6">
      <h1>Do you have high blood pressure?</h1>
      <p>Question 6</p>
        <div className='btn-container'>
          <button onClick = {(e) => clickHandle(e)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>No</button>
        </div>
        
      </div>

      <div className="box 7">
      <h1>Do you think coffee gives people energy</h1>
      <p>Question 7</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e)}className='btn'>No</button>
        </div>
        
      </div>

      <div className="box 8">
      <h1>Do you put a lot of sugar in your coffee</h1>
      <p>Question 8</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>No</button>
        </div>
        
      </div>
    
      <div className="box 9">
      <h1>Have you had much to eat today?</h1> 
      <p>Question 9</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e)}className='btn'>No</button>
        </div>
        
      </div>

      <div className="box 10">
      <h1>Do you have a busy day?</h1>
      <p>Question 10</p>
        <div className='btn-container'> 
          <button onClick = {(e) => clickHandle(e,1)}className='btn'>Yes</button>
          <button onClick = {(e) => clickHandle(e)}className='btn'>No</button>
        </div>
        
      </div>
     

    </div>
    <div className='shadow'> </div>
  

  
    <div className = 'showcase'>
      
      <h2 className = 'watermark'>Is it a good time to drink a coffee?</h2>
      <faCoffee icon="fa-solid fa-mug-hot" />
      <div className = 'results'>
          <h2>Results:</h2>
          <h1 > { Item }</h1>
          <p className = 'fun-fact'> *{ randFact }</p>
         
          <FontAwesomeIcon icon={faCoffee} className='icon-1' />
      </div>

    </div>
  </div>

  );
}

export default App;
export { correctcount , clicks };


// Coffee can be beneficial to colon health.
// True. Drinking coffee stimulates movement of the colonic muscles, which can help promote bowel regularity.


//Several studies of coffee drinkers have shown a
// Several studies of coffee drinkers have shown a
// A. Alzheimer’s disease
// B. Type 2 diabetes
// C. Liver cirrhosis
// D. Heart disease
// E. All of the above

// Coffee contains large amounts of antioxidants that help reduce the risk of several diseases.


//Waiting 1 to 2 hours before drinking coffee in the morning helps aviod that mid afternoon crash

//Caffiene can raise metabolism promoting calorie burn