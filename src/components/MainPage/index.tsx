import React from 'react';
import {Outlet} from 'react-router-dom';

import stylesTheme from '~/styles/_theme.module.scss';
import styles from './index.module.scss';

export function MainPage({children}:{children?: React.ReactNode}){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}