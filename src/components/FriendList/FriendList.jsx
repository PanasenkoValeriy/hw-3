import { FriendItem } from "./FriendItem"
import { List } from "./FriendList.styled"


export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
                )
            })}
        </List>
    )
}