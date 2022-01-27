import React ,{ useState  } from 'react'
import { View ,Button  } from 'react-native';
import { Container } from './Phone';

export default function Phone_storage() {

   const  getList = () => {
        let tit = localStorage.getItem('null')
if(tit){
  return JSON.parse(localStorage.getItem('null'))
}else{
    return []
}
              
};

    let getItem = localStorage.getItem("title")
   
    const [state, setstate] = useState('')
    const [state1, setstate1] = useState(getList())
    


    function localstre(){
        if(state == ""){
            return 
        }else{
        setstate1([...state1, state])
        setstate('')
        let tit = localStorage.getItem('title')
        localStorage.setItem(`${tit}` ,   JSON.stringify([...state1,state]))
        console.log(state1)
        }
    }

    return (
        
        <Container>           
    
            <h1>{getItem}</h1>

            <ul>
                {state1.map((value, index) =>{
                    return <li key={index}>{value}</li>  
                })}
            </ul>

        
               


<input
value={state}
placeholder='Enter your todo lists'

onChange={e => setstate(e.target.value)}
/>
<br/>

<button onClick={localstre}>Save you Todo List</button>
        </Container>
    )
}

