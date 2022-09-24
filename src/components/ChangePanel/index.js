import React from "react";
import "./index.css";

const ChangePanel = ({ action, children, disabled, loading }) => (
  <button
    className={disabled ? "disabled" : "changePanel"}
    disabled={disabled}
    onClick={action}
  >
    {loading ? "Cargando..." : children}
  </button>
);

export default ChangePanel;
