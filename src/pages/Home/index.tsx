import { useNavigate } from 'react-router-dom';

import MENU_OPTIONS from '~/data/items.json';
import styles from './index.module.scss';
import stylesTheme from '~/styles/_theme.module.scss';
import ourHouseImg from '~/assets/nossa_casa.png';
import { TDish } from '~/types/TDish';

export function Home() {
  const navigate = useNavigate();
  const recommendeds = [...MENU_OPTIONS]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  function handleRedirect(recommended: TDish) {
    navigate(`/prato/${recommended.id}`, {
      state: { ...recommended },
    });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommendeds}>
        {recommendeds.map((recommended) => (
          <div key={recommended.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={recommended.photo} alt={recommended.title} />
            </div>

            <button
              className={styles.recommended__button}
              onClick={() => handleRedirect(recommended)}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={stylesTheme.title}>Nossa Casa</h3>

      <div className={styles.ourHouse}>
        <img src={ourHouseImg} alt="Casa do Aluroni" />
        <div className={styles.ourHouse__address}>
          Rua Vergueiro, 3185 <br />
          <br /> Vila Mariana, SP
        </div>
      </div>
    </section>
  );
}
