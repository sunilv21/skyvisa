import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then(res => res.json())
      .then(data => setNotifications(data));
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <ul>
          {notifications.length === 0 && <li>No notifications.</li>}
          {notifications.map(n => (
            <li
              key={n._id}
              className={`mb-2 p-4 rounded ${
                n.isRead ? "bg-gray-100" : "bg-blue-50"
              }`}
            >
              <strong>{n.type.toUpperCase()}</strong>: {n.message}
              <span className="text-xs text-gray-500 ml-2">
                {new Date(n.createdAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  );
}
