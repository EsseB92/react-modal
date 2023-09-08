import React from "react";
import "./Modal.css";

export const Modal = ({
  // Global Part
  closeModal,
  maxWidth,
  closingBtn,
  borderRadius,
  padding,
  margin,
  fontFamily,
  // Header Part
  modalHeader,
  colorHeader,
  bgColorHeader,
  textAlignHeader,
  fontSizeHeader,
  paddingHeader,
  marginHeader,
  // Body Part
  modalBody,
  colorBody,
  bgColorBody,
  textAlignBody,
  fontSizeBody,
  paddingBody,
  marginBody,
  // Footer Part
  modalFooter,
  colorFooter,
  bgColorFooter,
  textAlignFooter,
  fontSizeFooter,
}) => {
  const modalContainerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    borderRadius: borderRadius,
    padding: padding,
    margin: margin,
    fontFamily: fontFamily,
  };

  const modalHeaderStyle = {
    color: colorHeader,
    background: bgColorHeader,
    textAlign: textAlignHeader,
    fontSize: fontSizeHeader,
    padding: paddingHeader,
    margin: marginHeader,
  };

  const modalBodyStyle = {
    color: colorBody,
    background: bgColorBody,
    textAlign: textAlignBody,
    fontSize: fontSizeBody,
    margin: marginBody,
    padding: paddingBody,
  };

  const modalFooterStyle = {
    color: colorFooter,
    background: bgColorFooter,
    textAlign: textAlignFooter,
    fontSize: fontSizeFooter,
    // margin: '1em 0',
    padding: "1rem",
  };

  return (
    <div className="modal">
      <div className="modal__container" style={modalContainerStyle}>
        {closingBtn && (
          <img
            src={closingBtn}
            alt="button"
            className="modalBtn closingBtn"
            onClick={() => {
              closeModal(false);
            }}
            width={30}
            height={30}
          />
        )}
        {modalHeader && (
          <h3 style={modalHeaderStyle} className="modal__header">
            {modalHeader}
          </h3>
        )}
        <div className="modal__body" style={modalBodyStyle}>
          {modalBody}
        </div>
        {modalFooter && (
          <div className="modal__footer" style={modalFooterStyle}>
            {modalFooter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
