import Link from "../link/Link";
import styles from "./Nav.module.scss"
import { useRouter } from "next/router";

export default function Nav() {

    const { asPath } = useRouter();

    // console.log(router);

    return(
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link href="/" >
                        <a>Home</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/demo" className={asPath === "/demo" ? styles.active : "list"}>
                        Demo
                    </Link>
                </li> */}
                <li>
                    <Link href="#">
                        Activity
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Explore
                    </Link>
                </li>
            </ul>
        </nav>
    );

}