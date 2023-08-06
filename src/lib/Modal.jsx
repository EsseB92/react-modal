import React, { useEffect } from 'react';
import './Modal.css';

export const Modal = ({
    closeModal,
    modalHeader,
    colorHeader,
    bgColorHeader,
    textAlignHeader,
    fontSizeHeader,
    modalBody,
    colorBody,
    bgColorBody,
    textAlignBody,
    fontSizeBody,
    modalFooter,
    maxWidth,
    withClosingBtn,
}) => {
    var modalContainerStyle = {
        maxWidth: maxWidth,
        width: '90%',
        // height: height,
    };

    var modalHeaderStyle = {
        color: colorHeader,
        background: bgColorHeader,
        textAlign: textAlignHeader,
        fontSize: fontSizeHeader,
        padding: 0,
    };

    var modalBodyStyle = {
        color: colorBody,
        background: bgColorBody,
        textAlign: textAlignBody,
        fontSize: fontSizeBody,
        margin: '1em 0',
        padding: 0,
    };

    return (
        <div className='modal'>
            <div className='modal__container' style={modalContainerStyle}>
                {withClosingBtn && (
                    <button
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        X
                    </button>
                )}
                {modalHeader && (
                    <div className='modal__header'>
                        <h3 style={modalHeaderStyle}>{modalHeader}</h3>
                    </div>
                )}
                <div className='modal__body' style={modalBodyStyle}>
                    {modalBody}
                </div>
                {modalFooter && (
                    <div className='modal__footer'>{modalFooter}</div>
                )}
            </div>
        </div>
    );
};

export default Modal;
