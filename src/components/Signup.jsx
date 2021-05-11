import React, {useRef} from 'react'
import {fb} from '../service/firebase'

export const Signup = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const signup = (e) =>{
        e.preventDefault()
        fb.auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then(res =>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <form>
                <input type="text" ref={emailRef}/>
                <input type="text" ref={passwordRef}/>
                <button onClick={signup}>Sign Up</button>

            </form>
        </div>
    )
}
