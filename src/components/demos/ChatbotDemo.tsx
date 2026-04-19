'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

const CONVERSATION: Array<{ role: 'user' | 'bot'; text: string; delay: number }> = [
  { role: 'user', text: 'Do you accept new patients?', delay: 600 },
  { role: 'bot', text: "Yes! We're currently accepting new patients. We have openings this week — would you like to schedule a consultation?", delay: 1400 },
  { role: 'user', text: 'What are your hours?', delay: 3200 },
  { role: 'bot', text: "We're open Mon–Fri 8am–5pm and Saturday 9am–2pm. Ready to book your first visit?", delay: 4600 },
  { role: 'user', text: 'Yes, book me for Saturday morning', delay: 6600 },
  { role: 'bot', text: '✅ Appointment confirmed! Saturday at 10am. You\'ll receive a confirmation text shortly.', delay: 8000 },
];

export function ChatbotDemo({ active }: { active: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingBot, setTypingBot] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!active) {
      setMessages([]);
      setTypingBot(false);
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      return;
    }

    let msgId = 0;

    CONVERSATION.forEach((turn) => {
      if (turn.role === 'user') {
        const t = setTimeout(() => {
          const id = msgId++;
          setMessages((prev) => [...prev, { id, role: 'user', text: turn.text }]);
        }, turn.delay);
        timersRef.current.push(t);
      } else {
        // Show typing indicator before message
        const t1 = setTimeout(() => setTypingBot(true), turn.delay - 600);
        const t2 = setTimeout(() => {
          const id = msgId++;
          setTypingBot(false);
          setMessages((prev) => [...prev, { id, role: 'bot', text: turn.text }]);
        }, turn.delay);
        timersRef.current.push(t1, t2);
      }
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [active]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typingBot]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Chat header */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: 'rgba(0,0,0,0.4)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '10px 10px 0 0',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0,
        }}
      >
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2887CC, #5DC4E8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14,
          }}>
            AI
          </div>
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: 8, height: 8, borderRadius: '50%',
            background: '#34D399', border: '2px solid #06080C',
          }} />
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#DEE0E7' }}>BDC AI Assistant</div>
          <div style={{ fontSize: 9, color: '#34D399', fontWeight: 600 }}>● Online · Replies instantly</div>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>24/7</div>
      </motion.div>

      {/* Messages area */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          scrollbarWidth: 'none',
        }}
      >
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.1 }}
          style={{ textAlign: 'center', marginBottom: 4 }}
        >
          <span style={{
            fontSize: 9, color: 'rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.03)',
            padding: '3px 10px', borderRadius: 20,
          }}>
            Today · Canyon Lake Family Dentistry
          </span>
        </motion.div>

        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div style={{
                maxWidth: '78%',
                padding: '8px 12px',
                borderRadius: msg.role === 'user'
                  ? '12px 12px 3px 12px'
                  : '12px 12px 12px 3px',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, #2887CC, #1a6aa8)'
                  : 'rgba(255,255,255,0.05)',
                border: msg.role === 'bot' ? '1px solid rgba(255,255,255,0.07)' : 'none',
                fontSize: 10,
                lineHeight: 1.6,
                color: msg.role === 'user' ? '#fff' : '#DEE0E7',
                boxShadow: msg.role === 'user' ? '0 2px 12px rgba(40,135,204,0.2)' : 'none',
              }}>
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {typingBot && (
            <motion.div
              key="typing"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <div style={{
                padding: '8px 14px',
                borderRadius: '12px 12px 12px 3px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                    style={{ width: 4, height: 4, borderRadius: '50%', background: '#5DC4E8' }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input area */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '10px 12px',
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <div style={{
          flex: 1, height: 30,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20,
          display: 'flex', alignItems: 'center',
          padding: '0 12px',
        }}>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>Ask anything...</span>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'linear-gradient(135deg, #2887CC, #5DC4E8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: '#fff', fontWeight: 700,
        }}>
          ↑
        </div>
      </motion.div>
    </div>
  );
}
