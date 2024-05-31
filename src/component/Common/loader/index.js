import React from "react";
import img from "../../../assets/logosplach.png";
const Loader = () => {
  return (
    <>
      <div className="loader_wrapper">
        <h1 className="loader_test">E.D.C.</h1>
        <p className="loader_p">EQUIPOS DE CONTRCION</p>
        <img style={{ marginTop: 50 }} width="300px" src={img} alt="loader" />
      </div>
    </>
  );
};

export default Loader;
