// import FriendListItem from "../FriendListItem/FriendListItem";
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (<ul className={css.box}>
        {friends.map((friend) => {
            return (<FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />);
        })
        }   
    </ul>);

}
export default FriendList;


