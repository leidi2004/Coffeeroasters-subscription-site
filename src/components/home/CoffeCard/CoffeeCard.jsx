import { PropTypes } from 'prop-types';
import styles from './CoffeeCard.module.scss'

export const CoffeeCard = ({ coffee }) => {
	return (
		<div className={styles.card}>
			<img src={coffee.img} alt='coffee image' className={styles.card__img} />
			<div>
			<h3 className={styles.card__title}>{coffee.title}</h3>
			<p className={styles.card__description}>{coffee.description}</p>
			</div>
		</div>
	);
};

CoffeeCard.propTypes = {
	coffee: PropTypes.shape({
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
};
