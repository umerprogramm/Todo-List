import React ,{ useState , useEffect } from 'react'
import { View ,Button } from 'react-native';

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
    const [title, settitle] = useState('')
    

    function add(){
        localStorage.setItem("title", title)
        settitle('')
    }
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
        
        <View style={{flex:1, justifyContent:"center" , alignItems : "center" ,paddongTop : '15px'}}>           
    
            <h1>{getItem}</h1>

            <ul>
                {state1.map((value, index) =>{
                    return <li key={index}>{value}</li>  
                })}
            </ul>

        
               
<input
placeholder='Enter your todo title'
value={title}
onChange={e => settitle(e.target.value)}
/>

<button onClick={add}>Add</button>

<input
value={state}
placeholder='Enter your todo lists'

onChange={e => setstate(e.target.value)}
/>

<Button
title={"save "}
onPress={localstre}
color={"pink"}
/>
        </View>
    )
}
