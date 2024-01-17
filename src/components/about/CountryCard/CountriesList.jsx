import PropTypes from 'prop-types';
import styles from './CountriesList.module.scss';
import imgAustralia from '../../../assets/img/about/desktop/illustration-australia.svg';
import imgCanada from '../../../assets/img/about/desktop/illustration-canada.svg';
import imgUK from '../../../assets/img/about/desktop/illustration-uk.svg';
import { v4 as randomID } from 'uuid';

export const CountriesList = () => {
	const countries = [
		{
			id: randomID(),
			img: imgUK,
			country: 'United Kingdom',
			address: '68 Asfordby Rd',
			city: 'Alcaston',
			postalCode: 'SY6 1YA',
			phoneNumber: '+44 1241 918425',
		},
		{
			id: randomID(),
			img: imgCanada,
			country: 'Canada',
			address: '1528 Eglinton Avenue',
			city: 'Toronto',
			province: 'Ontario',
			postalCode: 'M4P1A6',
			phoneNumber: '+1 416 485 2997',
		},
		{
			id: randomID(),
			img: imgAustralia,
			country: 'Australia',
			address: '36 Swanston Street',
			city: 'Kewell',
			province: 'Victoria',
			phoneNumber: '+61 4 9928 3629',
		},
	];
	return (
		<div className={styles.container}>
			<h4 className={styles.container__title}>Our headquarters</h4>

			<div className={styles.container__cardList}>
				{countries.map(country => (
					<CountryCard country={country} key={country.id} />
				))}
			</div>
		</div>
	);
};

export const CountryCard = ({ country }) => {
	return (
		<div className={styles.card}>
			<img src={country.img} alt='country image' className={styles.card__img} />
			<div className={styles.card__content}>
				<p className={styles.card__title}>{country.country}</p>
				<p className={styles.card__text}>{country.address}</p>
				<p className={styles.card__text}>
					{country.city + " "}
				</p>
                <p>
                    {country.country === "United Kingdom" && country.postalCode}
                </p>
				<p className={styles.card__text}>
					{country.province && country.province + " "}
                    {country.country === "Canada" && country.postalCode}
				</p>
				<p className={styles.card__text}>{country.phoneNumber}</p>
			</div>
		</div>
	);
};

CountryCard.propTypes = {
	country: PropTypes.shape({
		img: PropTypes.string.isRequired,
		country: PropTypes.string,
		address: PropTypes.string,
		city: PropTypes.string,
		province: PropTypes.string,
		postalCode: PropTypes.string,
		phoneNumber: PropTypes.string,
	}),
};
