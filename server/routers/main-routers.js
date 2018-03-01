const KoaRouter = require('koa-router');

const router = KoaRouter();
router.get('/', (ctx) => {
  ctx.body = {
    ok: true,
    msg: '请求成功',
  };
});

module.exports = router;