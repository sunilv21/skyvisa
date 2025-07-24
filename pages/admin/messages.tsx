import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

type Msg = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country?: string;
  destination?: string;
  purpose?: string;
  message: string;
  createdAt: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Msg[]>([]);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>

        <ul className="bg-white rounded shadow divide-y">
          {messages.length === 0 && (
            <li className="p-4 text-gray-500">No messages</li>
          )}

          {messages.map((msg) => (
            <li key={msg._id} className="p-4 space-y-1">
              <p className="text-gray-800">{msg.message}</p>

              <p className="text-sm text-gray-500">
                — {msg.firstName} {msg.lastName}
                {msg.email && <> · {msg.email}</>}
                {msg.phone && <> · {msg.phone}</>}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
