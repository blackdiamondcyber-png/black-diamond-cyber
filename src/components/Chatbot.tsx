'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_REPLIES = [
  { label: 'Website Pricing', value: 'What are your website pricing tiers?' },
  { label: 'Growth Systems', value: 'Tell me about your growth systems' },
  { label: 'Free Audit', value: 'I want a free website audit' },
  { label: 'Book a Call', value: 'I want to book a free strategy call' },
];

const GREETING =
  "Hey there! I'm the Black Diamond Cyber assistant. Whether you need a premium website, a full growth system, or just want to know what we can do for your business — I'm here to help. What can I do for you?";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isTyping) return;

      setShowBadge(false);
      const userMsg: Message = { role: 'user', content: text.trim() };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);

      try {
        const res = await fetch('/api/chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text.trim(),
            conversationId,
          }),
        });

        if (!res.ok) throw new Error('Failed to get response');

        const data: { reply: string; conversationId: string } = await res.json();
        setConversationId(data.conversationId);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              "Sorry, I'm having trouble connecting right now. You can reach us directly at blackdiamondcyber@gmail.com or call for a free strategy session.",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [conversationId, isTyping],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (value: string) => {
    sendMessage(value);
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    setShowBadge(false);
  };

  // Show quick replies only at conversation start
  const showQuickReplies = messages.length <= 1 && !isTyping;

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 88,
            right: 20,
            width: 380,
            maxWidth: 'calc(100vw - 40px)',
            height: 560,
            maxHeight: 'calc(100dvh - 108px)',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg1, #0C0F16)',
            border: '1px solid var(--hr, rgba(255,255,255,0.04))',
            borderRadius: 16,
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(40, 135, 204, 0.08)',
            animation: 'chatSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'hidden',
          }}
          data-chatbot-widget=""
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, rgba(40, 135, 204, 0.12) 0%, rgba(93, 196, 232, 0.06) 100%)',
              borderBottom: '1px solid var(--hr, rgba(255,255,255,0.04))',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
                <line x1="10" y1="22" x2="14" y2="22" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--text, #DEE0E7)',
                  lineHeight: 1.2,
                }}
              >
                Black Diamond Cyber
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--green, #34D399)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  marginTop: 2,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--green, #34D399)',
                    display: 'inline-block',
                  }}
                />
                Online now
              </div>
            </div>
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              style={{
                background: 'none',
                border: '1px solid var(--hr, rgba(255,255,255,0.04))',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--t2, #7E8396)',
                fontSize: 16,
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan, #5DC4E8)';
                e.currentTarget.style.color = 'var(--cyan, #5DC4E8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--hr, rgba(255,255,255,0.04))';
                e.currentTarget.style.color = 'var(--t2, #7E8396)';
              }}
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatBodyRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 16px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  animation: i === messages.length - 1 ? 'chatFadeIn 0.3s ease' : undefined,
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius:
                      msg.role === 'user'
                        ? '14px 14px 4px 14px'
                        : '14px 14px 14px 4px',
                    background:
                      msg.role === 'user'
                        ? 'var(--blue, #2887CC)'
                        : 'var(--bg2, #12151E)',
                    color:
                      msg.role === 'user'
                        ? '#fff'
                        : 'var(--text, #DEE0E7)',
                    fontSize: 13,
                    lineHeight: 1.6,
                    border:
                      msg.role === 'assistant'
                        ? '1px solid var(--hr, rgba(255,255,255,0.04))'
                        : 'none',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '12px 18px',
                    borderRadius: '14px 14px 14px 4px',
                    background: 'var(--bg2, #12151E)',
                    border: '1px solid var(--hr, rgba(255,255,255,0.04))',
                    display: 'flex',
                    gap: 4,
                    alignItems: 'center',
                  }}
                >
                  <span style={{ ...dotStyle, animationDelay: '0ms' }} />
                  <span style={{ ...dotStyle, animationDelay: '150ms' }} />
                  <span style={{ ...dotStyle, animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {showQuickReplies && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginTop: 4,
                }}
              >
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleQuickReply(qr.value)}
                    style={{
                      padding: '8px 14px',
                      background: 'transparent',
                      border: '1px solid rgba(40, 135, 204, 0.3)',
                      borderRadius: 20,
                      color: 'var(--cyan, #5DC4E8)',
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(40, 135, 204, 0.1)';
                      e.currentTarget.style.borderColor = 'var(--cyan, #5DC4E8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(40, 135, 204, 0.3)';
                    }}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--hr, rgba(255,255,255,0.04))',
              display: 'flex',
              gap: 8,
              flexShrink: 0,
              background: 'var(--bg1, #0C0F16)',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isTyping}
              style={{
                flex: 1,
                padding: '10px 14px',
                background: 'var(--bg2, #12151E)',
                border: '1px solid var(--hr, rgba(255,255,255,0.04))',
                borderRadius: 10,
                color: 'var(--text, #DEE0E7)',
                fontSize: 13,
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(40, 135, 204, 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--hr, rgba(255,255,255,0.04))';
              }}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: 'none',
                background:
                  isTyping || !input.trim()
                    ? 'var(--t3, #474C5E)'
                    : 'var(--blue, #2887CC)',
                color: '#fff',
                cursor:
                  isTyping || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Bubble */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: 'none',
          background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
          color: '#fff',
          cursor: 'pointer',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(40, 135, 204, 0.4), 0 0 0 0 rgba(40, 135, 204, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: showBadge ? 'chatPulse 2s ease-in-out infinite' : undefined,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 32px rgba(40, 135, 204, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(40, 135, 204, 0.4)';
        }}
      >
        {isOpen ? (
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}

        {/* Notification Badge */}
        {showBadge && !isOpen && (
          <span
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: 'var(--green, #34D399)',
              color: '#06080C',
              fontSize: 10,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--bg, #06080C)',
            }}
          >
            1
          </span>
        )}
      </button>

      {/* Mobile Full-Screen Override + Animations */}
      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(40, 135, 204, 0.4), 0 0 0 0 rgba(40, 135, 204, 0.3); }
          50% { box-shadow: 0 4px 24px rgba(40, 135, 204, 0.4), 0 0 0 8px rgba(40, 135, 204, 0); }
        }
        @keyframes chatDotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        @media (max-width: 640px) {
          [data-chatbot-widget] {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            max-width: 100vw !important;
            height: 100dvh !important;
            max-height: 100dvh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

const dotStyle: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: 'var(--t2, #7E8396)',
  animation: 'chatDotBounce 1.2s ease-in-out infinite',
};
