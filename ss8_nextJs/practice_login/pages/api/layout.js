import Link from "next/link";
import styles from ".../style/Layout.module.css";

export default function Layout({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/public">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/pages/About">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/pages/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/pages/login">
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </div>
    );
}