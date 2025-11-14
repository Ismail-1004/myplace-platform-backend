import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes'
import sequelize from './db/config'
import './db/models'
import errorMiddleware from './middlewares/error-middleware'
import path from 'path'

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        throw e
    }
}

start()