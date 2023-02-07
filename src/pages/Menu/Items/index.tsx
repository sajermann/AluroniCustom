import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Item } from './Item';
import ITEMS from '../../../data/items.json';

type Props = {
  search: string;
  filter: number | null;
  order: string;
};

export function Items({ search, filter, order }: Props) {
  const [list, setList] = useState(ITEMS);

  function testSeach(title: string) {
    const regex = new RegExp(search, 'i');

    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;

    return true;
  }

  function handleOrder(newList: typeof ITEMS) {
    switch (order) {
    case 'porcao':
      return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
    case 'qtd_pessoas':
      return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
    case 'preco':
      return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = ITEMS.filter(
      (item) => testSeach(item.title) && testFilter(item.category.id)
    );

    setList(handleOrder(newList));
  }, [search, filter, order]);
  return (
    <div className={styles.items}>
      {list.map((opt) => (
        <Item key={opt.id} {...opt} />
      ))}
    </div>
  );
}
