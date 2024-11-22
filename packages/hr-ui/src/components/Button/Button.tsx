import React from 'react';
import './Button.css';
import { ButtonProps } from './ButtonProps'

export const Button: React.FC<ButtonProps> = ({
    primary = false,
    size = 'medium',
    label,
    onClick
}) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type="button"
            className={['button', `button--${size}`, mode].join(' ')}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;