import styles from './index.module.scss';
import stylesTheme from '~/styles/_theme.module.scss';
import houseImg from '~/assets/about/house.png';
import pasta1Img from '~/assets/about/pasta1.png';
import pasta2Img from '~/assets/about/pasta2.png';

const images = [pasta1Img, pasta2Img];

export function About() {
  return (
    <section>
      <h3 className={stylesTheme.title}>Sobre</h3>
      <div className={styles.about}>
        <img src={houseImg} alt="Casa Aluroni" />
        <div className={styles.about__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, i)=>(
          <div key={i} className={styles.images__image}>
            <img src={image} alt="Imagem de Massa" />
          </div>
        ))}
      </div>
    </section>
  );
}
