import styled from 'styled-components';

export const Section = styled.section`
  margin: 50px auto;
  padding: 20px;
  width: 500px;
  text-align: center;
  background-color: #ddd;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Title = styled.h2`
  font-size: 22px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Item = styled.li`
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 18px;
`;
