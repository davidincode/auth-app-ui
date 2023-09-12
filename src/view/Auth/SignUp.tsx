const SignUp = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <label htmlFor='email'>E-mail</label>
        <input id='email' type='email' placeholder='Email' />
      </div>
      <div>
        <label htmlFor='fullname'>Full Name</label>
        <input id='fullname' type='text' placeholder='Full Name' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' placeholder='Password' />
      </div>
      <button type='submit'>Join Now</button>
      <span>
        Already a member? <a href='#'>Log In</a>
      </span>
    </form>
  )
}

export default SignUp
