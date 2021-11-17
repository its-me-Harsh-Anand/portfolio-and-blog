import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/post.module.css";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post, searchMenu }) {
  return (
    <div className={styles.postDiv}>
      {!searchMenu && (
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          height={420}
          width={600}
          className={styles.postImage}
        />
      )}

      <div className={styles.dateAndCategory}>
        <span className={styles.date}>{post.frontmatter.date}</span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className={styles.title}>
        <Link href={`/blog/${post.slug}`}>
          <a className={styles.titleLink}>{post.frontmatter.title}</a>
        </Link>
        <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>
      </div>

      {!searchMenu && (
        <div className={styles.author}>
          <Link href={`/blog/${post.slug}`}>
            <a className={styles.authorLink}>Read More</a>
          </Link>
          <div className={styles.authorImageDiv}>
            <img
              src={post.frontmatter.author_image}
              alt=""
              className={styles.authorImage}
            />
            <h3 className={styles.authorName}>{post.frontmatter.author}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
