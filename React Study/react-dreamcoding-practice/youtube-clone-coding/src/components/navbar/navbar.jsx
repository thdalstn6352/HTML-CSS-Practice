import React, { useState, memo } from "react"
import styles from './navbar.module.css'

const Navbar = memo(({onSubmit}) => {
    const [value, setValue] = useState("");
    const handleInput = ((event) => {
        setValue(event.target.value);
    })

    const handleSubmit = ((event) => {
        event.preventDefault();
        onSubmit(value);
        setValue("");
    });
    return (
        <nav className={styles.header}>
            <button className={styles.btn}>
               <img className={styles.logo} src="./images/youtube.png" alt="youtube logo" />
               <h1 className={styles.title}>Youtube</h1>
            </button>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} value={value} onChange={handleInput}/>
                <button className={styles.submitBtn} type="submit">
                    <img className={styles.search} src="./images/search.png" alt="search btn"/>
                </button>
            </form>
        </nav>
    )
}
)
export default Navbar