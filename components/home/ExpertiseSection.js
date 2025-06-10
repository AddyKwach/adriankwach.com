// components/home/ExpertiseSection.js
import styles from './ExpertiseSection.module.css';
import Carousel from '../common/Carousel';
import ExpertiseCard from '../expertise/ExpertiseCard';

 import NetworkIcon from '../icons/NetworkIcon';
 import QuantIcon from '../icons/QuantIcon';
 import EmbeddedIcon from '../icons/EmbeddedIcon';
 import CodeIcon from '../icons/CodeIcon';

const expertiseData = [
  {
    icon: NetworkIcon,
    title: "Network Systems",
    description: "Designing and optimizing robust network infrastructures for high performance and security."
  },
  {
    icon: QuantIcon,
    title: "Quantitative Modeling",
    description: "Developing sophisticated algorithms and Technical Market Indicators for data-driven insights."
  },
  {
    icon: EmbeddedIcon,
    title: "Embedded Systems",
    description: "Building intelligent hardware-software integrations for real-world applications."
  },
  {
    icon: CodeIcon,
    title: "Software Development",
    description: "Crafting high-quality, maintainable code in C#, Python, and other languages for scalable solutions."
  }
];

const ExpertiseSection = () => {
  const slides = expertiseData.map((item, index) => (
    <ExpertiseCard 
      key={index}
      Icon={item.icon || (() => null)} // Use a fallback empty component
      title={item.title}
      description={item.description}
    />
  ));

  const emblaOptions = { loop: true, align: 'start' };

  return (
    <section className={styles.expertiseSection}>
      <h2 className={styles.title}>My Expertise</h2>
      <p className={styles.subtitle}>
        Leveraging my expertise in network architecture, embedded systems, and software development, I design and implement resilient solutions that drive efficiency and innovation in financial markets.
      </p>
      <div className={styles.carouselContainer}>
        <Carousel slides={slides} options={emblaOptions} />
      </div>
    </section>
  );
};

export default ExpertiseSection;