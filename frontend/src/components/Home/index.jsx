import React, { useState, useEffect } from "react";
import { ModalCreate, ModalUpdate } from "../Modal";
import { AddSection, Button, Card, Container, Global, Title } from "./styles";

import { create, update, remove, view } from "../../controller"

export default function Home() {

    const [showModalCreate, setShowModalCreate] = useState(false);
    function handleModalCreate() {
        setShowModalCreate(!showModalCreate);
    }

    const [elementId, setElementId] = useState(0);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    function handleModalUpdate(param) {
        setElementId(param);
        setShowModalUpdate(!showModalUpdate);
    }

    //Auxiliar de renderização
    const [rm, setRm] = useState(false);
    async function handleRemove(param) {
        remove({ id: param }).then((results) => {
            setRm(results.data.data);
        });
    }

    const [task, setTask] = useState([]);
    useEffect(() => {
        async function getData() {
            let aux = await view();
            setTask(aux.data.data);
        }
        getData()
    }, [task.length, rm]);

    return (<>
        <Global />
        <Title>Lista de Tarefas</Title>
        <Container>
            <AddSection>
                <label>Adicionar nova Tarefa</label><br /><br />
                <Button onClick={handleModalCreate} color="orange">Criar</Button>
            </AddSection>
            {
                task.length !== 0 ? (
                    task.map((e) => {
                        return (
                            <Card key={e.id}>
                                <div className="header-card">
                                    <label>{e.name}</label>
                                    <div className="buttons">
                                        <Button onClick={() => handleModalUpdate(e.id)} color="green">Atualizar</Button>
                                        <Button onClick={() => handleRemove(e.id)} color="red">Excluir</Button>
                                    </div>
                                </div>
                                <span>{e.description}</span>
                            </Card>
                        )
                    })
                ) : (
                    <div>
                        <h1>Estamos bem!</h1>
                        <h2>Nenhuma Tarefa Cadastrada</h2>
                    </div>
                )
            }

        </Container>
        <ModalCreate show={showModalCreate} handleClose={handleModalCreate} saveData={create} />
        <ModalUpdate show={showModalUpdate} elementId={elementId} handleClose={handleModalUpdate} saveData={update} />
    </>);

}