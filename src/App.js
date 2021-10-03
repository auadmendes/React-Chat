import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
 

    return (
        <ChatEngine 
            height='100vh'
            projectID='33d9407a-ce1c-4c52-b5b3-4311c2465240'
            userName={username}
            userSecret={password}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;