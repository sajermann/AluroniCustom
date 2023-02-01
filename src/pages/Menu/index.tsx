import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Filters } from "./Filters";
import styles from "./index.module.scss";
import { Items } from "./Items";
import { Order } from "./Order";
import { SearchEngine } from "./SearchEngine";

export function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>

      <section className={styles.sectionMenu}>
        <h3 className={styles.sectionMenu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />

        <div className={styles.sectionMenu__filters}>
          <Filters filter={filter} setFilter={setFilter} />

          <Order order={order} setOrder={setOrder} />
        </div>

        <Items search={search} filter={filter} order={order}  />
      </section>
    </main>
  );
}
