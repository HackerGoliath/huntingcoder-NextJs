import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';

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
                        <p className={styles.blogitemp}>{blogitem.content}...</p>
                    </div>
                })}
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata")
    let myfile;
    let allBlogs = []
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }

    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog