// import React from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  return createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
