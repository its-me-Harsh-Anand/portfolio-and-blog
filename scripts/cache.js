const matter = require("gray-matter")
const fs = require('fs')
const path = require('path')

function getPostData() {
    const files = fs.readdirSync(path.join("posts"))
    const posts = files.map(file=>{
        const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8")
        const slug = file.replace(".md", "")
        const {data: frontmatter} =  matter(markdownWithMeta)

        return {
            frontmatter,
            slug
        }
    })
    console.log(posts)
    return `export const posts = ${JSON.stringify(posts)}`
}

try {
    fs.readdirSync('cache')
} catch (error) {
    fs.mkdirSync("cache")
}

fs.writeFile("cache/data.js", getPostData(), function(err){
    if(err) return console.log(err)
    console.log("Post cached...")
})

//we can get data if we run node scripts/cache.js but we don't want to do manually in production, hence *husky* package will help us
