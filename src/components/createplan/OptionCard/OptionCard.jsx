import { PropTypes } from 'prop-types';
import styles from './OptionCard.module.scss';
import { useState } from 'react';

export const OptionCard = ({ answer }) => {
    const [selected, setSelected] = useState(false);

    const cardClass = selected ? styles.card__active : styles.card; 

	return (
		<div className={cardClass} onClick={(selected)=>{selected ? setSelected(false) : setSelected(true)}}>
			<h4 className={styles.card__title}>{answer.answer}</h4>
			<p className={styles.card__description}>{answer.description}</p>
		</div>
	);
};

OptionCard.propTypes = {
	answer: PropTypes.shape({
		answer: PropTypes.string,
		description: PropTypes.string,
	}),
};
