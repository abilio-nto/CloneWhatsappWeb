import React, { useState } from "react";
import "./NewChat.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default ({ user,chatList,show,setShow}) => {
    const [list, setList] = useState([
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Abílio neto' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Abílio neto' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Abílio neto' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Abílio neto' },
    ])

    const handleClose =()=>{
        setShow(false)
    }
    return (
        <div className="newChat" style={{left: show ? 0 : -415}} >
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{ color: '#FFFFFF' }} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => {
                    return (
                        <div className="newChat--item" key={key}>
                            <img className="newChat--itemavatar" src={item.avatar} />
                            <div className="newChat--itemname">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}