import React from "react";
import "./MessageItem.css"

export default ({data,user})=>{

    return(
        <div className="messageLine"
        style={{justifyContent: user[0].id == data.author ? 'flex-end' : 'flex-start'
        }}>
             <div className="messageItem" style={{backgroundColor:user[0].id == data.author ? '#DCF8C6' : '#fff'}}>
                 <img className="messageItem--avatar" src=""/>
                 <div className="messageText">{data.Body}</div>
                 <div className="messageDate">{}</div>
             </div>
        </div>

        // <div className={`chatListitem ${ active ? 'active' : ''}`}
        //  onClick={onClick}
        // >
        //      <img className="chatListItem--avatar" src={data.image} alt=""></img>
        //     <div className="chatListItem--lines">
        //        <div className="chatListItem--line">
        //            <div className="chatListitem--name">{data.title}</div>
        //            <div className="chatListitem--date">19:00</div>
        //        </div>
        //        <div className="chatListItem--line">
        //            <div className="chatListItem--lastMsg">
        //               <p>Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bemvv Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem?</p>
        //            </div>
        //         </div>
        //     </div>
        // </div>
    )
}