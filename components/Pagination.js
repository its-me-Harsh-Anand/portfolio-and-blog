import Link from 'next/link'
import styles from '@/styles/pagination.module.css'

export default function Pagination({ currentPage, noOfPages }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === noOfPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  if (noOfPages === 1) return <></>

  return (
    <div className='mt-6'>
      <ul className={styles.list}>
        {!isFirst && (
          <Link href={prevPage}>
            <li className={styles.listItem}>
              Previous
            </li>
          </Link>
        )}

        {Array.from({ length: noOfPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <li className={styles.listItem} key={i}>
              {i + 1}
            </li>
          </Link>
        ))}
    
        {!isLast && (
          <Link href={nextPage}>
            <li className={styles.listItem}>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}
