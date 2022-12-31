import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Ppulate them inside the page
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(router.query);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1> Title of the page - {slug}</h1>
                <hr />
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quas, non quisquam corrupti tempore nihil? Maxime doloremque necessitatibus atque vitae distinctio laborum velit tenetur voluptate vel, modi voluptatem eos molestias, doloribus illum quis debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam eligendi vel quidem qui commodi iste ex sequi est, laborum necessitatibus sint architecto nihil facilis velit adipisci quisquam dolorem ipsa tempore incidunt fugiat suscipit. Officia minus, doloribus pariatur libero quia sit iure necessitatibus tenetur enim!
                </div>
            </main>
        </div>
    )
}

export default slug