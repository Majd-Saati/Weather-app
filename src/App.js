import './index.css'
import './App.css';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import {  useState  } from 'react';
import CardSkeleton from './component/Card/CardSkeleton';


//https://api.openweathermap.org/data/2.5/forecast?q=london&appid=30cee8c74f2dd54a7ed242cc20ab5772
function App() {
  const API_KEY = "30cee8c74f2dd54a7ed242cc20ab5772";
 const[info , setInfo]= useState({});
 const [city , setCity] = useState('paris');
 const [loading , setLoading] = useState(false);
 const[error , setError] = useState(null)
 

async function getWeather(cityName ){
  setLoading(true)
  setError(null)
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
    const data = await res.json()
    if(!res.ok){
      throw new Error('we couldnt found this city')
    }
    setInfo(data)
  }
  catch(error){
    setError(error.message)
  }
  setLoading(false)
  
}  

/* useEffect(()=>{
  if(city){
    getWeather(city);
  }
 },[city]) */

 console.log(info);
const weatherArr = info.list;
 const days = []; 
  weatherArr && weatherArr.map((day , idx)=>{
    if(idx%8===0 ){
      days.push(day)  
    };
    return days
  })
const cards =  days.map((day,id)=>{
  return  <Card key={id} day={day} city = {info.city.name}/>
})

let content = null;
if(cards.length > 0){
  content = cards;
}
if(loading){
  content = <CardSkeleton  num={5}/>
}
if(error){
  content = error;
}
  return(
    <div className="App">
      <div className='container'>
        <Form onSubmit={getWeather} setCity= {setCity} city = {city} />
        <div className='card-handler'>  
        {content}
        </div>    

      </div>
    </div>
  );
}
export default App;
