import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';

import { ReactComponent as NotFoundImg } from '~/assets/notfound/not_found.svg';
import styles from './index.module.scss';
import stylesTheme from '~/styles/_theme.module.scss';

export function NotFound(){
  const navigate = useNavigate();

  return(
    <div className={classNames({
      [styles.container]: true,
      [stylesTheme.container]: true,
    })}>
      <div className={styles.back}>
        <button onClick={()=>navigate(-1)}>{'< Voltar'}</button>
      </div>
      <NotFoundImg />
    </div>
  );
}