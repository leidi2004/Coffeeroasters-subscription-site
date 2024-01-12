import styles from './ReasonCard.module.scss';
import { PropTypes } from 'prop-types';

export const ReasonCard = ({ reason }) => {
	return (
		<div className={styles.card}>
			<img src={reason.icon} alt='reason icon' className={styles.card__img} />
			<h3 className={styles.card__title}>{reason.title}</h3>
			<p className={styles.card__description}>{reason.description}</p>
		</div>
	);
};

ReasonCard.propTypes = {
	reason: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
};
