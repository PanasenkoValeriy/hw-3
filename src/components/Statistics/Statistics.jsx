import { Item, Label, List, Section, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return '#' + randomColor;
  }

  return (
    <Section>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{backgroundColor: getRandomColor()}}>
              <Label>{label}</Label>
              <Label>{percentage}%</Label>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};