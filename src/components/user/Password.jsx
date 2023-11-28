import React, { useState } from 'react'
import { toast } from 'sonner';
import AuthService from '../../services/auth.service';
import Back from '../UI/Back'
import Button from '../UI/Button';
import Input from '../UI/Input';
import { TitleText } from '../UI/Text';
import './style/password.css'

const Password = () => {
  const [values, setValues] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false)

  const inputs = [{
    id: 1,
    name: "oldPassword",
    type: "password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Old Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    placeholder : 'Enter your Old Password'
  },
  {
    id: 2,
    name: "password",
    type: "password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    placeholder : 'Enter your New Password'
  },
  {
    id: 3,
    name: "confirmPassword",
    type: "password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
    placeholder : 'Confirm Password'
  },]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    AuthService.changePasswordAPI(values.oldPassword,values.password).then((res)=>{
      res?.status === "success"
      ? toast.success(res.message)
      : toast.error(res.message);
      setValues({
        oldPassword: "",
        password: "",
        confirmPassword: ""
      })
      setLoading(false)

    })
  }

  return (
    <div>
      <Back title={'Password'}/>
      <div className="password-reset">
        <TitleText>Change Your Password</TitleText>
        <form className="form__container" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange} />
            ))}
            <div className='last'>
              <Button style={'gradient'} loading={loading}>Change my password</Button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Password