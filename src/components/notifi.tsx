import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function ServicesList() {
  const [notifications, setNotifications] = useState<{ m: string }[]>([]);

  useEffect(() => {
    
    socket.on("notification", (data: { m: string }) => {
      console.log("Received:", data);
      setNotifications((prev) => [...prev, data]);
    });

  
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
