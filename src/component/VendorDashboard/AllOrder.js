import React from "react";
import { Link } from "react-router-dom";
const AllOrder = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="vendor_order_boxed">
            <h4>All Orders</h4>
            <div className="table-responsive">
              <table className="table pending_table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Product Details</th>
                    <th scope="col">Customer Name</th>

                    <th scope="col">Customer Email</th>
                    <th scope="col">Customer Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nayab Khalid</td>
                    <td>Belted Trench Coat</td>
                    <td>nayab123@gmail.com</td>

                    <td>027328783289</td>
                  </tr>

                  <tr>
                    <td>Nayab Khalid</td>
                    <td>Belted Trench Coat</td>
                    <td>nayab123@gmail.com</td>

                    <td>027328783289</td>
                  </tr>

                  <tr>
                    <td>Nayab Khalid</td>
                    <td>Belted Trench Coat</td>
                    <td>nayab123@gmail.com</td>

                    <td>027328783289</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-12">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#!" className="page-link">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#!" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrder;
