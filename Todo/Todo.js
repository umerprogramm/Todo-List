import React ,{ useState } from 'react'
import { View ,Button } from 'react-native'
import Sign_up from '../sign up/Sign_up'

export default function Todo(props) {
    const [state, setstate] = useState('')
    const [state1, setstate1] = useState([])
    const [title, settitle] = useState('')
    function localstre(){
        setstate1([...state1, state])
        setstate('')
        localStorage.setItem(`${title}`, [...state1, state])

    }
    return (
        
        <View style={{flex:1, justifyContent:"center" , alignItems : "center" ,paddongTop : '15px'}}>
           <h1>{title}</h1>
           <h1>Hi {props.name}</h1> 
    
            {localStorage.getItem(`${title}`)}
<input
placeholder='Enter your todo title'
value={title}
onChange={e => settitle(e.target.value)}
/>

<input
value={state}
placeholder='Enter your todo lists'

onChange={e => setstate(e.target.value)}
/>
<Button
title={"save on cloud"}
/>
<Button
title={"save on your storage"}
onPress={localstre}
color={"pink"}
/>
        </View>
    )
}
