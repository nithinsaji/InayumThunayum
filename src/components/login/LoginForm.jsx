import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import AuthService from '../../services/auth.service'
import Input from '../UI/Input'
import Loader from '../UI/Loader'
import './style/Login.css'


const LoginForm = () => {

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [loading , setLoading] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(values.email + " " + values.password);
    try {
      await AuthService.login(values.email, values.password).then(
        (response) => {
          response.status === 'success' ? toast.success('Login Successful') : toast.error(response.message);
          response.status !== 'success' && setLoading(false)
          const role = response.data.role;

          setValues({
            email: "",
            password: ""
          })
          setLoading(false)
          setTimeout(() => {
            navigate(location.state?.from?.pathname || role === 'Admin' ? "/AdminDashboard" : "/Dashboard", { replace: true });
          }, 1000);
        }
      )
    } catch (err) {
      
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="app__container">
      <div className="box">
        <div className='top__container'></div>
        <div className="inner__container">
          <div className='box__container'>
            <h1>Login</h1>
            <form className="form__container" onSubmit={handleSubmit}>
              <Input type={'email'} name={'email'} label={'Email'} onChange={onChange} value={values.email} />
              <Input type={'password'} name={'password'} label={'Password'} onChange={onChange} value={values.password} />
              <a href="#" className='muted__link'>Forgot Your Password?</a>
              <div className='last'>
                <button className='submit__button'>
                  {loading && <Loader />}
                  {!loading && 'Log In'}
                </button>
                <span className="text">Don't have an acoount? <span className='link' ><Link to='/signup'>Sign Up</Link></span></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm