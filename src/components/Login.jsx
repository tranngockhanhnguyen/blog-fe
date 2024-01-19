import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import requestApi from "../helpers/api";
import { setLoading } from "../store/reducer/loginSlice";

export default function Login() {
  const [fieldValues, setFieldValues] = useState({ email: "", password: "" });
  const [errorMessages, setErrorMassage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onChange(e) {
    setFieldValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validateForm() {
    let isValid = true;
    const errors = {};
    if (!fieldValues.email) {
      errors.email = "Email is required";
    } else {
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(
        fieldValues.email
      );
      if (!isEmail) {
        errors.email = "Email is not valid";
      }
    }

    if (!fieldValues.password) {
      errors.password = "Password is required";
    } else {
      if (fieldValues.password.length < 6) {
        errors.password = "Password must be 6 characters or longer.";
      }
    }

    isValid = Object.keys(errors).length > 0;
    setErrorMassage(errors);

    return isValid;
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    if (!validateForm()) {
      dispatch(setLoading(true));
      requestApi("/auth/login", "POST", fieldValues)
        .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data.accessToken);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          navigate("/");
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast.error(err.response.data.message);
          } else {
            toast.error("Some thing went wrong");
          }
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }

  useEffect(() => {
    if (isSubmitted) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValues]);

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
                <form onSubmit={onSubmit} noValidate>
                  <div className='form-floating mb-3'>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      placeholder='name@example.com'
                      onChange={onChange}
                    />
                    <label>Email address</label>
                    {errorMessages.email && (
                      <p className='text-danger'>{errorMessages.email}</p>
                    )}
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
                    {errorMessages.password && (
                      <p className='text-danger'>{errorMessages.password}</p>
                    )}
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
