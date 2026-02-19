'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Calendar, Scale, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [userData, setUserData] = useState({ name: '', contact: '', category: '', caseDescription: '', step: 'initial' as 'initial' | 'name' | 'contact' | 'case' | 'completed' });
    const { messages, sendMessage, status, setMessages } = useChat();
    const chatEndRef = useRef<HTMLDivElement>(null);

    const isLoading = status === 'submitted' || status === 'streaming';

    const handleStepSubmit = (val: string) => {
        if (!val.trim()) return;

        if (userData.step === 'name') {
            setUserData(prev => ({ ...prev, name: val, step: 'contact' }));
        } else if (userData.step === 'contact') {
            setUserData(prev => ({ ...prev, contact: val, step: 'case' }));
        } else if (userData.step === 'case') {
            setUserData(prev => ({ ...prev, caseDescription: val, step: 'completed' }));
            sendMessage({
                text: `ESTRATEGIA INICIAL - Datos Capturados:
Nombre: ${userData.name}
Contacto: ${userData.contact}
Materia: ${userData.category}
Descripción: ${val}`
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            if (userData.step !== 'completed') {
                handleStepSubmit(input);
                setInput('');
            } else {
                sendMessage({ text: input });
                setInput('');
            }
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

    const steps = [
        { id: 'initial', label: 'Inicio' },
        { id: 'name', label: 'Nombre' },
        { id: 'contact', label: 'Contacto' },
        { id: 'case', label: 'Caso' }
    ];

    const currentStepIndex = steps.findIndex(s => s.id === (userData.step === 'completed' ? 'case' : userData.step));

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9, rotate: 2 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="mb-6 w-[380px] md:w-[420px] h-[650px] bg-[#02050a]/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col"
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
                                    <h3 className="font-bold text-base tracking-tight text-white/95">Triage Lex-360</h3>
                                    <p className="text-[11px] text-[#c8a96e] font-medium uppercase tracking-[0.1em]">Estrategia Legal</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/10 p-2 rounded-xl transition-all hover:rotate-90"
                            >
                                <X size={22} className="text-white/60" />
                            </button>
                        </div>

                        {/* Step Indicator */}
                        {userData.step !== 'completed' && (
                            <div className="flex px-8 py-4 gap-2 border-b border-white/5 bg-white/[0.02]">
                                {steps.map((s, i) => (
                                    <div
                                        key={s.id}
                                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= currentStepIndex ? 'bg-gold' : 'bg-white/10'}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Messages / Form Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {userData.step === 'initial' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-10 space-y-8"
                                >
                                    <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <Scale className="text-[#c8a96e]" size={32} />
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm text-white/90 font-medium px-6 leading-relaxed">
                                            &quot;Bienvenido. Para brindarle una visión 360° de su asunto, iniciaremos un breve proceso de recepción.&quot;
                                        </p>
                                        <p className="text-xs text-white/40 uppercase tracking-[0.2em]">Seleccione la materia:</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 px-4">
                                        {[
                                            { label: 'Fiscal/Adm.', cat: 'Derecho Fiscal' },
                                            { label: 'Amparo', cat: 'Derecho Constitucional' },
                                            { label: 'Civil/Merc.', cat: 'Derecho Civil' },
                                            { label: 'Otro', cat: 'Otro' }
                                        ].map((suggestion) => (
                                            <button
                                                key={suggestion.label}
                                                onClick={() => setUserData(prev => ({ ...prev, category: suggestion.cat, step: 'name' }))}
                                                className="text-[11px] bg-white/5 border border-white/10 hover:border-[#c8a96e]/50 hover:bg-[#c8a96e]/10 py-4 rounded-2xl transition-all text-white/80 font-bold uppercase tracking-wider"
                                            >
                                                {suggestion.label}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {userData.step !== 'initial' && userData.step !== 'completed' && (
                                <motion.div
                                    key={userData.step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8 py-6"
                                >
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#c8a96e] text-[#02050a] flex items-center justify-center shadow-lg flex-shrink-0">
                                            <Bot size={20} />
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl rounded-tl-none text-[14px] text-white/90 leading-relaxed shadow-xl">
                                            {userData.step === 'name' && "Excelente elección de materia. Para el registro oficial en nuestra base de datos, ¿cuál es su nombre completo?"}
                                            {userData.step === 'contact' && `Mucho gusto, ${userData.name}. ¿A qué correo electrónico o teléfono podemos enviarle el seguimiento del caso?`}
                                            {userData.step === 'case' && "Por último, descríbanos brevemente su situación legal para que nuestros titulares realicen un primer análisis."}
                                        </div>
                                    </div>

                                    <div className="pl-14">
                                        <div className="flex gap-3">
                                            <input
                                                autoFocus
                                                value={input}
                                                onChange={handleInputChange}
                                                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                                                placeholder="Escriba aquí..."
                                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-white/20 shadow-inner"
                                            />
                                            <button
                                                onClick={handleSubmit}
                                                className="w-14 h-14 bg-gold text-primary rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
                                            >
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {userData.step === 'completed' && (
                                <>
                                    {messages.length === 0 && (
                                        <div className="flex justify-start">
                                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl animate-pulse">
                                                <p className="text-xs text-gold">Analizando estrategia 360°...</p>
                                            </div>
                                        </div>
                                    )}
                                    {messages.map((m) => (
                                        <motion.div
                                            key={m.id}
                                            initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                                            animate={{ opacity: 1, x: 0 }}
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
                                </>
                            )}

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

                        {/* Input Area (Only for chat after completed triage) */}
                        {userData.step === 'completed' && (
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
                            </form>
                        )}
                        <p className="text-[10px] text-center text-white/20 py-4 uppercase tracking-[0.2em] font-medium bg-black/20">
                            Lex-360 Confidential Intake
                        </p>
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
