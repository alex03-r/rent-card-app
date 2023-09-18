
import './App.css'
import React, { useRef } from "react"
import { dataBase } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

import OpenAI from "openai";



 async function callChatGpt(){

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "how are you" }],
    model: "gpt-3.5-turbo",
});

console.log(chatCompletion)

}

function App() {


  // make a chact GPTClone
  const email = useRef(null!)
  
  const password = useRef(null!)

 async function createUser(){
  
  callChatGpt()
 let   OPENAI_API_KEY = "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"
    
    // fetch("https://api.openai.com/v1/chat/completions/", {
    //   method:"POST",
      
    //   headers:{
    //     "Content-Type" : "application/json",
    //     "Authorization": `Bearer ${OPENAI_API_KEY}`
    //   },
    //   body:  JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //    messages: [{role: "user", content: "How are you?"}],
    //   //  temperature: 0.7
    //  })
    // }).then(v => v.json())
    //    .then(response => console.log(response))
    //     .catch(error => console.log(error))



    // if( !email.current.value || !password.current.value){

    //   return
    // }


    // try {

    //   const docRef = await addDoc( collection(dataBase, "users"), {

    //     id: Date.now().toString(),        
    //     email:email.current.value,
    //     password: password.current.value

    //   })

    //  console.log(docRef)
      
    // } catch (error) {
    //   console.log(error)
    // }

  }


  return (
    <>
      <div className='border rounded w-100 d-flex flex-column '>
         <h1>Registers</h1>
         <input ref={ email } className='form-control' placeholder='email'/>
         <input ref={ password } className='form-control' placeholder='password' />
          <button onClick={createUser} >Create</button>
      </div>
    </>
  )
}





export default App
