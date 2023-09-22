import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpInput } from '../../schema/authSchema'
import { useAuth } from '../../hook/useAuth'
import { useFetchStore } from '../../store/useFetchStore'

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  })

  const { signupLocalUser } = useAuth()
  const { isFetching, isSuccess } = useFetchStore()

  const onSubmit = (data: SignUpInput) => {
    signupLocalUser(data)
    if (isSuccess) {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          {...register('email')}
          id='email'
          type='text'
          placeholder='Email'
        />
      </div>
      {errors.email && <p>{errors.email.message}</p>}
      <div>
        <label htmlFor='fullname'>Full Name</label>
        <input
          {...register('name')}
          id='fullname'
          type='text'
          placeholder='Full Name'
        />
      </div>
      {errors.name && <p>{errors.name.message}</p>}
      <div>
        <label htmlFor='password'>Password</label>
        <input
          {...register('password')}
          id='password'
          type='password'
          placeholder='Password'
        />
      </div>
      {errors.password && <p>{errors.password.message}</p>}
      <div>
        <label htmlFor='confirm-password'>Repeat Password</label>
        <input
          {...register('confirmPassword')}
          id='confirm-password'
          type='password'
          placeholder='Repeat Password'
        />
      </div>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <button disabled={isFetching} type='submit'>
        {isFetching ? 'Loading...' : 'Join Now'}
      </button>
      <span>
        Already a member? <a href='#'>Log In</a>
      </span>
    </form>
  )
}

export default SignUpForm
