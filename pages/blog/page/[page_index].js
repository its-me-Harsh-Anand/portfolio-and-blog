import fs from 'fs' //it is for server side not for client side
import path from 'path'
import Layout from "@/components/Layout";
import matter from "gray-matter"
import styles from '@/styles/home.module.css'
import Post from '@/components/Post';
import Pagination from '@/components/Pagination';
import { sortByDate } from '@/utils/index'
import { POST_PER_PAGE } from '@/config/index';
import CategoryList from '@/components/CategoryList';
export default function Blogs({posts, noOfPages, currentPage, uniqueCategories}) {

  return (
    <Layout title={`Blog page ${currentPage}`}>
      <div className={styles.categoryList}>
        <CategoryList categories={uniqueCategories} />
      </div>

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

      <Pagination currentPage={currentPage} noOfPages={noOfPages}/>
    </Layout>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const noOfPages = Math.ceil(files.length / POST_PER_PAGE)

    const paths = []
    for(let i=1; i<=noOfPages ; i++ ){
        paths.push({
            params : {
                page_index : i.toString()
            }
        })
    }

    return {
        paths,
        fallback: false
    }      
        

}

export async function getStaticProps({params}) {

    const page = parseInt((params && params.page_index) || 1)


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
    
    //get category for category sidebar

    const categories = posts.map(post=> post.frontmatter.category)
    const uniqueCategories = [...new Set(categories)]
    
    const noOfPages = Math.ceil(files.length / POST_PER_PAGE)
    const pageIndex = page-1

  const orderedPosts = posts.sort(sortByDate).slice(pageIndex*POST_PER_PAGE , (pageIndex+1)*POST_PER_PAGE)
  return {
    props: {
      posts : orderedPosts,
      noOfPages,
      currentPage : page,
      uniqueCategories,
    },
  }
}

/*
fs module is a server side node module but we are importing here in client side, it gives error
but fs module says, when we use it in function which completely runs on server side, then we can use it
gray-matter module is use to parse markdown frontmatter file
*/