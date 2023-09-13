import { useUserStore } from '../../store/userStore'
import { useState } from 'react'
const SignUp = () => {
  const { signUp } = useUserStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp({ name, email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>E-mail</label>
        <input
          id='email'
          onChange={e => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
      </div>
      <div>
        <label htmlFor='fullname'>Full Name</label>
        <input
          id='fullname'
          onChange={e => setName(e.target.value)}
          type='text'
          placeholder='Full Name'
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          onChange={e => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
      </div>
      <button type='submit'>Join Now</button>
      <span>
        Already a member? <a href='#'>Log In</a>
      </span>
    </form>
  )
}

export default SignUp
