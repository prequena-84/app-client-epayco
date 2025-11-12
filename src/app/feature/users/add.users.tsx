import React, { useState } from "react";
import BtnOutLine from "@/components/ui/botton/btn-outline";
import BtnLine from "@/components/ui/botton/btn-line";
import Input from "@/components/ui/input/input";
import requestData from "@/services/request.data.services";
import style from "@/app/feature/users/styles/users.create.users.module.css"

import type { IForm } from "@/types/html.interfaces";
import type { IUser } from "./interfaces/users.interfaces";

const FormAddUsers: React.FC<IForm> = () => {

    const [ users, setUsers ] = useState<IUser>({
        document:0,
        name:'',
        email:'',
        phone:'',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUsers((prevData):IUser => ({
            ...prevData,
            [name]:value
        }));
    };

    const clearForm = () => {
        setUsers({
            document:0,
            name:'',
            email:'',
            phone:'',
        });
    };

    const handlerSubmit = async ( event: React.FormEvent ) => {
        event.preventDefault();
        const { document, name, email, phone } = users;

        if ( document && name && email && phone ) {
            const response = await requestData<IUser>(process.env.NEXT_PUBLIC_API_URL_USERS ?? "", "POST", users);
            alert(response.message);
            clearForm();
        } else {
            alert('Por favor ingrese todos los datos del "Usuario" para completar el registro')
        };
    };

    return (
        <form onSubmit={handlerSubmit} className={`${style.Form} main-content`}>
            <fieldset className={style.Fieldset}>
                <legend>Registro de Usuario</legend>
                <div>
                    <Input 
                        name="document"
                        id="document"
                        placeHolder="Documento"
                        arialLabel="document"
                        value={users.document ?? 0}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                        className={style.Input}
                        classInput={style.inputUserName}
                    />
                </div>
                <div>
                    <Input
                        key="name"
                        name="name"
                        id="name"
                        placeHolder="Nombre"
                        arialLabel="name"
                        value={users.name ?? ''}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                        className={style.Input}
                        classInput={style.InputPassword}
                    />
                </div>
                <div>
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        placeHolder="Correo"
                        arialLabel="email"
                        value={users.email ?? ''}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                        className={style.Input}
                        classInput={style.InputUserName}
                    />                   
                </div>
                <div>
                    <Input
                        name="phone"
                        id="phone"
                        placeHolder="Celular"
                        arialLabel="phone"
                        value={users.phone ?? ''}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                        className={style.Input}
                        classInput={style.InputUserName}
                    />                    
                </div>
                <div className={""}>
                    <BtnOutLine 
                        key="add"
                        text={"Registrar"}
                        type={"submit"}
                        sizes={"btn-lg"}
                        className={style.BtnCreate}
                    />
                    <BtnLine 
                        key="clear"
                        type={"button"}
                        text="Limpiar"
                        sizes={"btn-lg"}
                        onClick={clearForm}
                        className={style.BtnClear}
                    />                    
                </div>
            </fieldset>
        </form>
    );
};

export default FormAddUsers;