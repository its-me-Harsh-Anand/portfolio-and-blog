import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import {marked } from 'marked'
import Link from 'next/link'
import CategoryLabel from '@/components/CategoryLabel'
import styles from '@/styles/blog.module.css'

function BlogPage({frontmatter : {
    title,
    author,
    author_image,
    cover_image,
    date,
    category,
    excerpt,
}, content, slug}) {
    return (
        <Layout title={title} description={excerpt}>
            <Link href='/blog'>
                <a className={styles.goBack}>
                    Go Back
                </a>
            </Link>

            <div className={styles.mainDiv}>

                <div className={styles.titleAndCategory}>
                    <h1 className={styles.title}>{title}</h1>
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