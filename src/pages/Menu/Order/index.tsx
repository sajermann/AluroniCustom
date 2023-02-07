import classNames from 'classnames';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './index.module.scss';
import OPTIONS from './options.json';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
};
export function Order({ order, setOrder }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const nameOrder = order && OPTIONS.find((opt) => opt.value === order)?.nome;

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles['order--active']]: order !== '',
      })}
      onClick={() => setIsOpened((prev) => !prev)}
      onBlur={() => setIsOpened(false)}
    >
      <span>{nameOrder || 'Ordernar Por'}</span>
      {isOpened ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles['order__options--active']]: isOpened,
        })}
      >
        {OPTIONS.map((opt) => (
          <div
            onClick={() => setOrder(opt.value)}
            key={opt.value}
            className={styles.order__option}
          >
            {opt.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
