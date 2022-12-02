import React, { useEffect, useState } from "react";
import "./App.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";
import Api from "./Api";

export default () => {

  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = ()=>{
    setShowNewChat(true)
  }

  useEffect(()=>{
    if(user !== null){
        let unsub =  Api.onChatList(user.id, setChatList);
        return unsub;
    }
  },[user])

  const handleLoginData = async (u) =>{
      let newUser= {
         id: u.uid,
         name: u.displayName,
         avatar: u.photoURL
      }
       await Api.addUser(newUser)
      setUser(newUser)
     
  }
  // {id:'bo0mtQXKpZbycIaxyvC8OMbERfL2', name:'Abílio Neto' , avatar:"https://graph.facebook.com/3398301133740408/picture"}
  if(user===null){
    return(<Login onReceive={handleLoginData}/>)
  }
  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          user={user}
          chatList={chatList}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>

          <img className="header--avatar" src={user.avatar} alt=""></img>

          <div className="header--button">

            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>

          </div>

        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="snall" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou comecar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId ? true : false}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>

      </div>

      <div className="contentarea">
        {console.log(activeChat)}
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user} data={activeChat}/>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }

      </div>
    </div>
  )

}