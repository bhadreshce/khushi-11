import React from 'react'

const LoginRegiaster = () => {
  return (
      <>
      
      <main style={{ paddingTop: 90 }}>
  <div className="mb-4 pb-4" />
  <section className="login-register container">
    <h2 className="d-none">Login &amp; Register</h2>
    <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
      <li className="nav-item" role="presentation">
        <a
          className="nav-link nav-link_underscore active"
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
          <form name="login-form" className="needs-validation" noValidate="">
            <div className="form-floating mb-3">
              <input
                name="LoginMail"
                type="email"
                className="form-control form-control_gray"
                id="LoginMail"
                placeholder="Email address *"
                required=""
              />
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
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
            >
              Log In
            </button>
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
          <form name="register-form" className="needs-validation" noValidate="">
            <div className="form-floating mb-3">
              <input
                name="registerUsername"
                type="text"
                className="form-control form-control_gray"
                id="customerNameRegisterInput"
                placeholder="registerUsername"
                required=""
              />
              <label htmlFor="customerNameRegisterInput">Username</label>
            </div>
            <div className="pb-3" />
            <div className="form-floating mb-3">
              <input
                name="registerEmail"
                type="email"
                className="form-control form-control_gray"
                id="registerEmail"
                placeholder="Email address *"
                required=""
              />
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
                required=""
              />
              <label htmlFor="customerPasswodRegisterInput">Password *</label>
            </div>
            <div className="d-flex align-items-center mb-3 pb-2">
              <p className="m-0">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
            >
              Register
            </button>
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