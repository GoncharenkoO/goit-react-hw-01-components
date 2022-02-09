import styles from "./transactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
    const element = items.map(({ id, type, amount, currency }) => 
                    <tr className={styles.itemsBody} key={id}>
                        <td className={styles.itemsBodyEl}>{type}</td>
                        <td className={styles.itemsBodyEl}>{amount}</td>
                        <td className={styles.itemsBodyEl}>{currency}</td>
                    </tr>
                    )
    return (
        <div>
            <table className={styles.transaction_history}>
                <thead className = {styles.thead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody className={styles.tbody}>
                    {element}
                </tbody>
            </table>
       </div>     
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};