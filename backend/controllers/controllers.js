module.exports = {
    create(req, res) {
        console.log("Adicionar tarefa");
        let { id, name, description } = req.body;
        res.status(200).json({ response: "success", data: { id: id, name: name, description: description } });
    },

    update(req, res) {
        console.log("Atualizar tarefa");
        let { id, newName, newDescription } = req.body;
        res.status(200).json({ response: "success", data: { id: id, newName: newName, newDescription: newDescription } });
    },

    remove(req, res) {
        console.log("Remover tarefa");
        let { id } = req.body;
        res.status(200).json({ response: "success", data: { id: id } });
    },
    view(req, res) {
        console.log("Listar tarefas");
        res.status(200).json({ response: "success" });
    }
}