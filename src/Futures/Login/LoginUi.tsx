import React from "react";

export default function LoginUi() {
  return (
    <div className="row h-100 align-items-center justify-content-center">
      <form>
        <h3 className="text-center text-info">Login</h3>
        <div className="input-group mb-3">
          <span className="input-group-text bg-info text-white">
            <i className="bi bi-envelope"></i>
          </span>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Email"
            />
            <label htmlFor="floatingInputGroup1">Email</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text bg-info text-white">
            <i className="bi bi-key"></i>
          </span>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Password"
            />
            <label htmlFor="floatingInputGroup1">Password</label>
          </div>
        </div>
        <button
          className="btn btn-info text-white w-100 rounded-5"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
