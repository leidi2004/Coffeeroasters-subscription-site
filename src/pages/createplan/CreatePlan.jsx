import { Footer } from '../../components/common/Footer/Footer';
import { Nav } from '../../components/common/Nav/Nav';
import { Steps } from '../../components/common/StepsCard/Steps';
import { QuestionList } from '../../components/createplan/QuestionCard/QuestionList';

import styles from './CreatePlan.module.scss';
export const CreatePlan = () => {
	return (
		<div>
			<Nav />
			<section className={styles.section}>
				<div className={styles.createPlan}>
					<div className={styles.createPlan__content}>
						<h1 className={styles.createPlan__title}>Create a plan</h1>
						<p className={styles.createPlan__text}>
							Build a subscription plan that best fits your needs. We offer an
							assortment of the best artisan coffees from around the globe
							delivered fresh to your door.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionPadding}>
				<Steps change={true} />
			</section>
			<section>
				<QuestionList/>
			</section>
			<div className="padding">
				<Footer />
			</div>
		</div>
	);
};
