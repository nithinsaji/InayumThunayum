import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import AuthService from '../../services/auth.service'
import Input from '../UI/Input'
import Loader from '../UI/Loader'
import Modal from '../UI/Modal'
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
            navigate(location.state?.from?.pathname || role === 'Admin' ? "/AdminDashboard" : "/Dashboard", { replace: true });
        }
      )
    } catch (err) {
      
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);

  const text = 'This feature is currently unavailable. Did you forgot your password you can contact our support team and get password.';

  return (
    <section className="app__container">
      <div className="box">
        <div className='top__container'></div>
        <div className="inner__container">
          <div className='box__container'>
            <h1>Login</h1>
            <form className="form__container" onSubmit={handleSubmit}>
              <Input type={'email'} name={'email'} label={'Email'} onChange={onChange} value={values.email} required/>
              <Input type={'password'} name={'password'} label={'Password'} onChange={onChange} value={values.password} required/>
              <a href="#" className='muted__link' onClick={() => setShowModal(true)}>Forgot Your Password?</a>
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
      {showModal && <Modal updateModalState={toggleModal} text={text}/>}
    </section>
  )
}

export default LoginForm