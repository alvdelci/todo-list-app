import React, { useState, useEffect } from "react";
import { Button, CloseSection, Modal, Title } from "./styles";

import { create, find, update } from "../../controller";

//Modal de criação de nova tarefa
export function ModalCreate(props) {

    const [data, setData] = useState({
        name: "",
        description: ""
    });

    function onSubmit(param) {
        create({ name: param.name, description: param.description });
    }

    return (<>
        <CloseSection show={props.show} onClick={props.handleClose} />
        <Modal show={props.show}>
            <Title>Adicionar Nova Tarefa</Title>
            <form>
                <div className="inputs">
                    <label>Título da Tarefa</label><br />
                    <input onChange={(e) => setData({ ...data, name: e.target.value })} name="name" type="text" placeholder="Ex: Alimentar o pet" /><br />

                    <label>Descrição da Tarefa</label><br />
                    <textarea onChange={(e) => setData({ ...data, description: e.target.value })} name="description" placeholder="Ex: Colocar bastante comida, o pet come muito" />
                </div>

                <div className="buttons">
                    <Button type="submit" onClick={() => onSubmit(data)} color="green">Salvar</Button>
                    <Button onClick={() => props.cancelAction()} color="orange">Cancelar</Button>
                </div>
            </form>
        </Modal>
    </>);

}

//Modal de atualização das informações da tarefa
export function ModalUpdate(props) {
    let [prevData, setPrevData] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            let aux = await find({ id: props.elementId });
            if (aux.data.data) {
                setPrevData(aux.data.data);
            }

        }
        getData()
    }, [props.elementId]);


    function handleUpdate(param) {
        update({ id: props.elementId, newName: param.newName, newDescription: param.newDescription });
    }

    return (<>
        <CloseSection show={props.show} onClick={props.handleClose} />
        <Modal show={props.show}>
            <Title>Atualizar Informações da Tarefa</Title>
            <form>
                <div className="inputs">
                    <label>Título da Tarefa</label><br />
                    <input value={data.newName} onChange={(e) => setData({ ...data, newName: e.target.value })} name="name" type="text" placeholder={prevData.name} /><br />

                    <label>Descrição da Tarefa</label><br />
                    <textarea value={data.newDescription} onChange={(e) => setData({ ...data, newDescription: e.target.value })} name="description" placeholder={prevData.description} />
                </div>

                <div className="buttons">
                    <Button type="submit" onClick={() => handleUpdate(data)} color="green">Atualizar</Button>
                    <Button onClick={() => props.cancelAction()} color="orange">Cancelar</Button>
                </div>
            </form>
        </Modal>
    </>);

}