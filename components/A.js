import Link from "next/link";
import styles from "../styles/A.module.css"

export default function A ({href, children}) {
    return (
        <Link href={href}>
            <a className={styles.nav_link}>{children}</a>
        </Link>
    )
}