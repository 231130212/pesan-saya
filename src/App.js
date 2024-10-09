import React, { useState } from 'react';
import Header from './Header';
import FormPesan from './FormPesan';
import MessageList from './MessageList';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handlePesanSubmit = (message) => {
    setMessages([message, ...messages]);
  };

  return (
    <div>
      <Header />
      <FormPesan onSubmit={handlePesanSubmit} />
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
