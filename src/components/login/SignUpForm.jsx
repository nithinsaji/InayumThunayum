import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AuthService from '../../services/auth.service';
import Input from '../UI/Input'
import Loader from '../UI/Loader';

const SignUpForm = () => {

  const [values, setValues] = useState({
    name: "",
    number: '',
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading , setLoading] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage:
        "Full Name shouldn't include any special character & numbers!",
      label: "Full Name",
      pattern: "^[A-Za-z ]{3,16}$",
      required: true,
      placeholder : 'Enter you Full Name'
    },
    {
      id: 2,
      name: "number",
      type: "tel",
      errorMessage: "It should not be a valid Mobile number!",
      label: "Mobile Number",
      pattern: "^[0-9]{10}$",
      required: true,
      placeholder : 'eg :- 9876543210 '
    },
    {
      id: 3,
      name: "email",
      type: "email",
      errorMessage: "It should not be a valid email address!",
      label: "Email",
      required: true,
      placeholder : 'Enter you email'
    },
    {
      id: 4,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      placeholder : 'Password'
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
      placeholder : 'Confirm Password'
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    await AuthService.register(values.name, values.number, values.email, values.password).then(
      (res) => {
        const status = res.status;
        status === 'success' ? toast.success(res.message) : toast.error(res.message);
        setLoading(false)
        status === 'success' && navigate('/signin')
      }
    );
  }

  return (
    <section className="app__container">
      <div className="box">
        <div className='top__container'></div>
        <div className="inner__container"></div>
        <div className='box__container'>
          <h1>Sign Up</h1>
          <form className="form__container" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange} />
            ))}
            <div className='last'>
              <button className='submit__button'>
              {loading && <Loader />}
                  {!loading && 'Signup'}
              </button>
              <span className="text">Already have an acoount? <span className='link'><Link to={'/signin'}>Sign In</Link> </span></span>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default SignUpForm