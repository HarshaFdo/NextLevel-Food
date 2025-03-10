import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <h1><Link href="/meals">Browse Meals</Link></h1>
          </li>
          <li>
            <h1><Link href="/community">Foodies Community</Link></h1>
          </li>
        </ul>
      </nav>
    </header>
  );
}
