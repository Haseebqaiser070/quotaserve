import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Tabs,
  Select,
  Input,
  Slider,
  Button,
  Modal,
  Radio,
  ConfigProvider,
} from "antd";
const { TabPane } = Tabs;
const { Option } = Select;
const RegisterArea = () => {
  const [selectedRadio, setSelectedRadio] = useState("Whatsapp");

  const handleChangeRadio = (e) => {
    setSelectedRadio(e.target.value);
  };
  let dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  let status = useSelector((state) => state.user.status);
  let userData = useSelector((state) => state.user.user);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    // Here you can call a function to handle the form submission,
    // passing the captcha value for server-side verification.
  };
  // Add to cart
  const register = () => {
    if (status) {
      Swal.fire({
        icon: "question",
        title: "Mr. " + userData.name,
        html:
          "You are already Registered <br />" +
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
      dispatch({ type: "user/register", payload: { user, email, pass } });

      Swal.fire({
        icon: "success",
        title: "Registration Sucessfull",
        text: "Welcome Mr." + user,
      });
      history.push("/vendor-dashboard");
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
                <h3>Registeration</h3>
                <p style={{ textAlign: "center" }}>Find your dream car!</p>
                <Tabs defaultActiveKey="2">

                  <TabPane tab="Register as a Seller" key="2">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        register();
                      }}
                    >
                      <div className="default-form-box">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control"
                          value={user}
                          onChange={(e) => setUser(e.currentTarget.value)}
                          required
                        />
                      </div>
                      {/* <div className="default-form-box">
                        <input
                          type="text"
                          placeholder="Parents"
                          className="form-control"
                          value={user}
                          onChange={(e) => setUser(e.currentTarget.value)}
                          required
                        />
                      </div> */}
                      <div className="default-form-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.currentTarget.value)}
                          required
                        />
                      </div>
                      <div className="default-form-box">
                        <input
                          type="text"
                          placeholder="Phone number"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mt-4 mb-4">
                        <ConfigProvider
                          theme={{
                            token: {
                              // Seed Token
                              colorPrimary: "#FFC824",
                              borderRadius: 2,

                              // Alias Token
                            },
                          }}
                        >
                          <Radio.Group
                            onChange={handleChangeRadio}
                            value={selectedRadio}
                          >
                            <Radio value="Whatsapp">Whatsapp</Radio>
                            <Radio value="Office">Office</Radio>
                            <Radio value="Other">Other</Radio>
                          </Radio.Group>
                        </ConfigProvider>
                      </div>
                      <div className="default-form-box">
                        <input
                          type="text"
                          placeholder="Another Phone number"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="default-form-box">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={pass}
                          onChange={(e) => setPass(e.currentTarget.value)}
                          required
                          minLength="8"
                        />
                      </div>
                      <div className="default-form-box">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          value={pass}
                          onChange={(e) => setPass(e.currentTarget.value)}
                          required
                          minLength="8"
                        />
                      </div>
                      <ReCAPTCHA
                        sitekey="YOUR_SITE_KEY_HERE"
                        onChange={handleCaptchaChange}
                      />
                      <div className="login_submit d-flex justify-content-center">
                        <button className="button_loginn" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </TabPane>
                </Tabs>

                <div className="d-flex justify-content-center mt-5">
                  <p>Already have an account?</p> &nbsp;
                  <Link to="/login" className="active">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
