'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const { messages, sendMessage, status } = useChat();
    const chatEndRef = useRef<HTMLDivElement>(null);

    const isLoading = status === 'submitted' || status === 'streaming';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            sendMessage({ text: input });
            setInput('');
        }
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    interface MessagePart {
        type: string;
        text?: string;
    }

    interface Message {
        content?: string;
        parts?: MessagePart[];
        id: string;
        role: 'user' | 'assistant' | 'system' | 'data';
    }

    const getMessageText = (msg: unknown) => {
        const m = msg as Message;
        if (!m.parts) return m.content || '';
        return m.parts
            .filter((part: MessagePart) => part.type === 'text')
            .map((part: MessagePart) => part.text || '')
            .join('');
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9, rotate: 2 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="mb-6 w-[380px] md:w-[420px] h-[600px] bg-[#02050a]/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 bg-gradient-to-r from-[#0a0f1a] to-[#162033] text-white flex justify-between items-center border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c8a96e] to-[#8a6d3b] flex items-center justify-center shadow-lg">
                                        <Bot size={22} className="text-[#02050a]" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#0a0f1a] rounded-full animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base tracking-tight text-white/95">Asistente Lex-360</h3>
                                    <p className="text-[11px] text-[#c8a96e] font-medium uppercase tracking-[0.1em]">Legal Intelligence</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/10 p-2 rounded-xl transition-all hover:rotate-90"
                            >
                                <X size={22} className="text-white/60" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
                            {messages.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-10 space-y-6"
                                >
                                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <MessageCircle className="text-[#c8a96e]" size={32} />
                                    </div>
                                    <p className="text-sm text-white/60 px-10 leading-relaxed italic">
                                        &quot;Bienvenido a la firma. Soy su asistente de triaje legal especializado. ¿En qué puedo orientarle hoy?&quot;
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center px-4">
                                        {[
                                            { label: 'Duda Fiscal', icon: <Bot size={12} /> },
                                            { label: 'Derecho Amparo', icon: <Bot size={12} /> },
                                            { label: 'Cita Urgente', icon: <Calendar size={12} /> }
                                        ].map((suggestion) => (
                                            <button
                                                key={suggestion.label}
                                                onClick={() => setInput(suggestion.label)}
                                                className="text-[11px] bg-white/5 border border-white/10 hover:border-[#c8a96e]/50 hover:bg-white/10 px-4 py-2 rounded-xl transition-all text-white/80 flex items-center gap-2"
                                            >
                                                {suggestion.icon}
                                                {suggestion.label}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {messages.map((m, idx) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-3 max-w-[88%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-[#c8a96e]/20 text-[#c8a96e]' : 'bg-[#c8a96e] text-[#02050a] shadow-lg'}`}>
                                            {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                        </div>
                                        <div className={`p-4 rounded-2xl text-[13.5px] leading-relaxed ${m.role === 'user'
                                            ? 'bg-gradient-to-br from-[#c8a96e] to-[#a68a56] text-[#02050a] font-medium rounded-tr-none shadow-[0_10px_20px_rgba(200,169,110,0.2)]'
                                            : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none backdrop-blur-md'
                                            }`}>
                                            {getMessageText(m)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 bg-[#c8a96e] rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-[#c8a96e] rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-2 h-2 bg-[#c8a96e] rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-5 bg-white/5 border-t border-white/5 backdrop-blur-md">
                            <div className="relative flex items-center gap-3">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Su consulta legal..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:ring-2 focus:ring-[#c8a96e]/50 focus:border-[#c8a96e]/50 outline-none transition-all placeholder:text-white/20"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="p-3.5 bg-[#c8a96e] hover:bg-[#d4b982] text-[#02050a] rounded-2xl disabled:opacity-30 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#c8a96e]/20"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-[0.2em] font-medium">
                                Lex-360 Confidential Protection
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gradient-to-br from-[#c8a96e] to-[#8a6d3b] text-[#02050a] rounded-2xl shadow-[0_10px_30px_rgba(200,169,110,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative z-[10000]"
            >
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500" />
                {isOpen ? <X size={32} /> : <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />}
            </button>
        </div>
    );
}
