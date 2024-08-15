
import clsx from "clsx";
import css from './FriendList.module.css';


// const FriendListItem = ({ avatar, name, isOnline = false}) => {
//     return (
//         <div>        
//  <img src={avatar} alt="Avatar" width="48" />
//     <p>{name}</p>
//     <p>Friend status</p>
//             </div>
//     );
// }



const FriendListItem = ({ avatar, name, isOnline = false }) => {
    return (
        <>
            <div className={css.boxItem}>
                <img src={avatar} alt="Avatar" width="48" />
                <p>{name}</p>
                <p className={clsx(css.status, {
                    [css.online]: isOnline === true,
                    [css.offline]: isOnline === false
                })}>
                    {isOnline === true ? "Online" : "Offline"}</p>
            </div>

        </>

    );
}

export default FriendListItem;