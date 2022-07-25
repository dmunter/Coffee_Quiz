
import './headerstyles.css';
import '../App.css';


function Header(){
  function showContent(){
    const app = document.querySelector('.start-quiz')
    const styles = getComputedStyle(app)
    console.log(styles.zIndex)
    //toggle visiiblity
    app.classList.add('fadetwo');
    //app.style.visibility =  (styles.visibility == 'visible' ? 'hidden' : 'visible' )
    //app.style.z-index = '0'
    
  }


    return (
    <div className='start-quiz'>
      
       <div className='window' >
        <h2>Should I Drink a Coffee Right Now?</h2>
        <p>Coffee can be a great mood booster and increase productivity.</p>
        <p>However, in some situations it may be better to choose water.</p>
        <p>Take this quiz to see if its the right time to make a cup of your favorite beverage!</p>
       <button className= 'btn-1' onClick = {() => showContent()}> Begin Quiz!  </button>
      </div>
    </div>
    )
}

export default Header