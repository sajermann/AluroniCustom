import { Dispatch, memo, SetStateAction, useMemo } from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './index.module.scss';

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
function SearchEngineComponent({ search, setSearch }: Props) {

  const elementIcon = useMemo(()=><CgSearch size={20} color="#4C4D5E" />,[]);

  return (
    <div className={styles.searchEngine}>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Buscar'
      />
      {elementIcon}
    </div>
  );
}

export const SearchEngine = memo(SearchEngineComponent);