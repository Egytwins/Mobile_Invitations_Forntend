import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import logo from "../../assets/images/Logo/avms-logo.png";

export default function CreateInvitationUI() {
  let [nameInput, setNameInput] = useState(false);
  let [phoneInput, setPhoneInput] = useState(false);
  let [docInput, setDocInput] = useState(false);
  let [showDate, setShowDate] = useState(false);
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
    entryDate: yup.date(),
    expiryDate: yup.date(),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      nationalId: "",
      entryDate: new Date().toISOString().split(":").slice(0, 2).join(":"),
      expiryDate: new Date(new Date().setHours(36))
        .toISOString()
        .split(":")
        .slice(0, 2)
        .join(":"),
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
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    if (selectedOption === "today") {
      formik.setFieldValue("entryDate", new Date().toISOString().slice(0, 16));
      formik.setFieldValue(
        "expiryDate",
        new Date(new Date().setHours(36)).toISOString().slice(0, 16)
      );
      setShowDate(false);
    } else if (selectedOption === "Custom") {
      setShowDate(true);
    }
  };
  const handleEntryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    const selectedEntryDate = new Date(event.target.value);
    const minExpiryDate = new Date(
      selectedEntryDate.getTime() + 2 * 24 * 60 * 60 * 1000
    );
    formik.setFieldValue(
      "expiryDate",
      minExpiryDate.toISOString().slice(0, 16)
    );
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
                <label htmlFor="nationalId">National Id</label>
              </div>
            </div>
            {docInput && (
              <p className="text-danger">{formik.errors.nationalId}</p>
            )}
          </div>
          <div className="inputWithValidation d-flex flex-column">
            <div className="input-group mb-3 p-2">
              <div className="form-floating position-relative">
                <select
                  className="form-select p-2"
                  id="selectDate"
                  data-control="select2"
                  onChange={handleSelectChange}
                >
                  <option value="">Select Date</option>
                  <option value="today">Today 24H</option>
                  <option value="Custom">Custom Date</option>
                </select>
                {/* <label htmlFor="documentID">Select Date</label> */}
              </div>
            </div>
          </div>
          {showDate ? (
            <>
              <div className="inputWithValidation d-flex flex-column">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-info text-white">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <div className="form-floating position-relative">
                    <input
                      type="datetime-local"
                      className="form-control shadow-none"
                      name="entryDate"
                      id="entryDate"
                      min={new Date()
                        .toISOString()
                        .split(":")
                        .slice(0, 2)
                        .join(":")}
                      onChange={formik.handleChange}
                      placeholder="Entry Date"
                      autoComplete="true"
                    />
                    <label htmlFor="entryDate">Entry Date</label>
                  </div>
                </div>
                {docInput && (
                  <p className="text-danger">{formik.errors.entryDate}</p>
                )}
              </div>
              <div className="inputWithValidation d-flex flex-column">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-info text-white">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <div className="form-floating position-relative">
                    <input
                      type="datetime-local"
                      className="form-control shadow-none"
                      onChange={handleEntryDateChange}
                      name="expiryDate"
                      id="expiryDate"
                      placeholder="Expiry Date"
                      min={formik.values.entryDate}
                      autoComplete="true"
                    />
                    <label htmlFor="expiryDate">Expiry Date</label>
                  </div>
                </div>
                {docInput && (
                  <p className="text-danger">{formik.errors.expiryDate}</p>
                )}
              </div>
            </>
          ) : (
            ""
          )}

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
