const Sequelize = require('sequelize');

const todoList = new Sequelize('mysql://root:123456@localhost:3306/todolist', {
    define: {
        timestamps: false, // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
      },
});

export default {
    todoList,
};