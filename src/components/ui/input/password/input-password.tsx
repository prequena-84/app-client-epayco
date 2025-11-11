import React, { useState } from "react";
import styles from "@/components/ui/input/password/input-password.module.css";

import type { IInputPassword } from "@/types/html.interfaces";

const InputPassword: React.FC<IInputPassword> = ({
    name,
    id,
    placeHolder,
    onChange,
    value,
    className,
    classInput,
}) => {
    
    const [ mostraPassword, setMostrarPassword ] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setMostrarPassword(!mostraPassword);
    };

    return (
        <div className={`col-auto ${styles.containerDiv} ${className}`}>
            <label htmlFor={id} className="visually-hidden">Password</label>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                id={id} 
                type={ mostraPassword ? 'text' : 'password' }
                className={`form-control ${styles.containerInput} ${classInput}`} 
                placeholder={placeHolder}
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="btn btn-primary"
                aria-label={!mostraPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'} // Mejora de accesibilidad
            >
                <i className={mostraPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
            </button>

        </div>
    );
};

export default InputPassword;