import express from 'express'
import { twitRouter } from './src/twit/twit.controller.js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

async function main() {
    app.use(express.json())
    
    app.use('/api/twits', twitRouter)

    app.get('/profile', (req, res) => {
        res.render('profile', {user: {name: 'Dima', age: 26}})
    });

    app.get('/error', (req, res) => {
        throw new Error('This is a test error')
    })
    
    app.all('/*splat', (req, res) => {
        res.status(404).json({message: 'Not Found'})
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something went wrong')
    })

    //console.log(process.env.PORT);
    
    app.listen(process.env.PORT || 4200, () => {
        console.log('Server is running on port 4200');
    })
}

main()
