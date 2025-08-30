import Spinner from './Spinner'
import styles from './CountryList.module.css'
import Message from './Message';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
    const { cities, isLoading } = useCities()

    if (isLoading) return <Spinner />;

    if (!cities.length) return <Message message='Add your first city by clicking on a city on the map' />

    const countries = Array.from(
        new Map(cities.map(city => [city.country,{country : city.country, emoji : city.emoji}])).values()
    );

    console.log(countries)
    return (
        <ul className={styles.countryList}>
            {countries.map((country) =>
                <CountryItem country={country} key={country.country} />)}
        </ul>
    )
}

export default CountryList
