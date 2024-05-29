import React,{useState} from 'react';
import './index.css';



const App=()=>
{

  const [val,setVal]=useState(0);
  const IncF=()=>
  {
    return setVal((ov)=>
    {
           return( ov+1);
    })

  }
  const ResF=()=>
  {
   return setVal(0);
  }
  const DecF=()=>{

    setVal((ov)=>{
      if(ov>0)
      {
         return (ov-1)      
      }
      else{
        // ov==0 || ov<0
        alert("final limit is reached")
           return 0;
      }
      
    })

  }






  return (<>
  <nav>

  <div className="centerdiv">
    <h1>{val}</h1>
    <br />
    
   <button onClick={IncF} className="inc btn-hero">increment</button> <button className="res btn-hero" onClick={ResF}>reset</button><button className="dec btn-hero" onClick={DecF}>decrement</button>
  </div>
  </nav>

  </>)

}
export default App;