import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'

// Step 1: Collect all the files from blogadata directory
// Step 2: Iterate through them and display them
const Blog = (props) => {
    console.log(props);
    const [blogs, setBlogs] = useState([props.allBlogs])
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlogs(parsed)
            })
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogitem) => {
                    return <div key={blogitem.slug}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                            <h3 className={styles.blogitemh3}>{blogitem.title}</h3></Link>
                        <p className={styles.blogitemp}>{blogitem.content.substr(0, 150)}...</p>
                    </div>
                })}
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()

    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog