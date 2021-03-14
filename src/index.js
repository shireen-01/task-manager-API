const express= require('express')
require('./db/mongoose')
require('dotenv').config()

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app= express()
const port= process.env.PORT

// app.use((req,res,next) => {
//     if(req.method === 'GET'|| req.method === 'PATCH'||req.method === 'POST'||req.method === 'DELETE' ){
//         res.status(503).send('Site is under maintainence. Try again later.')
//     }
//     else{
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
