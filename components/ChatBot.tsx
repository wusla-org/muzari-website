"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faqData } from "@/lib/chat-data";
import { getWhatsAppHref } from "@/lib/site-data";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  cta?: { label: string; href: string };
  quickReplies?: string[];
}

const CATEGORIES = ["Products", "Ordering", "Shipping", "Quality"];
const GREETINGS = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "hiya", "howdy", "greetings", "sup"];

function findBestMatch(input: string) {
  const lower = input.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const entry of faqData) {
    const score = entry.keywords.filter((k) => lower.includes(k)).length;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore > 0 ? best : null;
}

function isGreeting(text: string) {
  const lower = text.toLowerCase().trim();
  return GREETINGS.some(
    (g) => lower === g || lower.startsWith(g + " ") || lower.startsWith(g + "!") || lower.startsWith(g + ",")
  );
}

export default function ChatBot() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <ChatBotInner />;
}

function ChatBotInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showDot, setShowDot] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [awaitingName, setAwaitingName] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const whatsappBase = getWhatsAppHref();

  function buildWhatsAppUrl(context?: string) {
    if (!whatsappBase.startsWith("https://wa.me/")) return whatsappBase;
    const greeting = userName ? `Hi, I'm ${userName}` : "Hi";
    const body = context
      ? `${greeting}. I'd like to enquire about: ${context}`
      : `${greeting}. I'd like to learn more about Muzari Exports.`;
    return `${whatsappBase}?text=${encodeURIComponent(body)}`;
  }

  useEffect(() => {
    setMessages([
      {
        id: 1,
        role: "bot",
        text: "Hi! Welcome to Muzari Exports. To get started, what's your name?",
      },
    ]);
    const timer = setTimeout(() => setShowDot(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setShowDot(false);
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  function addMessage(msg: Omit<Message, "id">) {
    setMessages((prev) => [...prev, { ...msg, id: Date.now() + Math.random() }]);
  }

  function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setInputValue("");
    addMessage({ role: "user", text: trimmed });

    // Name collection step
    if (awaitingName) {
      const name = trimmed.split(" ")[0];
      setUserName(name);
      setAwaitingName(false);
      setTimeout(() => {
        addMessage({
          role: "bot",
          text: `Nice to meet you, ${name}! How can I help you today?`,
          quickReplies: CATEGORIES,
        });
      }, 400);
      return;
    }

    // Greeting detection
    if (isGreeting(trimmed)) {
      setTimeout(() => {
        addMessage({
          role: "bot",
          text: `Hi${userName ? `, ${userName}` : ""}! How can I help you today?`,
          quickReplies: CATEGORIES,
        });
      }, 400);
      return;
    }

    // FAQ matching
    setTimeout(() => {
      const match = findBestMatch(trimmed);
      if (match) {
        const ctaHref =
          match.cta?.href === "WHATSAPP"
            ? buildWhatsAppUrl(match.question)
            : match.cta?.href;
        addMessage({
          role: "bot",
          text: match.answer,
          cta: match.cta && ctaHref ? { label: match.cta.label, href: ctaHref } : undefined,
        });
      } else {
        addMessage({
          role: "bot",
          text: `Good question${userName ? `, ${userName}` : ""}! Our team can answer that right away on WhatsApp.`,
          cta: { label: "Chat on WhatsApp", href: buildWhatsAppUrl(trimmed) },
        });
      }
    }, 500);
  }

  function handleCategory(category: string) {
    addMessage({ role: "user", text: category });
    const entries = faqData.filter((e) => e.category === category);
    setTimeout(() => {
      addMessage({
        role: "bot",
        text: `Here are common ${category.toLowerCase()} questions — or type yours below:`,
        quickReplies: entries.slice(0, 3).map((e) => e.question),
      });
    }, 400);
  }

  function handleQuickReply(text: string) {
    if (CATEGORIES.includes(text)) {
      handleCategory(text);
    } else {
      handleSend(text);
    }
  }

  return (
    // Right side, panel right-aligned with the button
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mb-3 flex w-80 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-black/20"
            style={{ height: "460px" }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between bg-[#2d5a1b] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none text-white">
                    Muzari Assistant
                  </p>
                  <p className="mt-0.5 text-[10px] text-green-200">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-sm bg-[#2d5a1b] text-white"
                        : "rounded-bl-sm bg-white text-gray-800 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.cta && (
                    <Link
                      href={msg.cta.href}
                      target={msg.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        msg.cta.href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      className="mt-1.5 inline-block rounded-full bg-[#2d5a1b] px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-[#3d7a26]"
                    >
                      {msg.cta.label}
                    </Link>
                  )}
                  {msg.quickReplies && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="rounded-full border border-[#2d5a1b] px-3 py-1 text-xs font-medium text-[#2d5a1b] transition-colors hover:bg-[#2d5a1b] hover:text-white"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input — send button embedded inside */}
            <div className="shrink-0 border-t border-gray-100 bg-white px-3 py-3">
              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 pl-4 pr-1.5 py-1.5 focus-within:border-[#2d5a1b]/40 focus-within:ring-2 focus-within:ring-[#2d5a1b]/10 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder={awaitingName ? "Enter your name…" : "Type a message…"}
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim()}
                  className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2d5a1b] text-white transition-all hover:bg-[#3d7a26] disabled:opacity-30"
                  aria-label="Send message"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#2d5a1b] text-white shadow-2xl shadow-green-900/40 ring-4 ring-white transition-transform hover:scale-110 active:scale-95"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {showDot && !isOpen && (
          <span className="absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full bg-red-500 ring-2 ring-white" />
        )}
      </button>
    </div>
  );
}
