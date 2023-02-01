import styles from "./index.module.scss";
import logo from "../../../../assets/logo.svg";
import OPTIONS from "../items.json";
import classNames from "classnames";

type Props = typeof OPTIONS[0];

export function Item({
  title,
  description,
  category,
  serving,
  size,
  price,
  photo
}: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>

      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
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
            Serve {serving} pessoa{serving > 1 && "s"}
          </div>
          <div className={styles.item__price}>
            R$ {price.toFixed(2).replace(".", ",")}
          </div>
        </div>
      </div>
    </div>
  );
}
