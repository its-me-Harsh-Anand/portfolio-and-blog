import fs from 'fs' //it is for server side not for client side
import path from 'path'
import Layout from "../../components/Layout";
import matter from "gray-matter"
import styles from '../../styles/home.module.css'
import Post from '../../components/Post';
import { sortByDate } from '../../utils'
export default function Blogs({posts}) {

  return (
    <Layout>
      <h1 className={styles.heading}>
        My Blogs
      </h1>

      <div className={styles.gridDiv}>
        {
          posts.map((post, index) =>{
            return <Post key={index} post = {post}/>
          })
        }
      </div>
    </Layout>
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
      posts : posts.sort(sortByDate)
    },
  }
}

/*
fs module is a server side node module but we are importing here in client side, it gives error
but fs module says, when we use it in function which completely runs on server side, then we can use it
gray-matter module is use to parse markdown frontmatter file
*/