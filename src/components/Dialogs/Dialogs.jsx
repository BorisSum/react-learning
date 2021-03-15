import React from 'react';
import style from './Dialogs.module.css';
import Friend from './Friends/Friend';
import Message from './Message/Message';


const Dialogs = (props) => {

    const friendsElements = props.friendsData
        .map( friend => <Friend friendName={friend.name} friendId={friend.id}/>);

    const messagesElements = props.messagesData
        .map( message => <Message message={message.message}/>);

    const onSendMessage = () => {
        props.sendMessage();
    };

    const onUpdateMessageText = (event) => {
        props.updateMessageText(event.target.value);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.friends}>
                <h2>Friends</h2>
                {friendsElements}
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                {messagesElements}
                <div>
                    <div><textarea onChange={ onUpdateMessageText} value={props.messageNewText}></textarea></div>
                    <button onClick={ onSendMessage }>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;