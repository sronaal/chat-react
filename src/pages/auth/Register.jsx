import { schemaRegisterForm } from '../../libs/zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { registrarUsuario } from '../../services/UserApi'
import { useState } from 'react'

function Register() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(schemaRegisterForm) })
  const [errorResponse, setErrorResponse] = useState({})

  const onSubmit = async (data) => {

    const formData = new FormData()

    formData.append('username', data.username || '')
    formData.append('password', data.password || '')

    const fileInput = data.photo?.[0]
    if (fileInput) {
      formData.append('photo', fileInput)
    }

    registrarUsuario(formData)
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.userData)
      })
      .catch((error) => {
        console.log(error.response.data)
        setErrorResponse(error.response.data)
        reset()
      })

  }

  return (
    <div className='bg-gray-100 md:max-w-[40%] w-[50%] h-[500px] rounded-2xl flex flex-col items-center p-4'>
      <p className='text-red-500 mb-1'>{errorResponse.msg}</p>

      <h1 className='font-bold text-2xl mb-6'>Crear <span className='text-green-400'>Cuenta</span> </h1>

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
          type='password'
        />
        <p className='text-red-500 mb-2'>{errors.password?.message}</p>
        <label>Selecionar foto de perfil: </label>
        <input {...register("photo")} type='file' accept='image/*' className='border border-gray-200 w-full p-2 rounded-md mb-4' />
        <p className='text-red-500 mb-2'>{errors.photo?.message}</p>
        <button type='submit' className='w-full bg-green-400 p-3 rounded-lg mb-4 cursor-pointer'>Crear Cuenta</button>
        <p className='flex gap-4 text-xl'>¿Ya tienes una cuenta? 

          <Link className='text-xl hover:text-2xl text-green-400' to='/auth'>Ingresa</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
