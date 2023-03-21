import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
export default function Navbar() {

  const handleMenu =  (event: React.MouseEvent<HTMLElement>) => {

      const menu = document.querySelector('.menu');
      menu?.classList.toggle('show')

  }

  return (
    <header className={styles.header}>
      <div>
        <span>Maicon R.</span>
        <div className={styles.navigation}>
          <div className={styles.hamburguer} onClick={handleMenu}>
            <div></div>
            <div></div>
          </div>
          <nav>
            <div className={styles.menu}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/hobbies/tecnologia">Tecnologia</Link></li>
                <li><Link href="/hobbies/viagens">Viagens</Link></li>
                <li><Link href="/hobbies/musica">Musica</Link></li>
                <li><Link href="/hobbies/games">Games</Link></li>
                <li><Link href="/hobbies/animes">Animes</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


