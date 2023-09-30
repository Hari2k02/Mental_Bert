import React from 'react'
import gptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
import sendBtn from '../assets/send.svg'
import userIcon from '../assets/user-icon.png'
import gptImgLogo from '../assets/chatgptLogo.svg'
import './Chatbot.css'
const Chatbot = () => {
    return (
        <div className="chatbot">
            <div className="sideBar">
                <div className="upperSide">
                    <div className="upperSideTop flex "><img src={gptLogo} alt="Logo" className='logo'/><span className="brand">ChatGpt</span></div>
                    <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
                        <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?</button>
                        <button className="query"><img src={msgIcon} alt="Query" />How to use an api</button>
                    
                </div>

                <div className="lowerSide">
                    <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
                    <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Home</div>
                </div>
            </div>

            <div className="main">
                <div className="chats">
                    <div className="chat">
                        <img src={userIcon} className = 'chatImg' alt="" /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae laborum tempore sed quos porro, ea repellat reiciendis deleniti molestiae, id amet quis magni aperiam! Doloremque dolore, porro labore maiores minus sit. Molestiae eum ipsa nostrum dolorum necessitatibus ipsum perferendis?</p>
                    </div>
                    <div className="chat bot">
                        <img className = 'chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium inventore veritatis labore ex doloremque neque, nesciunt voluptatum commodi deserunt vero assumenda sit excepturi! Libero neque esse omnis velit, sunt vel a impedit laborum mollitia nihil beatae porro sit optio dolorem recusandae dignissimos, atque reiciendis repellat ut excepturi, fugiat doloremque. Molestiae nostrum assumenda sunt eveniet dolor veritatis, incidunt quis cupiditate repellat deleniti. Expedita, placeat aliquid magnam, consectetur optio nostrum tenetur in officia, corporis non error nemo itaque vel maiores fugit impedit ut alias eligendi voluptate odit ea labore ad. Commodi fugit voluptatum aut nam architecto rem tenetur, labore dolore magni.</p>
                    </div>
                </div>
                <div className="chatFooter">
                <div className="inp">
                    <input placeholder='Send a message'/><button className='send'><img src={sendBtn} alt="" className="" /></button>
                </div>
            </div>
            </div>

            
        </div>
    )
}

export default Chatbot