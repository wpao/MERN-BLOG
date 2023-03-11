import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Input, Gap, } from '../../components' //Link
import { useHistory, BrowserRouter, Link, Route } from 'react-router-dom'
import Register from '../Register'

const Login = (props) => {
  const history = useHistory()
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LoginBg} className="bg-image" alt='imageBg' />
      </div>
      <div className='right'>
        <p className='title'>Login</p>
        <Gap height={20} />
        <Input label="Email" placeholder="Email" />
        <Gap height={20} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push('/')} />

        {/* title="belum punya akun | signup" */}
        <BrowserRouter>
          <Link to='/register'>register silahkan </Link>
          <Route path='/register' exact component={Register} />
        </BrowserRouter>

      </div>
    </div>
  )
}

export default Login
