import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

export const LogoutConfirmation = ({ isOpen, cancel, close }) => {
    if(isOpen) {
        return createPortal(
            <Confirm 
                open={isOpen}
                onCancel={cancel}
                onConfirm={close}
            />,
            document.body
        );
    };
    return null;
};