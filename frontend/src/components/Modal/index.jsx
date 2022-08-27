import React from "react";
import { Button, CloseSection, Modal, Title } from "./styles";


export default function ModalComponent(props) {

    return (<>
        <CloseSection show={props.show} onClick={props.handleClose} />
        <Modal show={props.show}>
            <Title>Adicionar Nota Tarefa</Title>
            <div className="inputs">
                <label>Título da Tarefa</label><br />
                <input type="text" placeholder="Ex: Alimentar o pet" /><br />

                <label>Descrição da Tarefa</label><br />
                <textarea placeholder="Ex: O pet não come whiskas" />
            </div>

            <div className="buttons">
                <Button onClick={props.saveData} color="green">Salvar</Button>
                <Button onClick={props.cancelAction} color="orange">Cancelar</Button>
            </div>
        </Modal>
    </>);

}