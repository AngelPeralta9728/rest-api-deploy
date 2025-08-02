import express, { json } from 'express' //require ---> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from '../middlewares/cors.js'
//como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

//en el futuro: el import del json sera asi:
//import movies from './movies.json' with { type: 'json' }

//como leer un json en ESModules recomendado por ahora




const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // dehabilitar el header x-powered-by: express
//todos los recursos que sean MOVIES se identifican con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, '0.0.0.0', () =>{
    console.log(`server listening on port http://localhost:${PORT}`)
})