import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Or from "../../assets/Group 30.png";
const LoginArea = () => {
  let dispatch = useDispatch();
  const history = useHistory();

  let status = useSelector((state) => state.user.status);
  let user = useSelector((state) => state.user.user);

  // Login
  const login = () => {
    if (status) {
      Swal.fire({
        icon: "question",
        title: "Mr. " + user.name,
        html:
          "You are already loged in <br />" +
          "You can go to <b>" +
          "Dashboard</b> " +
          "or our <b>Shop</b> page",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/my-account");
        } else {
          // not clicked
        }
      });
    } else {
      dispatch({ type: "user/login" });
      let name = user.name || "Customer";
      console.log(typeof user.name);
      Swal.fire({
        icon: "success",
        title: "Login Sucessfull",
        text: "Welcome " + name,
      });
      history.push("/my-account");
    }
  };

  return (
    <>
      <section id="login_area" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
              <div className="account_form">
                <div className="d-flex justify-content-center align-content-center">
                  <img width="130px" src={Logo} alt="logo" />
                </div>
                <h3>Login</h3>
                <p style={{ textAlign: "center" }}>Welcome to E.D.C</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    login();
                  }}
                >
                  <div className="default-form-box">
                    {/* <label>
                      Username or email<span className="text-danger">*</span>
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required
                      //   defaultValue="jhondoe@gmail.com"
                    />
                  </div>
                  <div className="default-form-box">
                    {/* <label>
                      Passwords<span className="text-danger">*</span>
                    </label> */}
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Passwords"
                      required
                      //   defaultValue="jhondoe123"
                      minLength="8"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link to="/" className="active">
                      Forget Password?
                    </Link>
                  </div>
                  <div className="remember_area">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="materialUnchecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="materialUnchecked"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="login_submit d-flex justify-content-center">
                    <button className="button_loginn" type="submit">
                      Login
                    </button>
                    {/* <button
                      className="theme-btn-one btn-black-overlay btn_md"
                      type="submit"
                    >
                      Log In With Google
                    </button> */}
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src={Or} alt="or" />
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    Don't have an account?
                    <Link to="/register" className="active">
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginArea;
