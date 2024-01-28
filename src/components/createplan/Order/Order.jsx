import styles from './Order.module.scss';
export const Order = () => {
	const order = {
		coffee: 'Espresso',
		type: 'blended',
		amount: '500g',
		grind: 'filter',
		plan: 'Every week',
	};
	return (
		<section className={styles.section}>
			<div className={styles.card}>
				<h3 className={styles.card__title}>Order Summary</h3>
				<p className={styles.card__text}>
					<q>
						I drink coffee as{' '}
						<span className={styles.card__span}>{order.coffee}</span>, with a{' '}
						<span className={styles.card__span}>{order.type}</span> type of
						bean. <span className={styles.card__span}>{order.amount}</span>{' '}
						ground ala <span className={styles.card__span}>{order.grind}</span>,
						sent to me <span className={styles.card__span}>{order.plan}</span>.
					</q>
				</p>
			</div>
			<button className={styles.section__button}>Create Plan!</button>
		</section>
	);
};
