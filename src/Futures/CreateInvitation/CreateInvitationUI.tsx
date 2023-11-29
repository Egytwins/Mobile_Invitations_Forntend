import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import logo from "../../assets/images/Logo/avms-logo.png";

export default function CreateInvitationUI() {
  let valdition = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (x) => {
      console.log(x);
    },
    validationSchema: valdition,
  });
  return (
    <div className="row align-items-center justify-content-center min-vh-100">
      <div>
        <form
          className="shadow p-4 rounded-5 bg-white"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="text-center text-info">Send Invitation</h3>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-envelope"></i>
              </span>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control shadow-none"
                  onChange={formik.handleChange}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <p className="text-danger">{formik.errors.email}</p>
          </div>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-key"></i>
              </span>
              <div className="form-floating position-relative">
                <input
                  type="text"
                  onChange={formik.handleChange}
                  className="form-control shadow-none"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <p className="text-danger">{formik.errors.password}</p>
          </div>

          <button
            className="btn btn-info text-white w-100 rounded-5"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
