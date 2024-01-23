import { PropTypes } from 'prop-types';
import { v4 as randomId } from 'uuid';
import styles from './QuestionList.module.scss';
import { useState } from 'react';

export const QuestionList = () => {
	const questions = [
		{
			id: randomId(),
			question: 'How do you drink your coffee?',
			answers: [
				{
					id: randomId(),
					answer: 'Capsule',
					description: 'Compatible with Nespresso system and similar brewers',
				},
				{
					id: randomId(),
					answer: 'Filter',
					description:
						'For pour over or drip methods like Aeropress, Chemex, and V60',
				},
				{
					id: randomId(),
					answer: 'Espresso',
					description:
						'Dense and finely ground beans for an intense, flavorful experience',
				},
			],
		},
		{
			id: randomId(),
			question: 'What type of coffee?',
			answers: [
				{
					id: randomId(),
					answer: 'Single Origin',
					description:
						'Distinct, high quality coffee from a specific family- owned farm',
				},
				{
					id: randomId(),
					answer: 'Decaf',
					description:
						'Just like regular coffee, except the caffeine has been removed',
				},
				{
					id: randomId(),
					answer: 'Blended',
					description:
						'Combination of two or three dark roasted beans of organic coffees',
				},
			],
		},
		{
			id: randomId(),
			question: 'How much would you like?',
			answers: [
				{
					id: randomId(),
					answer: '250g',
					description:
						'Perfect for the solo drinker. Yields about 12 delicious cups.',
				},
				{
					id: randomId(),
					answer: '500g',
					description:
						'Perfect option for a couple. Yields about 40 delectable cups.',
				},
				{
					id: randomId(),
					answer: '100g',
					description:
						'Perfect for offices and events. Yields about 90 delightful cups.',
				},
			],
		},
		{
			id: randomId(),
			question: 'What us to grind them?',
			answers: [
				{
					id: randomId(),
					answer: 'Wholebean',
					description: 'Best choice if you cherish the full sensory experience',
				},
				{
					id: randomId(),
					answer: 'Filter',
					description: 'For pour over or drip methods like Aeropress and V60',
				},
				{
					id: randomId(),
					answer: 'Cafetiere',
					description:
						'Course ground beans specially suited for french press coffee',
				},
			],
		},
		{
			id: randomId(),
			question: 'How often should we deliver?',
			answers: [
				{
					id: randomId(),
					answer: 'Every Week',
					description:
						'$14.00 per shipment. Includes free first- class shipping.',
				},
				{
					id: randomId(),
					answer: 'Every 2 Weeks',
					description: '$17.25 per shipment. Includes free priority shipping.',
				},
				{
					id: randomId(),
					answer: 'Every Month',
					description: '$22.50 per shipment. Includes free priority shipping.',
				},
			],
		},
	];

	return (
		<article className={styles.article}>
			{questions.map(question => (
				<QuestionCard question={question} key={question.id} />
			))}
		</article>
	);
};

const QuestionCard = ({ question }) => {
	const [answers, setAnswers] = useState(false);
	return (
		<section className={styles.questionCard}>
			<div className={styles.questionCard__container}>
				<p className={styles.questionCard__question}>{question.question}</p>
				<button className={styles.questionCard__button}>
					{!answers ? 
						<svg
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='chevron-up'
						className='svg-inline--fa fa-chevron-up fa-w-14'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
					>
						<path
							fill='#0E8784'
							d='M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z'
						></path>
					</svg>
					 : 
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='chevron-up'
							className='svg-inline--fa fa-chevron-up fa-w-14'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path
								fill='#0E8784'
								d='M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z'
							></path>
						</svg>
					}
				</button>
			</div>
		</section>
	);
};

QuestionCard.propTypes = {
	question: PropTypes.shape({
		question: PropTypes.string.required,
		answers: PropTypes.arrayOf(
			PropTypes.shape({
				answers: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
			})
		),
	}),
};
