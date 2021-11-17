import fs from 'fs' //it is for server side not for client side
import path from 'path'
import Link from 'next/link'
import Layout from "@/components/Layout";
import matter from "gray-matter"
import styles from '@/styles/home.module.css'
import Post from '@/components/Post';
import { sortByDate } from '@/utils/index'


export default function Home({posts}) {
  return (
    <Layout>
      <h1 className={styles.heading}>
        Latest Posts
      </h1>

      <div className={styles.gridDiv}>
        {
          posts.map((post, index) =>{
            return <Post key={index} post = {post}/>
          })
        }
      </div>

      <Link href='/blog'>
        <a className={styles.indexLink}>
          All posts
        </a>
      </Link>
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
      posts : posts.sort(sortByDate).slice(0,6)
    },
  }
}

/*
fs module is a server side node module but we are importing here in client side, it gives error
but fs module says, when we use it in function which completely runs on server side, then we can use it
gray-matter module is use to parse markdown frontmatter file
*/

/*
<Image> is rendered only through vercel 
next export -> while building through npm build, will export all static props and paths and make our site static
and hence api will work here statically and not on server-side

we cannot fetch our files inside post in server side, so to do this we have to cached all the post to get the post in search bar
*/