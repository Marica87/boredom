import { useEffect,  useState } from 'react';
import './App.css';
import  gsap  from 'gsap';
import light from './light.png'



function App() {

  function animation (){
    gsap.to('.light_one',  {
  y: 300,
  duration:4,
  opacity: 1,
  delay:.5,
  ease: "bounce"
  
});
gsap.to('.light_two',  {
  y: 280,
  duration:5,
  opacity: 1,
  delay: 1,
  ease: "bounce"
});
gsap.to('.light_three',  {
  y: 250,
  duration:6,
  opacity: 1,
  delay:1.5,
  ease: "bounce"
});

}

const [tips, setTips] = useState("");





const fetchTips = async () => {
const responce = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await responce.json();

setTips(data.activity);

}  

useEffect(()=> {

  animation()


fetchTips();


},[])


  return (
    <div className="App">
      <div className='container_img'>
      <img className='light_one' src={light} width="400px"  alt="лампочка" />
      <img className='light_two' src={light} width="400px"  alt="лампочка" />
      <img className='light_three' src={light} width="400px"  alt="лампочка" />
      </div>
      
      <div className='container_header'>
      
        <h1 className='header'>HANDS AREN'T FOR BOREDOM</h1>
        <button onClick={fetchTips}  className='btn'>click and fight boredom</button>
        <p>{tips}</p>
      </div>
      
    </div>
  );
}


export default App;
