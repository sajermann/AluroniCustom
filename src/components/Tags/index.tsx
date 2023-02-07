import classNames from 'classnames';
import { TDish } from '~/types/TDish';
import styles from './index.module.scss';

type Props = Pick<TDish, 'category'|'serving'|'size'|'price'>

export function Tags({ category, serving, size, price }: Props) {
  return (
    <div className={styles.item__tags}>
      <div
        className={classNames({
          [styles.item__type]: true,
          [styles[`item__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.item__portion}>{size}g</div>
      <div className={styles.item__quantityPerson}>
        Serve {serving} pessoa{serving > 1 && 's'}
      </div>
      <div className={styles.item__price}>
        R$ {price.toFixed(2).replace('.', ',')}
      </div>
    </div>
  );
}
