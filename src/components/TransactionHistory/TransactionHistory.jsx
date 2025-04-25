import { HeadTh, HeadTr, Table, Td, Thead, Tr, Tbody } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <HeadTr>
          <HeadTh>Type</HeadTh>
          <HeadTh>Amount</HeadTh>
          <HeadTh>Currency</HeadTh>
        </HeadTr>
      </Thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};