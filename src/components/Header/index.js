import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
const Header = (props) => {
  const { items, title } = props;
  const hasItems = Array.isArray(items);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="https://nextjs.org/">
          <a>
            <Image alt="Vercel logo" src="/vercel.svg" width="100" height="100" fill />
          </a>
        </Link>
        {hasItems
          ? items.map((item, idx) => (
              <Link href={item.url} key={`${item.id}` || idx}>
                <a className={item.label === title ? styles.active : null}>
                 
                  {item.label || `${idx}`}
                </a>
              </Link>
            ))
          : null}
      </nav>
    </header>
  );
};

export default Header;
