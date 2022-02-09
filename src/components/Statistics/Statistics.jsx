import PropTypes from "prop-types";
import "./statistics.css";


const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        
        <ul className="stat-list">        
            {stats.map(({ id, label, percentage }) => (
            <li className="item" key={id} style={{ backgroundColor: generateRandomColor()}}>
            <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
            </li>
            ))}
        </ul>
  </section>
);

export default Statistics;

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



