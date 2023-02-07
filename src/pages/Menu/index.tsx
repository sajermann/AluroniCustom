import { useState } from 'react';

import { Filters } from './Filters';
import { Items } from './Items';
import { Order } from './Order';
import { SearchEngine } from './SearchEngine';
import stylesTheme from '~/styles/_theme.module.scss';
import styles from './index.module.scss';
export function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');
  return (
    <section className={styles.sectionMenu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <SearchEngine search={search} setSearch={setSearch} />

      <div className={styles.sectionMenu__filters}>
        <Filters filter={filter} setFilter={setFilter} />

        <Order order={order} setOrder={setOrder} />
      </div>

      <Items search={search} filter={filter} order={order} />
    </section>
  );
}
