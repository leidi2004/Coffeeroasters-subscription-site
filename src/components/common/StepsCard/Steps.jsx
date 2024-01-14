import { PropTypes } from 'prop-types';
import styles from './Steps.module.scss';
export const Steps = () => {
	const steps = [
		{
			number: '01',
			step: 'Pick your coffee',
			instruction:
				'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
		},

		{
			number: '02',
			step: 'Choose the frequency',
			instruction:
				'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
		},

		{
			number: '03',
			step: 'Receive and enjoy!',
			instruction:
				'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
		},
	];
	return (
		<section className={styles.section}>
			<h3 className={styles.section__title}>How it works</h3>
			<div className={styles.container}>
				<span className={styles.container__circle}></span>
				<span className={styles.container__line}></span>
				<span className={styles.container__circle}></span>
				<span className={styles.container__line}></span>
				<span className={styles.container__circle}></span>
			</div>
			<div className={styles.containerCards}>
				{steps.map(step => (
					<StepCard step={step} key={step.number} />
				))}
			</div>
		</section>
	);
};

const StepCard = ({ step }) => {
	return (
		<div className={styles.card}>
			<p className={styles.card__number}>{step.number}</p>
			<h3 className={styles.card__title}>{step.step}</h3>
			<p className={styles.card__text}>{step.instruction}</p>
		</div>
	);
};

StepCard.propTypes = {
	step: PropTypes.shape({
		number: PropTypes.string.isRequired,
		step: PropTypes.string.isRequired,
		instruction: PropTypes.string.isRequired,
	}),
};
