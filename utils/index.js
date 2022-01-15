export const sortByDate = (a, b)=>{
    return (new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
}
export const sortByDateProjects = (a, b)=>{
    return (new Date(b.created_at) - new Date(a.created_at))
}