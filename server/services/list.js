const db = require('../db/db.js');

const listModel = '../models/list.js';
const todolistDb = db.todolist;
const List = todolistDb.import(listModel);

export default {
    async getListById(id) {
        const list = await List.findAll({
            where: {
                id,
            },
            attributes: ['id', 'content', 'status'], // 只需返回这三个字段的结果即可
        });
        return list;
    },
    async addListItem(data) {
        await List.create({
            user_id: data.id,
            content: data.content,
            status: data.status,
        });
        return true;
    },
    async delListItem(id, userId) {
        const result = await List.destroy({
            where: {
                id,
                user_id: userId,
            },
        });
        return result === 1;
    },
    async updateListItem(id, userId, status) {
        const result = await List.update(
            { status },
            {
                where: {
                    id,
                    user_id: userId,
                },
            },
        );
        console.log(44, result);
        return result[0] === 1;
    },
};