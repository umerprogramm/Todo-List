import React ,{ useState  } from 'react'
import { View ,Button  } from 'react-native';
import Header from '../Header/Header';
import { Container } from './Phone';
import AntDesign from 'react-native-vector-icons/AntDesign';


const  getList = () => {
    const get = localStorage.getItem("title")
    if(get){
        return JSON.parse(localStorage.getItem(get))
    }else{
        return []
    }
    

};
export default function Phone_storage() {

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
    const deleteItem = (index)=>{
    const get = localStorage.getItem("title")
    const update= state1.filter( value => value!==state1[index] )
   console.log(update)
    setstate1(update)
    localStorage.setItem(get , JSON.stringify(update))

        }
    
    return (
        <>    
        
        <Header/>

            <Container>           
    
            <h1>{getItem}</h1>

            <ul>
                {state1.map((value, index) =>{
                    return <li key={index}> <span><AntDesign name="delete" size={30} color="black" onPress={()=>deleteItem(index)}/> </span>{value} </li>  
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
        </>

    )
}

