import fs from 'fs' //it is for server side not for client side
import path from 'path'
import Layout from "@/components/Layout";
import matter from "gray-matter"
import Post from '@/components/Post';
import { sortByDate } from '@/utils/index'
import styles from '@/styles/home.module.css'
export default function Blogs({posts, categoryName}){

  return (
    <Layout>
        <h1 className={styles.heading}>
          Blogs in {categoryName}
        </h1>

        <div className={styles.gridDiv}>
        {
            posts.map((post, index)=>{
                return <Post post={post} key = {index}/>
            })
        }
        </div>
    </Layout>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(file=>{

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', file), 
      'utf-8'
      )
    
    const {data: frontmatter} = matter(markdownWithMeta)
    return frontmatter
})



    const paths = posts.map(front=>(
        {
            params : {
                slug : front.category.toLowerCase()
            }
        }
        ))
    
    return {
        paths,
        fallback: false
    }    
        

}

export async function getStaticProps({params : {slug}}) {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename =>{
    

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename), 
      'utf-8'
      )
    
    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      frontmatter,
    }
  })

const requiredPosts = posts.filter(post=> post.frontmatter.category.toLowerCase() === slug)
  return {
    props: {
      posts : requiredPosts.sort(sortByDate),
      categoryName : slug
    },
  }
}

// /*
// fs module is a server side node module but we are importing here in client side, it gives error
// but fs module says, when we use it in function which completely runs on server side, then we can use it
// gray-matter module is use to parse markdown frontmatter file
// */