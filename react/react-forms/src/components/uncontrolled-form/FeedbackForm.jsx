import React from 'react'
import { useRef } from 'react';
function FeedbackForm() {
        const nameref = useRef();
        const emailref = useRef();
        const feedbackref = useRef();

        const handleSubmit = ()=>{
            alert(`Feedback: \n
                Name: ${nameref.current.value} \n
                Email: ${emailref.current.value}\n
                Feedback: ${feedbackref.current.value}`)
        }
  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        Name: <input type="text"  ref={nameref}/>
        <br /><br />
        Email : <input type='email' ref={emailref}/>
        <br /><br />
        Feedback: <textarea rows="4" cols="30"  ref={feedbackref}/>
        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FeedbackForm
