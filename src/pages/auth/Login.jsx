import React from 'react'
import { schemaLoginForm }  from '../../libs/zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


function Login() {


  const { register, handleSubmit,  formState: { errors }} = useForm({resolver: zodResolver(schemaLoginForm)})

  const onSubmit = (data) => {

    console.log(data)
  }

  return (
    <div className='bg-gray-100 md:max-w-[40%] w-[50%] h-[65%] rounded-2xl flex flex-col items-center p-4'>
      <h1 className='font-bold text-2xl mb-10'>Iniciar <span className='text-green-400'>Sesión</span> </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Usuario:</label>
        <input
          {...register('username')}
          placeholder='jhoe.doe'
          className='border w-full p-2 rounded-md mb-4'
        />
        <p className='text-red-500 mb-2'>{errors.username?.message}</p>

        <label>Contraseña:</label>
        <input
          {...register('password')}
          placeholder='*****'
          className='border w-full p-2 rounded-md mb-4'
        />
        <p className='text-red-500 mb-2'>{errors.password?.message}</p>
        <button type='submit' className='w-full bg-green-400 p-3 rounded-lg'>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login
