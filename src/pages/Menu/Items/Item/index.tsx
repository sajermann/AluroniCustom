import styles from './index.module.scss';

import { TDish } from '~/types/TDish';
import { Tags } from '~/components/Tags';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function ItemPage({
  id,
  title,
  description,
  category,
  serving,
  size,
  price,
  photo,
}: TDish) {
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={()=>navigate(`/prato/${id}`)}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>

      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags category={category} serving={serving} size={size} price={price} />
      </div>
    </div>
  );
}

export const Item = memo(ItemPage);