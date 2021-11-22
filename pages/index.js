import ScrollingContainer from '../src/components/Scrolling/Container';
import ScrollingSection from '../src/components/Scrolling/Section';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <ScrollingContainer>
        <ScrollingSection step={1}>
          Today, I have a story
        </ScrollingSection>
        <ScrollingSection step={2}>
          While working with my ex-colleague on an interesting feature about scrolling with animation
        </ScrollingSection>
        <ScrollingSection step={3}>
          Due to our inexperience, the issue took us too much head-scratching and headache
        </ScrollingSection>
        <ScrollingSection step={4}>
          Therefore, I am creating this in 2 ways, the intersection observer way and the parralex way
        </ScrollingSection>
      </ScrollingContainer>
    </div>
  );
}
