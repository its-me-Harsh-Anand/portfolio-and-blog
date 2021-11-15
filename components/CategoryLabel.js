import Link from "next/link"

function CategoryLabel({children}) {
    const categoryColor = {
        JavaScript : 'green',
        Python: 'blue',
        PHP: 'pink',
        CSS: 'orange',
        Ruby : 'red'
    }
    return (
        <div style={{
                    "color": "grey", 
                    "backgroundColor": categoryColor[children] || "black",
                    "padding" : "3px 5px",
                    "borderRadius": "3px",
                    }}
        >
        <Link 
            href={`/blog/category/${children.toLowerCase()}`}
        >
            <a style={
                {
                    "color" : "white",
                    "fontWeight" : "bold",
                    "textDecoration" : "none"
                }
            }>
                {children}
            </a> 
        </Link>
        </div>
    )
}

export default CategoryLabel
