import {
  Bell,
  Search,
  Home,
  Briefcase,
  Info,
  Mail,
  ShieldAlert,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Topbar = () => {
  const { user } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const loadNotifications = () => {
      const storedNotifications = localStorage.getItem("notifications");
      if (storedNotifications) {
        const notifications = JSON.parse(storedNotifications);
        const unread = notifications.filter(
          (notification) => !notification.read
        ).length;
        setUnreadCount(unread);
      }
    };

    loadNotifications();

    // Listen for storage changes to update unread count in real-time
    const handleStorageChange = (e) => {
      if (e.key === "notifications") {
        loadNotifications();
      }
    };

    // Listen for custom notificationsUpdated event
    const handleNotificationsUpdated = () => {
      loadNotifications();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("notificationsUpdated", handleNotificationsUpdated);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "notificationsUpdated",
        handleNotificationsUpdated
      );
    };
  }, []);

  return (
    <header className="h-12 md:h-16 border-b bg-card flex items-center justify-between px-3 md:px-6">
      <div className="flex items-center gap-3 md:gap-6">
        <Link to="/" className="flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <span className="text-lg md:text-xl font-bold hidden md:inline">
            SafetyMS
          </span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm hover:text-primary transition-colors hidden md:flex"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        {/* <Link
          to="#services"
          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
        >
          <Briefcase className="h-4 w-4" />
          <span>Services</span>
        </Link>
        <Link
          to="#about"
          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
        >
          <Info className="h-4 w-4" />
          <span>About</span>
        </Link>
        <Link
          to="#contact"
          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4" />
          <span>Contact</span>
        </Link> */}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Link
          to="/notifications"
          className="relative p-1 md:p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <Bell className="h-4 w-4 md:h-5 md:w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 bg-destructive text-xs">
              {unreadCount}
            </Badge>
          )}
        </Link>

        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {user?.role?.replace("_", " ")}
            </p>
          </div>
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm md:text-base">
            {user?.name.charAt(0)}
          </div>
          <div className="text-left md:hidden">
            <p className="text-xs font-medium">{user?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {user?.role?.replace("_", " ")}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
