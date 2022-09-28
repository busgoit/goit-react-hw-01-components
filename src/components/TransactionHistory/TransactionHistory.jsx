import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableHeadRow,
  TableHeadData,
  TableBody,
  TableBodyRow,
  TableBodyData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableHeadRow>
          <TableHeadData>Type</TableHeadData>
          <TableHeadData>Amount</TableHeadData>
          <TableHeadData>Currency</TableHeadData>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TableBodyRow key={item.id}>
            <TableBodyData>{item.type}</TableBodyData>
            <TableBodyData>{item.amount}</TableBodyData>
            <TableBodyData>{item.currency}</TableBodyData>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
