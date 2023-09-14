import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../UI/Input'
import './style/Login.css'

const LoginForm = () => {
  return (
    <section className="app__container">
      <div className="box">
        <div className='top__container'></div>
        <div className="inner__container">
          <div className='box__container'>
            <h1>Login</h1>
            <form className="form__container">
              <Input type={'email'} name={'Email'} />
              <Input type={'password'} name={'Password'} />
            </form>
            <a href="#" className='muted__link'>Forgot Your Password?</a>
            <button className='submit__button'>
            <Link to='/dashboard'>
              Signin
              </Link>
              </button>
            <span className="text">Don't have an acoount? <span className='link' >Sign Up</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm