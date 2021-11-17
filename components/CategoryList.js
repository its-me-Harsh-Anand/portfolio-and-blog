import Link from 'next/link'
import styles from "@/styles/categoryList.module.css"
export default function CategoryList({categories}) {
    return (
        <>
            {
                categories.map((category, index)=>{
                    return (
                        <Link href = {`/blog/category/${category.toLowerCase()}`} key={index}>
                            <span className={styles.categorySpan}
                            >{category}</span>
                        </Link>
                        
                    )
                  })
            }
        </>
    )
}
