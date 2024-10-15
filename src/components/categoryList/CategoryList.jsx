import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  })
  if (!res.ok) {
    return new Error("fetching categories error")
  }

  return res.json()
}

const CategoryList = async () => {

  const categories = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map(element => (
          <Link
            href={`/blog?cat=${element.slug}`}
            className={`${styles.category} ${styles[element.slug]}`}
          >
            <Image
              src={element.img}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            {element.title}
          </Link>
        ))}




      </div>
    </div>
  )
}

export default CategoryList