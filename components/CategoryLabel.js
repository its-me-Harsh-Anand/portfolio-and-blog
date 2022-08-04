import Link from "next/link"
import styles from '@/styles/categoryLabel.module.css'

function CategoryLabel({children}) {
    const categoryColor = {
        JavaScript : 'green',
        Python: 'blue',
        PHP: 'pink',
        CSS: 'orange',
        Ruby : 'red',
        React : 'burlywood',
        GraphQL : 'purple',
        Roadmap : 'rgb(155 163 235)'
    }
    return (
        <div  className={styles.categoryDiv}
        style={{
                    "color": "grey", 
                    "backgroundColor": categoryColor[children] || "black",
                    "padding" : "3px 5px",
                    "borderRadius": "3px",
                    }}
           
        >
        <Link 
            href={`/blog/category/${children.toLowerCase()}`}
        >
            <a 
                className={styles.categoryLink}
            >
                {children}
            </a> 
        </Link>
        </div>
    )
}

export default CategoryLabel
