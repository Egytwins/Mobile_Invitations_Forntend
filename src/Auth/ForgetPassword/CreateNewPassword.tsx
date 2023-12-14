import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function CreateNewPassword() {
  let [errorMsg, seterrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erorrMessage, setErrorMessage] = useState(null);
  let [loading, setLoading] = useState(false);
  let navg = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik1.handleChange(event);
    formik1.setFieldTouched("email", true);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik1.handleChange(event);
    formik1.setFieldTouched("password", true);
  };
  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik1.handleChange(event);
    formik1.setFieldTouched("resetCode", true);
  };
  let valdition = yup.object({
    resetCode: yup
      .string()
      .required("Reset Code is required")
      .length(6, "Reset Code Must Be Atleast 6 characters"),
    email: yup.string().email().required("Email is required"),
    newPassword: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });
  let formik1 = useFormik({
    initialValues: {
      email: "",
      resetCode: "",
      newPassword: "",
    },
    onSubmit: (x) => {
      forgotPasswordsApi(x);
    },
    validationSchema: valdition,
  });
  async function forgotPasswordsApi(values: { email: string }) {
    setLoading(true);
    let data = await axios
      .post(`${process.env.REACT_APP_PORT}UserAccount/resetPassword`, values)
      .then((res) => {
        localStorage.removeItem("token");
        navg("/");
      })
      .catch((errorrr) => {
        seterrMsg(errorrr.response.data.message);
        setLoading(false);
      });
    setLoading(false);
    console.log(data);
  }
  return (
    <div className="row align-items-center justify-content-center min-vh-100 w-100">
      <div className="w-100">
        <form
          className="shadow p-4 rounded-5 bg-white"
          onSubmit={formik1.handleSubmit}
        >
          <h3 className="text-center text-info mb-3">Send Code To Email</h3>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-asterisk"></i>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control shadow-none"
                  onChange={handleCodeChange}
                  onBlur={formik1.handleBlur}
                  value={formik1.values.resetCode}
                  id="resetCode"
                  name="resetCode"
                  placeholder="resetCode"
                />
                <label htmlFor="resetCode">Reset Code</label>
              </div>
            </div>
            {formik1.touched.resetCode && formik1.errors.resetCode && (
              <p className="text-danger">{formik1.errors.resetCode}</p>
            )}
          </div>
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
                  onBlur={formik1.handleBlur}
                  value={formik1.values.email}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            {formik1.touched.email && formik1.errors.email && (
              <p className="text-danger">{formik1.errors.email}</p>
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
                  onBlur={formik1.handleBlur}
                  value={formik1.values.newPassword}
                  className="form-control shadow-none"
                  name="newPassword"
                  id="newPassword"
                  placeholder="newPassword"
                />
                <label htmlFor="newPassword">New Password</label>
              </div>
            </div>
            {formik1.touched.newPassword && formik1.errors.newPassword && (
              <p className="text-danger">{formik1.errors.newPassword}</p>
            )}
          </div>
          {loading ? (
            <button
              type="button"
              className="btn btn-info text-white w-100 rounded-5"
            >
              <i className="bi bi-arrow-repeat spinner-icon text-white"></i>
            </button>
          ) : (
            <button
              disabled={!formik1.isValid}
              type="submit"
              className="btn btn-info text-white w-100 rounded-5"
            >
              Send
            </button>
          )}
          {errorMsg ? <p className="text-danger my-2">{errorMsg}</p> : ""}
        </form>
      </div>
    </div>
  );
}
