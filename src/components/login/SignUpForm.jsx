import React, { useContext } from 'react'
import Input from '../UI/Input'

const SignUpForm = () => {
  return (
    <section className="app__container">
      <div className="box">
        <div className='top__container'></div>
        <div className="inner__container"></div>
        <div className='box__container'>
          <h1>Sign Up</h1>
          <form className="form__container">
            <Input type={'text'} name={'FullName'} />
            <Input type={'number'} name={'Mobile Number'} />
            <Input type={'email'} name={'Email'} />
            <Input type={'password'} name={'Password'} />
            <Input type={'password'} name={'Confirm Password'} />
          </form>
          <button className='submit__button'>Signup</button>
          <span className="text">Already have an acoount? <span className='link'>Sign In</span></span>
        </div>
      </div>
    </section>
  )
}

export default SignUpForm