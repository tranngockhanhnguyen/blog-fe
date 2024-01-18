import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [fieldValues, setFieldValues] = useState({});

  function onChange(e) {
    setFieldValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(fieldValues);
  }
  return (
    <div id='layoutAuthentication' className='bg-primary'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-5'>
            <div className='card shadow-lg border-0 rounded-lg mt-5'>
              <div className='card-header'>
                <h3 className='text-center font-weight-light my-4'>Login</h3>
              </div>
              <div className='card-body'>
                <form onSubmit={onSubmit}>
                  <div className='form-floating mb-3'>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      placeholder='name@example.com'
                      onChange={onChange}
                    />
                    <label>Email address</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      className='form-control'
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={onChange}
                    />
                    <label>Password</label>
                  </div>
                  <div className='d-grid mt-4 mb-0'>
                    <button className='btn btn-primary btn-block' type='submit'>
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className='card-footer text-center py-3'>
                <div className='small'>
                  <Link to='/register'>Need an account? Sign up!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
