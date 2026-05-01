// Community Chat
safeExecute(() => {
  const domainItems = document.querySelectorAll('.domain-item');
  const chatTitle = document.getElementById('chat-title');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');
  const chatMessages = document.getElementById('chat-messages');
  
  if (!domainItems.length || !chatTitle || !messageInput || !sendBtn || !chatMessages) {
    console.warn('Chat elements not found, skipping chat initialization');
    return;
  }

  const domainMessages = {
    general: [
      { user: 'Welcome Bot', time: '8:00 AM', content: '👋 Welcome to the General Chat! This is a space for all users to connect, share ideas, and network across all domains. Feel free to introduce yourself!' },
      { user: 'Anita Desai', time: '9:15 AM', content: 'Hello everyone! I\'m Anita, a corporate trainer from Mumbai. Excited to connect with professionals from different fields!' },
      { user: 'Vikram Singh', time: '9:30 AM', content: 'Great to be here! I\'m a software developer looking to learn more about corporate training opportunities.' },
      { user: 'Meera Nair', time: '9:45 AM', content: 'Hi all! HR professional here. Always interested in learning about tech and business trends. Happy to collaborate!' },
      { user: 'Rahul Sharma', time: '10:00 AM', content: 'Hello everyone! Finance background, but passionate about learning new skills. Looking forward to the discussions here.' }
    ],
    law: [
      { user: 'Rajesh Kumar', time: '10:30 AM', content: 'Has anyone attended the recent compliance workshop? Looking for insights on the new regulatory frameworks.' },
      { user: 'Priya Sharma', time: '10:45 AM', content: 'Yes! The session on GDPR compliance was excellent. I can share my notes if you\'re interested.' },
      { user: 'Amit Patel', time: '11:00 AM', content: 'That would be great, Priya. I\'m particularly interested in the data privacy aspects.' }
    ],
    software: [
      { user: 'Dev Team Lead', time: '9:15 AM', content: 'Anyone working with React 18? Need help with the new concurrent features.' },
      { user: 'Senior Dev', time: '9:30 AM', content: 'Yes! I\'ve been using it for a few months. The automatic batching is a game changer.' },
      { user: 'Junior Dev', time: '9:45 AM', content: 'Could you share some resources? I\'m just getting started with React.' }
    ],
    management: [
      { user: 'Project Manager', time: '11:00 AM', content: 'How do you handle scope creep in agile projects?' },
      { user: 'Scrum Master', time: '11:15 AM', content: 'We use a strict change request process with stakeholder approval gates.' },
      { user: 'Team Lead', time: '11:30 AM', content: 'Communication is key. We have daily standups to catch changes early.' }
    ],
    finance: [
      { user: 'Financial Analyst', time: '2:00 PM', content: 'What tools are you using for financial forecasting?' },
      { user: 'CFO', time: '2:15 PM', content: 'We\'ve moved to AI-powered tools. Much better accuracy than traditional models.' },
      { user: 'Accountant', time: '2:30 PM', content: 'Still using Excel here. Would love to hear more about those AI tools.' }
    ],
    hr: [
      { user: 'HR Manager', time: '3:00 PM', content: 'Best practices for remote onboarding?' },
      { user: 'HR Director', time: '3:15 PM', content: 'We created a comprehensive digital onboarding portal with video introductions.' },
      { user: 'Recruiter', time: '3:30 PM', content: 'Virtual coffee breaks have been great for team integration.' }
    ],
    marketing: [
      { user: 'Marketing Lead', time: '4:00 PM', content: 'ROI on LinkedIn vs Twitter for B2B marketing?' },
      { user: 'Digital Marketer', time: '4:15 PM', content: 'LinkedIn has been 3x more effective for our B2B campaigns.' },
      { user: 'Content Strategist', time: '4:30 PM', content: 'Agreed. The professional audience quality is much higher on LinkedIn.' }
    ]
  };

  const domainEmojis = {
    general: '🌐',
    law: '⚖️',
    software: '💻',
    management: '📊',
    finance: '💰',
    hr: '👥',
    marketing: '📢'
  };

  const domainNames = {
    general: 'General Chat',
    law: 'Law',
    software: 'Software Development',
    management: 'Management',
    finance: 'Finance',
    hr: 'Human Resources',
    marketing: 'Marketing'
  };

  function loadMessages(domain) {
    const messages = domainMessages[domain] || [];
    chatMessages.innerHTML = messages.map(msg => `
      <div class="message">
        <div class="message-header">${msg.user} • ${msg.time}</div>
        <div class="message-content">${msg.content}</div>
      </div>
    `).join('');
  }

  domainItems.forEach(item => {
    item.addEventListener('click', () => {
      domainItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      const domain = item.dataset.domain;
      chatTitle.textContent = `${domainEmojis[domain]} ${domainNames[domain]}`;
      loadMessages(domain);
    });
  });

  sendBtn.addEventListener('click', () => {
    const content = messageInput.value.trim();
    if (content) {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      
      const newMessage = document.createElement('div');
      newMessage.className = 'message';
      newMessage.innerHTML = `
        <div class="message-header">You • ${time}</div>
        <div class="message-content">${content}</div>
      `;
      
      chatMessages.appendChild(newMessage);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      messageInput.value = '';
    }
  });

  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });

  // Load initial messages
  loadMessages('general');
});
