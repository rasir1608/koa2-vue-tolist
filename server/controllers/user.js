const userServer = require('../services/user.js');
const jwt = require('koa-jwt');
const bcrypt = require('bcryptjs');

export default {
    async getUserInfoById(ctx) {
        const id = ctx.params.id;
        const result = await userServer.getUserById(id);
        ctx.body = {
            ok: true,
            data: result,
        };
    },
    async postUserAuth(ctx) {
        const data = ctx.request.body;
        const userInfo = await userServer.getUserByName(data.name);
        if (userInfo !== null) {
            if (!bcrypt.compareSync(data.password, userInfo.password)) {
                ctx.body = {
                    ok: true,
                    data: null,
                    info: '密码错误！',
                };
            } else {
                const userToken = {
                    name: userInfo.suer_name,
                    id: userInfo.id,
                };
                const token = jwt.sign(userToken, 'vue-koa-demo');
                ctx.body = {
                    ok: true,
                    token,
                };
            }
        } else {
            ctx.body = {
                ok: false,
                data: null,
                info: '用户不存在！',
            };
        }
    },
};