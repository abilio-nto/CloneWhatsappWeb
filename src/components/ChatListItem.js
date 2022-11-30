import React from "react";
import "./ChatListItem.css"

export default ()=>{
    return(
        <div className="chatListitem">
             <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
            <div className="chatListItem--lines">
               <div className="chatListItem--line">
                   <div className="chatListitem--name">Abilio neto</div>
                   <div className="chatListitem--date">19:00</div>
               </div>
               <div className="chatListItem--line">
                   <div className="chatListItem--lastMsg">
                      <p>Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bemvv Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem Olá, tudo bem?</p>
                   </div>
                </div>
            </div>
        </div>
    )
}