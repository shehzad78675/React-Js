import React from 'react'

function Login() {
  return (

    <div className='flex justify-center p-10'>
        <div className='flex flex-col shadow-lg rounded-lg border-2 p-5 w-[60%] sm:w-[90%]'>
            <text className='text-2xl'>Login</text>
            <div className='flex mt-3'>
                <input type="text" placeholder='username' className='border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration-200'/>
            </div>
            <div className='flex mt-3'>
                <input type="Password" placeholder='Password' className='border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration2100'/>
            </div>
            <input type="button" value="Login" className='btn mt-7 hover:scale-[1.02]'/>
        </div>
    </div>
  )
}

export default Login