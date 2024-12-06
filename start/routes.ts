/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.post('/test', (ctx) => {
  return ctx.response.send({
    test: 2,
  })
})
