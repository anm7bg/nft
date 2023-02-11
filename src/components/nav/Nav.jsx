import Link from "../link/Link";
import styles from "./Nav.module.scss"

export default function Nav() {

    return(
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link href="#">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Activity</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Explore</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}