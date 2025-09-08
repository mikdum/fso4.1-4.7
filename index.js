import express, { json } from 'express'
import './dotenv.js'
import Blog from './models/blog.js'
import logger from './utils/logger.js'

const app = express()
logger.info('Connecting to', config.MONGODB_URI)
app.use(json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
	
	console.log("🚀 ~ request.body:", request.body)
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})