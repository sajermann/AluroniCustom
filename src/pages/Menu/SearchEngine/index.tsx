import { Dispatch, SetStateAction } from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './index.module.scss';

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
export function SearchEngine({ search, setSearch }: Props) {
  return (
    <div className={styles.searchEngine}>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Buscar'
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
