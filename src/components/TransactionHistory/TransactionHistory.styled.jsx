import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 400px;
  margin: 10px auto;

  display: block;

  font-size: 18px;
  font-weight: 700;

  border-collapse: collapse;
  table-layout: fixed;

  border: 4px solid black;
  border-radius: 15px;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.015);
  }
`;

export const TableHead = styled.thead`
  border-bottom: 4px solid black;

  background-color: #b7ffa3;
`;

export const TableHeadRow = styled.tr`
  text-transform: uppercase;
`;

export const TableHeadData = styled.th`
  width: 133.3333px;

  padding: 15px;

  :first-of-type {
    border-top-left-radius: 11px;
  }

  :last-child {
    border-top-right-radius: 11px;
  }

  :not(:last-child) {
    border-right: 4px solid black;
  }
`;

export const TableBody = styled.tbody`
  font-weight: 400;
  text-align: center;
`;

export const TableBodyRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #faff9b;
  }

  :not(:last-child) {
    border-bottom: 4px solid black;
  }
`;

export const TableBodyData = styled.th`
  padding: 5px;

  :first-of-type {
    border-bottom-left-radius: 11px;
  }

  :last-child {
    border-bottom-right-radius: 11px;
  }

  :not(:last-child) {
    border-right: 4px solid black;
  }
`;
