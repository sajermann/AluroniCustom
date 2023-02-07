import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

import filters from './filters.json';
import styles from './index.module.scss';

type TOption = typeof filters[0];

type Props = {
  filter: number | null;
  setFilter: Dispatch<SetStateAction<number | null>>;
};

export function Filters({ filter, setFilter }: Props) {
  function selectFilter(option: TOption) {
    if (filter === option.id) {
      setFilter(null);
      return;
    }
    setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((filterTemp) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === filterTemp.id,
          })}
          key={filterTemp.id}
          onClick={() => selectFilter(filterTemp)}
        >
          {filterTemp.label}
        </button>
      ))}
    </div>
  );
}
