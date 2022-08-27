import React, { useState } from "react";
import { Button, CloseSection, Modal, Title } from "./styles";


export default function ModalComponent(props) {

    const initialState = {
        name: null,
        description: null
    };

    const [data, setData] = useState(initialState);


    return (<>
        <CloseSection show={props.show} onClick={props.handleClose} />
        <Modal show={props.show}>
            <Title>Adicionar Nota Tarefa</Title>
            <form>
                <div className="inputs">
                    <label>Título da Tarefa</label><br />
                    <input name="name" type="text" placeholder="Ex: Alimentar o pet" /><br />

                    <label>Descrição da Tarefa</label><br />
                    <textarea name="description" placeholder="Ex: O pet não come whiskas" />
                </div>

                <div className="buttons">
                    <Button type="submit" onClick={() => { }} color="green">Salvar</Button>
                    <Button onClick={() => props.cancelAction(initialState)} color="orange">Cancelar</Button>
                </div>
            </form>
        </Modal>
    </>);

}