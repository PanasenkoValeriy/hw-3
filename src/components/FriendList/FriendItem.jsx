import { Item, Name, Status, Image } from "./FriendListStyles";

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};