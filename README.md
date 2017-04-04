# koa-args
Koa2 args middleware.
Lazy combines ctx.query, ctx.request.body, ctx.params into one object ctx.args.
Depends on Object.assign.

## Instalation
```
npm install --save koa-args
```

## Usage
```javascript
import Koa from 'koa';
import args from 'koa-args';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

const app = new Koa();
app.use(bodyParser());
app.use(args());

const router = new Router();
router.post('/test/:id', async ctx => {
  console.log(ctx.args.id);
  ctx.body = ctx.args;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(80);
```
