import React ,{ useState  } from 'react'
import Phone_storage from '../phone_storage/Phone_storage';
import { Button  } from 'react-native';
import { Tittle } from './Tittle';


export default function Title() {
  const get = localStorage.getItem("title")
  const [title , settitle] = useState('')
  const [state , setstate] = useState('')
  const Next = ()=>{
   setstate(title)
    localStorage.setItem("title",title)


  }
  
  return (
    <>
    {get!=undefined?<Phone_storage/>:

    
    <Tittle>
      
      <h1>Eneter your Title </h1>
    <input
value={title}
placeholder='Enter your todo Title'

onChange={e => settitle(e.target.value)}
/>
<button onClick={Next}>Next</button>
    </Tittle>

  }
    </>
  );
}
