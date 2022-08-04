import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import {marked } from 'marked'
import Link from 'next/link'
import CategoryLabel from '@/components/CategoryLabel'
import styles from '@/styles/blog.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { FaThumbsUp } from 'react-icons/fa'
import { IconContext } from "react-icons";

function BlogPage({frontmatter : {
    title,
    author,
    author_image,
    cover_image,
    date,
    category,
    excerpt,
}, content, slug}) {

    const router = useRouter()
    
    const [likes, setLikes] = useState(0)
    const [postid, setPostid] = useState('')

    useEffect(()=>{
        axios.get('https://learnwithharsh.herokuapp.com/posts')
        .then(res=>{
            const post = res.data.find(post=> post.postname === router.query.slug)
            
            return post
        })
        .then((post)=>{
            setLikes(post?.likes || 0)
            return post
        })
        .then((post)=>{
            setPostid(post?._id || 0)
        })
    }, [])

        console.log(postid)
    
    function handleLikes(e){
        e.preventDefault()

        setLikes((likes)=> likes + 1)
        const updatedlike = {
            likes : likes+1
        }

        if(postid !== 0){
            axios.post(`https://learnwithharsh.herokuapp.com/posts/update/${postid}`, updatedlike)
            .then(res=> console.log(res.data))
        } else {
            console.log(`New post with title: ${title}, not updated in backend`)
        }
    }






    return (
        <Layout title={title} description={excerpt}>
            

            <div className={styles.mainDiv}>

                <div className={styles.titleAndCategory}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.likesDiv}>
                        <div>
                            <IconContext.Provider value={{className : `${styles.likesIcon}`}}>
                                <FaThumbsUp onClick={(e)=> handleLikes(e)}/>
                            </IconContext.Provider>
                        </div>
                        <div className={styles.likesCount}>{likes}</div>
                    </div>
                    <CategoryLabel>{category}</CategoryLabel>
                </div>

                <img src={cover_image} alt='' className={styles.coverImage} />

                <div className={styles.author}>
                    <div className={styles.aboutAndImage}>
                        <img
                        src={author_image}
                        alt=''
                        className={styles.authorImage}
                        />
                        <h4>{author}</h4>
                    </div>
                    <div className={styles.date}>{date}</div>
                </div>

                <div className="blog-text">
                    <div className="blog-main" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
            </div>

            <div className={styles.linksDiv}>
                <Link href="/blog">
                    <a className={styles.goBack}>
                        Go back
                    </a>
                </Link>

                <Link href={`/blog/category/${category.toLowerCase()}`}>
                    <a className={styles.goBack}>
                        Read more blogs on { category }
                    </a>
                </Link>
                
            </div>
        </Layout>
    )
}

export default BlogPage


export async function getStaticPaths(){
    const files = fs.readdirSync(path.join("posts"))

    const paths = files.map((filename)=> (
        {
            params :{
                slug : filename.replace('.md', '')
            }
        }
    ))


    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params : {slug}}){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + ".md"), 'utf-8')

    const {data : frontmatter, content} = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            content,
            slug
        }
    }
}