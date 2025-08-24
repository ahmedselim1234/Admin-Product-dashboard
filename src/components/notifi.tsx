import { useEffect, useState } from "react";
import io from "socket.io-client";

// الاتصال بالسيرفر
const socket = io("http://localhost:4000");

function ServicesList() {
  const [notifications, setNotifications] = useState<{ m: string }[]>([]);

  useEffect(() => {
    // استماع للإشعارات من السيرفر
    socket.on("notification", (data: { m: string }) => {
      console.log("Received:", data);
      setNotifications((prev) => [...prev, data]);
    });

    // تنظيف الـ socket listener عند الخروج
    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((noti, index) => (
          <li key={index}>{noti.m}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
