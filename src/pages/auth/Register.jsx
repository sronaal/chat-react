import { schemaRegisterForm } from '../../libs/zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { registrarUsuario } from '../../services/UserApi'

function Register() {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schemaRegisterForm) })

  const onSubmit = async (data) => {

    const formData = new FormData()

    formData.append('username', data.username || '')
    formData.append('password', data.password || '')

    // 👇 Esto es un FileList, accedemos con .[0]
    const fileInput = data.photo?.[0]
    if (fileInput) {
      formData.append('photo', fileInput)
    }

    registrarUsuario(formData)
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('token', data.token)
      })
      .catch((error) => console.log(error))
    //localStorage.setItem('token', data.token)
    //localStorage.setItem('user', JSON.stringify(data.userObject))
    //navigate('/', { replace: true })
  }

  return (
    <div className='bg-gray-100 md:max-w-[40%] w-[50%] h-[65%] rounded-2xl flex flex-col items-center p-4'>
      <h1 className='font-bold text-2xl mb-10'>Crear <span className='text-green-400'>Cuenta</span> </h1>

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
        <label>Selecionar foto de perfil: </label>
        <input {...register("photo")} type='file' accept='image/*' className='border border-gray-200 w-full p-2 rounded-md mb-4' />
        <p className='text-red-500 mb-2'>{errors.photo?.message}</p>
        <button type='submit' className='w-full bg-green-400 p-3 rounded-lg'>Crear Cuenta</button>
      </form>
    </div>
  )
}

export default Register
