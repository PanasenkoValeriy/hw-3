import styled from 'styled-components';

export const List = styled.ul`
  padding: 15px;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ddd;
  border-radius: 15px;
`;

export const Item = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
  gap: 10px;
  background-color: #fff;
`;

export const Status = styled.span.withConfig({
  shouldForwardProp: prop => prop !== 'isOnline',
})`
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  width: 40px;
`;

export const Name = styled.p``;
