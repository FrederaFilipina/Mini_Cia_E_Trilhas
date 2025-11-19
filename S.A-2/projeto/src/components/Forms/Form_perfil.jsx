import React, { useEffect } from 'react'
import Perfil from '../Perfil/Perfil';
import { Form } from 'react-router-dom';
import Form_perfil_nEditavel from './Form-perfil-nEditavel';
import Form_perfil_editavel from './Form_perfil_editavel';

function Form_perfil() {

    const [email, setEmail] = React.useState('')
    const [telefone, setTelefone] = React.useState('')
    const [senha, setsenha] = React.useState('')
    const [senhanova, setSenhanova] = React.useState('')
    const [editar, setEditar] = React.useState(false)

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            setUser(currentUser);
            setEmail(currentUser.email || '');
            setTelefone(currentUser.telefone || '');
        }
    }, []);

    async function alterações(e) {
        e.preventDefault();



        const dadosAlterados = {
            email: email,
            telefone: telefone,
            senha: senha,
            senhanova: senhanova
        }

        const resposta = await (Perfil)
        if (resposta.status !== 200) {
            alert("Erro ao salvar alterações, verifique seus dados.")
            return
        }
        console.log(dadosAlterados);

        alert("Alterações salvas com sucesso!")
    }



    return (
        <div>
            <form className='form-perfil' >
                {!editar ?
                    <Form_perfil_nEditavel setEditar={setEditar} editar={editar} /> :
                    <Form_perfil_editavel />
                }


            </form>
        </div>
    )
}

export default Form_perfil