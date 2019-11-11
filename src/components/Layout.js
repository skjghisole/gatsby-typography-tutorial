import React from "react"
import Header from "./Header"
import styles from "../styles/home.module.css"

export default props => (
	<div>
		<Header />
		<div className={styles.container}>{props.children}</div>
	</div>
)
