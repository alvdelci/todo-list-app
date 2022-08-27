import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { AddSection, Button, Card, Container, Global, Title } from "./styles";

import { create, update, remove, view } from "../../controller"

export default function Home() {

    const [showModal, setShowModal] = useState(false);
    function handleModal() {
        setShowModal(!showModal);
    }

    const [task, setTask] = useState([]);
    useEffect(() => {
        async function getData() {
            let aux = await view();
            setTask(aux.data.data);
        }
        getData()
    }, [task.length]);
    console.log(task);

    return (<>
        <Global />
        <Title>Lista de Tarefas</Title>
        <Container>
            <AddSection>
                <label>Adicionar nova Tarefa</label><br /><br />
                <Button onClick={handleModal} color="orange">Criar</Button>
            </AddSection>
            {
                task.map((e) => {
                    return (
                        <Card key={e.id}>
                            <div className="header-card">
                                <label>{e.name}</label>
                                <div className="buttons">
                                    <Button onClick={async () => { }} color="green">Atualizar</Button>
                                    <Button onClick={async () => { remove({ id: e.id }) }} color="red">Excluir</Button>
                                </div>
                            </div>
                            <span>{e.description}</span>
                        </Card>
                    )
                })
            }

        </Container>
        <Modal show={showModal} handleClose={handleModal} saveData={create} />
    </>);

}