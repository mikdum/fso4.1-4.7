import '../dotenv.js'
import { Schema, model, connect } from 'mongoose'
const blogSchema = Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
  })
  const mongoUrl =  process.env.MONGODB_URI
connect(mongoUrl)
  const Blog = model('Blog', blogSchema)


  export default Blog
  