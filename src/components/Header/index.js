import Link from "next/link";
import Image from "next/image";
import { Nav as NavStyled, Header as HeaderStyled } from "./Header.sc";
const Header = (props) => {
  const { items, title } = props;
  const hasItems = Array.isArray(items);
  return (
    <HeaderStyled>
      <NavStyled>
        <Link href="https://nextjs.org/">
          <a>
            <Image
              alt="Vercel logo"
              src="/vercel.svg"
              width="100"
              height="100"
              fill
            />
          </a>
        </Link>
        {hasItems
          ? items.map((item, idx) => (
              <Link href={item.url} key={`${item.id}` || idx}>
                <a className={item.label === title ? "active" : null}>
                  {item.label || `${idx}`}
                </a>
              </Link>
            ))
          : null}
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
