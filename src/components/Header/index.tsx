import {Link} from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/logo.svg';
import styles from './index.module.scss';

export function Header() {
  const routes = [
    { label: 'Ínicio', to: '/' },
    { label: 'Cardápio', to: 'cardapio' },
    { label: 'Sobre', to: 'sobre' },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route) => (
          <li key={route.label} className={styles.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
