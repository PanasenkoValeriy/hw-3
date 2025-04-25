import { Item, Name, Status, Image } from "./FriendList.styled";

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status typeName={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};