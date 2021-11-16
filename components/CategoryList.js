import Link from 'next/link'
import styles from "@/styles/categoryList.module.css"
export default function CategoryList({categories}) {
    return (
        <>
            {
                categories.map((category, index)=>{
                    return (
                        <Link href = {`/blog/category/${category.toLowerCase()}`}>
                            <span className={styles.categorySpan}
                            key={index}>{category}</span>
                        </Link>
                        
                    )
                  })
            }
        </>
    )
}
