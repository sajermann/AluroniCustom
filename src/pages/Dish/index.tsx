import { useParams, useNavigate } from 'react-router-dom';
import OPTIONS from '~/data/items.json';
import styles from './index.module.scss';
import { Tags } from '~/components/Tags';
import { MainPage } from '~/components/MainPage';
import { NotFound } from '../NotFound';

export function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = OPTIONS.find((item) => item.id === Number(id));

  if (!dish) {
    return <NotFound />;
  }

  return (
    <MainPage>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
          <Tags category={dish.category} serving={dish.serving} size={dish.size} price={dish.price} />
        </div>
      </section>
    </MainPage>
  );
}
