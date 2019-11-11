import React from "react"
import styles from "../styles/header.module.css"
import { Link } from "gatsby"

export default () => (
	<div className={styles.headerContainer}>
		<nav className={styles.navBar}>
			<Link to="/" className={styles.navLink}>
				Home
			</Link>
			<Link to="/about" className={styles.navLink}>
				About
			</Link>
			<Link to="/contact" className={styles.navLink}>
				Contact
			</Link>
		</nav>
	</div>
)
