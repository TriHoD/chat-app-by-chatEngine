import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';

const projectID = "c79eb013-a985-4f3d-b6c4-e5cce5022bdf";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
  <ChatEngine 
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
  />
  );
}

export default App;
