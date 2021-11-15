import fs from 'fs' //it is for server side not for client side
import path from 'path'
import Layout from "../components/Layout";
import matter from "gray-matter"

export default function Home({posts}) {
  console.log(posts)
  return (
    <Layout>Hello world</Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename =>{
  const slug = filename.replace('.md', '')

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', filename), 
    'utf-8'
    )
  
  const {data: frontmatter} = matter(markdownWithMeta)
  return {
    slug,
    frontmatter,
  }
})

  return {
    props: {
      posts
    },
  }
}

/*
fs module is a server side node module but we are importing here in client side, it gives error
but fs module says, when we use it in function which completely runs on server side, then we can use it
gray-matter module is use to parse markdown frontmatter file
*/