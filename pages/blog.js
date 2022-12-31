import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'

// Step 1: Collect all the files from blogadata directory
// Step 2: Iterate through them and display them
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        console.log("UseEffect is running");
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed)
                setBlogs(parsed)
            })
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogitem) => {
                    return <div key={blogitem.slug}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                            <h3>{blogitem.title}</h3></Link>
                        <p className={styles.blogitemp}>{blogitem.content.substr(0, 140)}...</p>
                    </div>
                })}
            </main>
        </div>
    )
}

export default Blog