import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { name, phone, email, desc }

        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                alert("Thanks for contacing us")
                setName('')
                setPhone('')
                setDesc('')
                setEmail('')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleChange = (e) => {
        if (e.target.name === "phone") {
            setPhone(e.target.value)
        }
        else if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name === "desc") {
            setDesc(e.target.value)
        }
        else if (e.target.name === "name") {
            setName(e.target.value)
        }
    }
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
                    <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name="name" aria-describedby="emailHelp" required />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="email" className={styles.formlabel}>Email address</label>
                    <input className={styles.input} type="email" value={email} onChange={handleChange} id="email" name="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formlabel}>Enter phone number</label>
                    <input className={styles.input} type="tel" value={phone} onChange={handleChange} id="phone" name="phone" aria-describedby="emailHelp" required />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern</label>
                    <textarea onChange={handleChange} value={desc} className={styles.input} id="desc" name='desc' rows="3" required />
                </div>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Contact