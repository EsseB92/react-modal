import React, { useEffect } from 'react';
import './Modal.css';

export const Modal = ({
    // Global Part
    closeModal,
    maxWidth,
    closingBtn,
    borderRadius,
    // Header Part
    modalHeader,
    colorHeader,
    bgColorHeader,
    textAlignHeader,
    fontSizeHeader,
    // Body Part
    modalBody,
    colorBody,
    bgColorBody,
    textAlignBody,
    fontSizeBody,
    // Footer Part
    modalFooter,
    colorFooter,
    bgColorFooter,
    textAlignFooter,
    fontSizeFooter,
}) => {
    const modalContainerStyle = {
        maxWidth: maxWidth,
        width: '100%',
        borderRadius: borderRadius,
        overflow: 'hidden',
    };

    const modalHeaderStyle = {
        color: colorHeader,
        background: bgColorHeader,
        textAlign: textAlignHeader,
        fontSize: fontSizeHeader,
        padding: '1rem',
        margin: 0,
    };

    const modalBodyStyle = {
        color: colorBody,
        background: bgColorBody,
        textAlign: textAlignBody,
        fontSize: fontSizeBody,
        margin: 0,
        padding: '1rem',
    };

    const modalFooterStyle = {
        color: colorFooter,
        background: bgColorFooter,
        textAlign: textAlignFooter,
        fontSize: fontSizeFooter,
        // margin: '1em 0',
        padding: '1rem',
    };

    return (
        <div className='modal'>
            <div className='modal__container' style={modalContainerStyle}>
                {closingBtn && (
                    <img
                        src={closingBtn}
                        alt=''
                        className='modalBtn closingBtn'
                        onClick={() => {
                            closeModal(false);
                        }}
                        width={20}
                        height={20}
                    />
                )}
                {modalHeader && (
                    <h3 style={modalHeaderStyle} className='modal__header'>
                        {modalHeader}
                    </h3>
                )}
                <div className='modal__body' style={modalBodyStyle}>
                    {modalBody}
                </div>
                {modalFooter && (
                    <div className='modal__footer' style={modalFooterStyle}>
                        {modalFooter}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
