import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
  const{currentUser} = useSelector(state => state.user);

  return (
    <div className='max-w-lg mx-auto'>        
      <h1 className='font-semibold text-center pt-5 text-3xl'>Profile</h1>
      <div>
      <form className='flex flex-col gap-4'>
        {currentUser ? <img src={currentUser.profilePicture}  className='w-20 h-20 rounded-full object-cover self-center mt-2 cursor-pointer'/> : null}
        <input type='text' placeholder='UserName' id='username' defaultValue={currentUser.userName} className='bg-slate-100 rounded-lg p-3'/>
        <input type='email' placeholder='Email' id='email' defaultValue={currentUser.email}  className='bg-slate-100 rounded-lg p-3'/>
        <input type='password' placeholder='Password' id='password' defaultValue={currentUser.password}  className='bg-slate-100 rounded-lg p-3'/>
        <button className='rounded-lg bg-slate-700 text-white p-3 hover:opacity-95 disabled:opacity-80'>UPDATE</button>
      </form>
      </div>
    </div>
  )
}
