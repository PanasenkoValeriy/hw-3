import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
`;

export const Thead = styled.thead`
  background-color: #578e7e;
  height: 40px;
  color: #fffaec;
`;

export const HeadTr = styled.tr``;

export const HeadTh = styled.th``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  height: 30px;

  &:nth-child(even) {
    background-color: #fffaec;
  }

  &:nth-child(odd) {
    background-color: #f5ecd5;
  }
`;

export const Td = styled.td``;
