import express from 'express'
const app = express()

async function main() {
    
    app.use('/api/twit', (req, res) => {
        res.json({
            message: 'success'
        })
    })

}

main()