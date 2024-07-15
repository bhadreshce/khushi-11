import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import './Login.css'
// npm install react-hot-toast

const LoginRegiaster = () => {
  const navigate = useNavigate()
  // register variables
  const [regiForm, setregiForm] = useState({ registerUsername: '', registerEmail: '', isamin: '', registerPassword: '' })
  const [regiFormError, setregiFormError] = useState({})

  // login variables
  const [loginForm, setLoginForm] = useState({ loginEmail: '', loginPassword: '' })
  const [loginFormError, setLoginFormError] = useState({})


  // register code 
  const submiRegister = async (e) => {
    e.preventDefault()
    console.log('hii');
    let validateForm = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regiForm.registerUsername == '') {
      validateForm.username = 'please insert username'
    }

    if (regiForm.registerEmail == '' || emailRegex.test(regiForm.registerEmail) == false) {
      validateForm.email = 'please insert valid mailid'
    }
    if (regiForm.registerPassword == '') {
      validateForm.password = 'please insert valid password'
    }

    let ExitEmail = await axios.get(`http://localhost:8000/user?registerEmail=${regiForm.registerEmail}`)
    console.log(ExitEmail);

    if (ExitEmail.data.length !== 0) {
      validateForm.emailExit = 'this mail id already exit'
    }

    // console.log(validateForm);
    setregiFormError(validateForm)
    if (Object.keys(validateForm).length == 0) {
      let added = await axios.post(`http://localhost:8000/user`, regiForm)
      //  console.log(added.status);

      if (added.status == 201) {
        toast.success('Register succesfully ')


        document.location = 'login';
      }
    }

  }

  const registerChange = (e) => {
    let { name } = e.target
    if (name == 'isadmin') {
      setregiForm({ ...regiForm, [name]: e.target.checked })
    } else {
      setregiForm({ ...regiForm, [name]: e.target.value })
    }
  }


  // login code
  const submitLogin = async (e) => {
    e.preventDefault()
    try {
      let validateForm = {}
      let loginCheck = await axios.get(`http://localhost:8000/user?registerEmail=${loginForm.loginEmail}`)
      console.log(loginCheck.data.length);


      if (loginCheck.data.length == 0) {
        validateForm.email = 'Email not exist'
        console.log('email error');
      }

      if (loginCheck.data.length != 0 && loginCheck.data[0].registerPassword !== loginForm.loginPassword) {
        validateForm.password = 'Please enter valid password'
      }

      setLoginFormError(validateForm)
      if (Object.keys(validateForm).length == 0) {
        localStorage.setItem("usename", loginCheck.data[0].username);
        localStorage.setItem("isadmin", loginCheck.data[0].isamin);

        if (loginCheck.data[0].isamin == true) {
          navigate('/dashboard')

        } else {
          navigate('/')
        }
      }



    } catch (error) {
      console.log(error);
    }

    //  console.log(loginCheck);

  }

  const loginChange = (e) => {
    let { name, value } = e.target
    setLoginForm({ ...loginForm, [name]: e.target.value })
  }



  useEffect(() => {
    console.log(loginFormError);
  }, [loginFormError])
  return (
    <>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <main style={{ paddingTop: 90 }}>
        <div className="mb-4 pb-4" />
        <section className="login-register container">
          <h2 className="d-none">Login &amp; Register</h2>
          <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore "
                id="login-tab"
                data-bs-toggle="tab"
                href="#tab-item-login"
                role="tab"
                aria-controls="tab-item-login"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore"
                id="register-tab"
                data-bs-toggle="tab"
                href="#tab-item-register"
                role="tab"
                aria-controls="tab-item-register"
                aria-selected="false"
              >
                Register
              </a>
            </li>
          </ul>
          <div className="tab-content pt-2" id="login_register_tab_content">
            <div
              className="tab-pane fade active show"
              id="tab-item-login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div className="login-form">
                <form name="login-form" onSubmit={submitLogin} className="needs-validation" noValidate="">
                  <div className="form-floating mb-3">
                    <input
                      name="loginEmail"
                      onChange={loginChange}
                      type="text"
                      className="form-control form-control_gray"
                      id="LoginMail"
                      placeholder="Email address *"
                      required=""
                    />
                    <span style={{ color: 'red' }}>{loginFormError.email ? loginFormError.email : ''}</span>
                    <label htmlFor="customerNameEmailInput1">Email address *</label>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="loginPassword"
                      type="password"
                      className="form-control form-control_gray"
                      id="loginPassword"
                      placeholder="Password *"
                      onChange={loginChange}
                      required=""
                    />
                    <label htmlFor="customerPasswodInput">Password *</label>
                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <div className="form-check mb-0">
                      <input
                        name="remember"
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault1"
                      />
                      <span style={{ color: 'red' }}>{loginFormError.password ? loginFormError.password : ''}</span>
                      <label
                        className="form-check-label text-secondary"
                        htmlFor="flexCheckDefault1"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="reset_password.html" className="btn-text ms-auto">
                      Lost password?
                    </a>
                  </div>
                  <input
                    className="btn btn-primary w-100 text-uppercase"
                    value={'Login'}
                    type="submit"
                  />

                  <div className="customer-option mt-4 text-center">
                    <span className="text-secondary">No account yet?</span>
                    <a href="#register-tab" className="btn-text js-show-register">
                      Create Account
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-item-register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
              <div className="register-form">
                <form onSubmit={submiRegister} name="register-form" className="needs-validation" noValidate="">
                  <div className="form-floating mb-3">
                    <input
                      name="registerUsername"
                      onChange={registerChange}
                      type="text"
                      className="form-control form-control_gray"
                      id="customerNameRegisterInput"
                      placeholder="registerUsername"
                      required=""
                    />
                    <span style={{ color: 'red' }}>{regiFormError.username ? regiFormError.username : ''}</span>
                    <label htmlFor="customerNameRegisterInput">Username</label>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="registerEmail"
                      type="text"
                      className="form-control form-control_gray"
                      id="registerEmail"
                      placeholder="Email address *"
                      onChange={registerChange}

                    />
                    <span style={{ color: 'red' }}>{regiFormError.email ? regiFormError.email : ''}</span>
                    <span style={{ color: 'red' }}>{regiFormError.emailExit ? regiFormError.emailExit : ''}</span>
                    <label htmlFor="customerEmailRegisterInput">
                      Email address *
                    </label>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="isadmin"
                      className="form-check-input form-check-input_fill"
                      type="checkbox"
                      defaultValue=""
                      id="isadmin"
                      onChange={registerChange}
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="flexCheckDefault1"
                    >
                      Is admin ?
                    </label>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="registerPassword"
                      type="password"
                      className="form-control form-control_gray"
                      id="registerPassword"
                      placeholder="Password *"
                      onChange={registerChange}
                      required=""
                    />
                    <span style={{ color: 'red' }}>{regiFormError.password ? regiFormError.password : ''}</span>
                    <label htmlFor="customerPasswodRegisterInput">Password *</label>
                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <p className="m-0">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account, and
                      for other purposes described in our privacy policy.
                    </p>
                  </div>
                  <input
                    className="btn btn-primary w-100 text-uppercase"
                    type="submit"
                    value={'Register'}
                  />


                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default LoginRegiaster