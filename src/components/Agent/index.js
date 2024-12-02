import {Component} from 'react'
import Header from "../Header"
import Sidebar from '../Sidebar'
import Users from '../Users'
import Messenger from '../Messenger'
import UserHannibal from '../UserHannibal'
import ConversationChatContainer from '../ConversationChatContainer'

import './index.css'

class Agent extends Component{
render(){
    return(
        <div className='agent-container'>
            <div className='agent-sidebar-container'> <Sidebar/>
            </div>
            <div className='agent-header-container'>
                <div><Header />
                <Users/></div>
            <div className='agent-chat-container'>
                <UserHannibal />
                <ConversationChatContainer/>
                <Messenger/>
            </div>
            </div>
        </div>
    )
}
}

export default Agent