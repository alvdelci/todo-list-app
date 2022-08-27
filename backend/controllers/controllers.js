const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    /**
     * @param {{ name: string, description: string }} req
     * @param {{ response: string, data: { id: number, name: string, description: string }}} res 
     */
    async create(req, res) {
        let { name, description } = req.body;

        let createTask = await prisma.task.create({
            data: {
                name: name,
                description: description
            }
        });

        res.status(200).json({ response: "success", data: createTask });
    },

    /**
     * @param {{ id: number, newName: string, newDescription: string }} req
     * @param {{ response: string, data: { id: number, name: string, description: string }}} res 
     */
    async update(req, res) {
        let { id, newName, newDescription } = req.body;

        let updateTask = await prisma.task.update({
            where: {
                id: id
            },
            data: {
                name: newName,
                description: newDescription
            }
        });

        res.status(200).json({ response: "success", data: updateTask });
    },

    /**
     * @param {{ id: number }} req
     * @param {{ response: string, data: { id: number, name: string, description: string }}} res 
     */
    async delete(req, res) {
        let { id } = req.body;

        let deleteTask = await prisma.task.delete({
            where: {
                id: id
            }
        });

        res.status(200).json({ response: "success", data: deleteTask });
    },

    /**
     * @param {{ response: string, data: [{ id: number, name: string, description: string }]}} res 
     */
    async view(req, res) {

        let tasks = await prisma.task.findMany();

        if (tasks == []) {
            res.status(200).json({ response: "empty" })
        } else {
            res.status(200).json({ response: "success", data: tasks });
        }
    }
}