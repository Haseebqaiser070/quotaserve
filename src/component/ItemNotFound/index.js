import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
export default function NotFound() {
  return (
    <section id="login_area" className="ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="account_form">
              <div className="d-flex justify-content-center align-content-center">
                <img width="130px" src={Logo} alt="logo" />
              </div>
              <h3>Item not found!</h3>
              <p style={{ textAlign: "center" }}>
                Sorry, the item you are looking for is not available at the
                moment, but if you would like us to notify you when one goes on
                sale, please provide the following information:
              </p>
              <form>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Model"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price Range in US Dollars"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="When you Nedd It"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="default-form-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telephone"
                    required
                  />
                </div>

                <div className="login_submit d-flex justify-content-center">
                  <button className="button_loginn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
