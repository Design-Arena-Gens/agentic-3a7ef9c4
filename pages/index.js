import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'agent', text: 'Hello! I\'m Sourick, your personal assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const responses = [
        "That's a great question! Let me help you with that.",
        "I understand what you're looking for. Here's what I think...",
        "Interesting! I'd be happy to assist you with that.",
        "Let me process that for a moment. Based on what you've shared...",
        "Thanks for reaching out! Here's my take on this...",
        "I appreciate you asking. Let me provide some insight on that.",
      ];
      const agentMessage = {
        role: 'agent',
        text: responses[Math.floor(Math.random() * responses.length)]
      };
      setMessages(prev => [...prev, agentMessage]);
    }, 1000);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.avatar}>S</div>
        <div>
          <h1 style={styles.name}>Sourick</h1>
          <p style={styles.status}>🟢 Online - Human Agent</p>
        </div>
      </div>

      <div style={styles.chatContainer}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              ...(msg.role === 'user' ? styles.userMessage : styles.agentMessage)
            }}
          >
            <div style={styles.messageContent}>
              <strong>{msg.role === 'user' ? 'You' : 'Sourick'}</strong>
              <p style={styles.messageText}>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#4A90E2',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  name: {
    margin: '0',
    fontSize: '24px',
    color: '#333',
  },
  status: {
    margin: '5px 0 0 0',
    fontSize: '14px',
    color: '#666',
  },
  chatContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  message: {
    marginBottom: '15px',
    padding: '12px 16px',
    borderRadius: '8px',
  },
  userMessage: {
    backgroundColor: '#E3F2FD',
    marginLeft: '20%',
  },
  agentMessage: {
    backgroundColor: '#F5F5F5',
    marginRight: '20%',
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  messageText: {
    margin: '0',
    lineHeight: '1.5',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '12px 32px',
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};
