import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      <h2>Pesan untuk Zoni</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.nama ? <strong>{message.nama}:</strong> : <strong>Sok Misterius: </strong>} {message.pesan}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;

