import css from "./TransactionHistory.module.css";

import { TransactionItem } from "../TransactionItem/TransactionItem";

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ type, amount, currency, id }) => (
          <TransactionItem
            type={type}
            amount={amount}
            currency={currency}
            key={id}
          />
        ))}
      </tbody>
    </table>
  );
};
