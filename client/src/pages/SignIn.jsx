import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function SignIn() {
  const[formData,setFormData] = useState({});
  const[loading,setLoading] =useState(false);
  const[error,setError] = useState(false);
  const navigate = useNavigate();
  const  handleChange= (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
   
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(false)
    setError(false)
    try{
      setLoading(true)
      const res = await fetch('/api/auth/signin',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json();
      setLoading(false)
      navigate("/");
      if(!data.success){
        setError(true)
        return
      }
      
    }
    catch(err){
    setLoading(false)
    setError(true)
    }
  }
  return (
    <div className='mx-auto max-w-lg p-3'>
      <h1 className='font-semibold my-7 text-3xl text-center'> Sign in</h1>
      <div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' id='email' placeholder='Email'className='bg-slate-100 rounded-lg p-3' onChange={handleChange}/>
        <input type='text' id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3' onChange={handleChange}/>        

        <button className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 p-3' disabled={loading}>{loading? "LOADING" : "Sign in"}</button>
        </form>
        <div className='flex gap-2'>
          
        <p>Dont have an account</p>
        <Link to ="/sign-up">
        <span className='text-blue-500'>Signup</span>
        </Link>
        </div>
      </div>
    </div>
  )
}
