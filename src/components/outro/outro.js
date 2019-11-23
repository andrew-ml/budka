import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./outro.css";

function Outro() {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  });
  return (
    <div className="Outro">
      <img src="/assets/outro.jpg" alt="" />
    </div>
  );
}

export default Outro;
