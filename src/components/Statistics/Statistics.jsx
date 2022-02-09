import PropTypes from "prop-types";
import styles from "./statistics.module.css";


const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
        
    <ul className={styles.stat_list}>        
            {stats.map(({ id, label, percentage }) => (
              <li className={styles.item} key={id} style={{ backgroundColor: generateRandomColor()}}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
            </li>
            ))}
        </ul>
  </section>
);

export default Statistics;

Statistics.defaultProps = {
    stats: []
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

const generateRandomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};



