import { ButtonCreatePlan } from '../../components/common/ButtonCreatePlan/ButtonCreatePlan';
import { Nav } from '../../components/common/Nav/Nav';
import styles from './Home.module.scss';
import iconEspresso from '../../assets/img/home/desktop/image-gran-espresso.png';
import iconPlanalto from '../../assets/img/home/desktop/image-planalto.png';
import iconPiccollo from '../../assets/img/home/desktop/image-piccollo.png';
import iconDanche from '../../assets/img/home/desktop/image-danche.png';

import { CoffeeCard } from '../../components/home/CoffeCard/CoffeeCard';
import { v4 as idRandom } from 'uuid';
import iconCoffee from '../../assets/img/home/desktop/icon-coffee-bean.svg';
import iconGift from '../../assets/img/home/desktop/icon-gift.svg';
import iconTruck from '../../assets/img/home/desktop/icon-truck.svg';
import { ReasonCard } from '../../components/home/ReasonCard/ReasonCard';
import { Steps } from '../../components/common/StepsCard/Steps';
import { Footer } from '../../components/common/Footer/Footer';

export const Home = () => {
	const coffees = [
		{
			id: idRandom(),
			img: iconEspresso,
			title: 'Gran Espresso',
			description:
				'Light and flavorful blend with cocoa and black pepper for an intense experience',
		},
		{
			id: idRandom(),
			img: iconPlanalto,
			title: 'Planalto',
			description:
				'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
		},
		{
			id: idRandom(),
			img: iconPiccollo,
			title: 'Piccollo',
			description:
				'Mild and smooth blend featuring notes of toasted almond and dried cherry',
		},
		{
			id: idRandom(),
			img: iconDanche,
			title: 'Danche',
			description:
				'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
		},
	];

	const reasons = [
		{
			id: idRandom(),
			icon: iconCoffee,
			title: 'Best quality',
			description:
				'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
		},

		{
			id: idRandom(),
			icon: iconGift,
			title: 'Exclusive benefits',
			description:
				'Special offers and swag when you subscribe, including 30% off your first shipment.',
		},

		{
			id: idRandom(),
			icon: iconTruck,
			title: 'Free shipping',
			description:
				'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
		},
	];

	return (
		<main>
			<Nav />
			<section className={styles.section}>
				<div className={styles.content}>
					<h1 className={styles.content__title}>Great coffee made simple.</h1>
					<p className={styles.content__text}>
						Start your mornings with the world’s best coffees. Try our expertly
						curated artisan coffees from our best roasters delivered directly to
						your door, at your schedule.
					</p>
					<ButtonCreatePlan />
				</div>
			</section>
			<section className={styles.test}>
				<div className={styles.titleContainer}>
					<div className={styles.titleShadow}></div>
					<h3 className={styles.coffeeList__title}>our collection</h3>
				</div>
				<div className={styles.coffeeList}>
					{coffees.map(coffee => (
						<CoffeeCard coffee={coffee} key={coffee.id} />
					))}
				</div>
			</section>
			<section className={styles.reasonsSection}>
				<article className={styles.article}>
					<h2 className={styles.article__title}>Why choose us?</h2>
					<p className={styles.article__text}>
						A large part of our role is choosing which particular coffees will
						be featured in our range. This means working closely with the best
						coffee growers to give you a more impactful experience on every
						level.
					</p>
				</article>
				<div className={styles.cardContainer}>
					<div className={styles.wrapper}>
						{reasons.map(reason => (
							<ReasonCard reason={reason} key={reason.id} />
						))}
					</div>
				</div>
			</section>
			<section>
				<Steps/>
			</section>
			<ButtonCreatePlan/>
			<Footer />
		</main>
	);
};
