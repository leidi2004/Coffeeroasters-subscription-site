import styles from './AboutUs.module.scss';
import { Nav } from '../../components/common/Nav/Nav';
import { Footer } from '../../components/common/Footer/Footer';
import { CountriesList } from '../../components/about/CountryCard/CountriesList';
export const AboutUs = () => {
	return (
		<>
			<Nav />
			<main>
				<section className={styles.section}>
					<div className={styles.section__container}>
						<div className={styles.section__AboutUs}>
							<h1 className={styles.section__title}>About us</h1>
							<p className={styles.section__text}>
								Coffeeroasters began its journey of exotic discovery in 1999,
								highlighting stories of coffee from around the world. We have
								since been dedicated to bring the perfect cup - from bean to
								brew - in every shipment.
							</p>
						</div>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.section__commitment}>
						<div className={styles.section__CommitmentImg}></div>
						<div className={styles.section__CommitmentDescription}>
							<h2 className={styles.section__titleDark}>Our commitment</h2>
							<p className={styles.section__textDark}>
								We’re built on a simple mission and a commitment to doing good
								along the way. We want to make it easy for you to discover and
								brew the world’s best coffee at home. It all starts at the
								source. To locate the specific lots we want to purchase, we
								travel nearly 60 days a year trying to understand the challenges
								and opportunities in each of these places. We collaborate with
								exceptional coffee growers and empower a global community of
								farmers through with well above fair-trade benchmarks. We also
								offer training, support farm community initiatives, and invest
								in coffee plant science. Curating only the finest blends, we
								roast each lot to highlight tasting profiles distinctive to
								their native growing region.
							</p>
						</div>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.section__CoffeeImg}></div>
					<div className={styles.section__QualityContent}>
						<h3 className={styles.section__title}>Uncompromising quality</h3>
						<p className={styles.section__text}>
							Although we work with growers who pay close attention to all
							stages of harvest and processing, we employ, on our end, a
							rigorous quality control program to avoid over-roasting or baking
							the coffee dry. Every bag of coffee is tagged with a roast date
							and batch number. Our goal is to roast consistent, user-friendly
							coffee, so that brewing is easy and enjoyable.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<CountriesList />
				</section>
			</main>
			<div className='padding'>
				<Footer />
			</div>
		</>
	);
};
