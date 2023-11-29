import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import logo from "../../assets/images/Logo/avms-logo.png";

export default function CreateInvitationUI() {
  let [nameInput, setNameInput] = useState(false);
  let [phoneInput, setPhoneInput] = useState(false);
  let [docInput, setDocInput] = useState(false);
  let valdition = yup.object({
    name: yup.string().min(2, "Name Is To Short").required("Name is required"),
    nationalId: yup
      .string()
      .matches(
        /^(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](0[1-9]|1[0-2]|88)\d{5}$/,
        "Invalid National ID"
      )
      .required("National ID is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^(\+201|201|01)[0-9]{8,9}$/, "Invalid Phone Number"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      nationalId: "",
    },
    onSubmit: (x) => {
      console.log(x);
    },
    validationSchema: valdition,
  });
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setNameInput(true);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setPhoneInput(true);
  };
  const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setDocInput(true);
  };
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
                <i className="bi bi-alphabet"></i>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control shadow-none"
                  onChange={handleNameChange}
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            {nameInput && <p className="text-danger">{formik.errors.name}</p>}
          </div>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-telephone"></i>
              </span>
              <div className="form-floating position-relative">
                <input
                  type="text"
                  onChange={handlePhoneChange}
                  className="form-control shadow-none"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  autoComplete="true"
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            {phoneInput && <p className="text-danger">{formik.errors.phone}</p>}
          </div>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3">
              <span className="input-group-text bg-info text-white">
                <i className="bi bi-person-vcard"></i>
              </span>
              <div className="form-floating position-relative">
                <input
                  type="text"
                  onChange={handleDocumentChange}
                  className="form-control shadow-none"
                  name="nationalId"
                  id="nationalId"
                  placeholder="National Id"
                  autoComplete="true"
                />
                <label htmlFor="documentID">National Id</label>
              </div>
            </div>
            {docInput && (
              <p className="text-danger">{formik.errors.nationalId}</p>
            )}
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
