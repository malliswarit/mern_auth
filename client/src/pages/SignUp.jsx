import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth';
export default function SignUp() {
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

    try{
      setLoading(true);
      setError(false)
      
      const res = await fetch('/api/auth/signup' ,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });

      const data = await res.json();
            setLoading(false);
        
     if (data.success === false) {
        setError(true);
        return;
      }
      else{
        navigate("/sign-in") 
      }

      
      
    }
    catch(err){
    setLoading(false)
    setError(true)
    }
  }

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='form-semibold text-3xl text-center my-7'>Sign up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" id="username" placeholder='UserName' className='bg-slate-100 p-3 rounded-lg' onChange={(e) => handleChange(e)}/>
        <input type="text" id="email" placeholder='Email' className='bg-slate-100 p-3 rounded-lg' onChange={(e) => handleChange(e)}/>
        <input type="text" id="password" placeholder='Password' className='bg-slate-100 p-3 rounded-lg' onChange={(e) => handleChange(e)}/>
        <button className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 p-3'
        disabled={loading}>{loading? "LOADING" : "Sign up"}</button>
         <OAuth />
        <div className='flex gap-2'>
          <p>Have an account?</p>
          <Link to ="/sign-in">
          <span className='text-blue-500'>Sign In</span>
          </Link>

        </div>
      
        <p className='text-red-200'>{error  ? error ||  'Something went wrong' : ''}</p>        

      </form>
    </div>
  )
}
