import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { AddSection, Button, Card, Container, Global, Title } from "./styles";

import { create, update, remove, view } from "../../controller"

export default function Home() {

    const [showModal, setShowModal] = useState(false);
    function handleModal() {
        setShowModal(!showModal);
    }

    console.log("RESPOSTA");
    console.log(view());

    const [tasks, setTasks] = useState([]);
    function handleTask(params) {
        setTasks(prevState => {
            return { ...prevState, params }
        });
    }

    return (<>
        <Global />
        <Title>Lista de Tarefas</Title>
        <Container>
            <AddSection>
                <label>Adicionar nova Tarefa</label><br /><br />
                <Button onClick={handleModal} color="orange">Criar</Button>
            </AddSection>
            <Card>
                <div className="header-card">
                    <label>Nome Da Tarefa</label>
                    <div className="buttons">
                        <Button onClick={() => { }} color="green">Atualizar</Button>
                        <Button onClick={() => { }} color="red">Excluir</Button>
                    </div>
                </div>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
            </Card>
        </Container>
        <Modal show={showModal} handleClose={handleModal} />
    </>);

}