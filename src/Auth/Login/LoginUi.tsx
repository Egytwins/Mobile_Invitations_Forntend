import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/Logo/avms-logo.png";
import * as yup from "yup";
import { useFormik } from "formik";
import Login from "./Login.Interfaces";
import LoginServies from "./Login.Servies";
import { Link, useNavigate } from "react-router-dom";
export default function LoginUi() {
  const [showPassword, setShowPassword] = useState(false);
  const [erorrMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  let navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (Value: Login) => {
      try {
        setLoading(true);
        await LoginServies(Value);
        setErrorMessage(null);
        navigate("/app/dashboard");

        // Login successful, proceed with desired logic
      } catch (error: any) {
        setLoading(false);
        setErrorMessage(error.message);
        // Handle the error, display the error message, etc.
      }
    },
    validationSchema: validationSchema,
  });
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    formik.setFieldTouched("email", true);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    formik.setFieldTouched("password", true);
  };

  return (
    <div className="row align-items-center justify-content-center min-vh-100 w-100">
      <div className="w-100">
        <div className="logo-img m-4 fixed-top ">
          <img src={logo} alt="Logo" width="120px" />
        </div>
        <form
          className="shadow p-4 rounded-5 bg-white"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="text-center text-info">Login</h3>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-envelope"></i>
              </span>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control shadow-none"
                  onChange={handleEmailChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-key"></i>
              </span>
              <div className="form-floating position-relative">
                <button
                  className="showPassword"
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control shadow-none"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          {loading ? (
            <button
              className="btn btn-info text-white w-100 rounded-5"
              disabled
            >
              <div className="custom-loader mx-auto">
                <i className="bi bi-arrow-repeat"></i>
              </div>
            </button>
          ) : (
            <button
              className="btn btn-info text-white w-100 rounded-5"
              type="submit"
            >
              Login
            </button>
          )}

          {erorrMessage ? (
            <p className="text-danger my-2">{erorrMessage}</p>
          ) : (
            ""
          )}
          <Link to="/forgetPassword" className="my-2 text-info d-inline-block">
            Forget Password?
          </Link>
        </form>
      </div>
    </div>
  );
}
