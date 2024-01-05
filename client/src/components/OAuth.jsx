import React from 'react';
import {useDispatch} from 'react-redux';
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice';
export default function OAuth() {
    const dispatch = useDispatch();
const handleGoogleClick = async() => {   

    try{
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth,provider);
        const res = await fetch('/api/auth/google',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL,
            })
        });
    
        const data = await res.json();
        dispatch(signInSuccess(data))
    }
    catch(error){
        console.log(error)
    }
}
  return (
   <button type="button" className='bg-red-700 rounded-lg uppercase text-white hover:opacity-95 p-3'
   onClick={handleGoogleClick}>Continue with Google</button>
  )
}
