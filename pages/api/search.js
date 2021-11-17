// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default function handler(req, res) {

  let posts;
  if(process.env.NODE_ENV === 'production'){

  } else{
    const files = fs.readdirSync(path.join("posts"))

     posts = files.map(file=>{
      const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8")

      const {data: frontmatter} =  matter(markdownWithMeta)

      return {
        frontmatter
      }
    })   
  }

  const results = posts.filter(({frontmatter:{title, excerpt, category}}) => title.toLowerCase().indexOf(req.query.q) != -1 || excerpt.toLowerCase().indexOf(req.query.q) != -1 || category.toLowerCase().indexOf(req.query.q) != -1)
  
  res.status(200).json(JSON.stringify({results}))
}
