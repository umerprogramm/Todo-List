import React, { useState ,  } from 'react'
import { View, Text ,Button } from 'react-native'
// import GoogleButton from 'react-google-button'
import { auth, provider } from "./Firebase"
import {  signInWithPopup } from "firebase/auth";
import Phone_storage from './phone_storage/Phone_storage';





  function Sign_up() {
    
  const [state, setstate] = useState('')


 async function Singn(){
    
  signInWithPopup(auth,provider)
    .then((result) => {
      console.log(result.user.displayName)

    setstate(result.user.displayName)

})
    .catch((error) => console.log("sorry,you cannot sign in", error));
    
 
  }

    return (
<>

      
        {state!==''?<Phone_storage/>:
        <>
     
        <View style={{ justifyContent: 'center', alignItems: 'center' , paddingTop : '50px' }}>
        
      
        <Text><h1>Humchat</h1></Text>
          
         
        </View>
        <View  style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>

<button onClick={Singn}>sign up</button>
    <Button
    title='Local Storage'

    />
    
    </View>
    </>
  }
        </>
        
    )
  

}
export default Sign_up
