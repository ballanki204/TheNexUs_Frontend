import { NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ProfileEditDialog from "@/components/ProfileEditDialog";
import {
  LayoutDashboard,
  AlertTriangle,
  CheckSquare,
  Bell,
  AlertCircle,
  FileText,
  GraduationCap,
  BarChart3,
  Users,
  Settings,
  ShieldAlert,
  LogOut,
  Edit,
  User,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const getProfileIcon = (profileIcon) => {
  switch (profileIcon) {
    case "Shield":
      return Shield;
    case "Settings":
      return Settings;
    default:
      return User;
  }
};

export const Sidebar = () => {
  const { user, logout } = useAuth();

  const getNavItems = () => {
    switch (user?.role) {
      case "admin":
        return [
          { to: "/admin-dashboard", icon: LayoutDashboard, label: "Dashboard" },
          { to: "/users", icon: Users, label: "User Management" },
          { to: "/hazards", icon: AlertTriangle, label: "Hazards" },
          { to: "/training", icon: GraduationCap, label: "Training" },
          { to: "/checklists", icon: CheckSquare, label: "Checklists" },
          { to: "/notifications", icon: Bell, label: "Notifications" },
          { to: "/analytics", icon: BarChart3, label: "Reports" },
          { to: "/settings", icon: Settings, label: "System Settings" },
        ];
      case "safety_manager":
        return [
          {
            to: "/manager-dashboard",
            icon: LayoutDashboard,
            label: "Dashboard",
          },
          { to: "/hazards", icon: AlertTriangle, label: "Hazards" },
          { to: "/checklists", icon: CheckSquare, label: "Checklists" },
          { to: "/notifications", icon: Bell, label: "Notifications" },
          { to: "/analytics", icon: BarChart3, label: "Analytics" },
          { to: "/alerts", icon: ShieldAlert, label: "Alerts" },
        ];
      case "supervisor":
        return [
          {
            to: "/supervisor-dashboard",
            icon: LayoutDashboard,
            label: "Dashboard",
          },
          { to: "/hazards", icon: AlertTriangle, label: "Hazards" },
          { to: "/checklists", icon: CheckSquare, label: "Checklists" },
          { to: "/notifications", icon: Bell, label: "Notifications" },
          { to: "/analytics", icon: BarChart3, label: "Analytics" },
          { to: "/alerts", icon: ShieldAlert, label: "Alerts" },
        ];
      case "employee":
        const items = [
          { to: "/hazards", icon: AlertTriangle, label: "Report Hazard" },
          { to: "/alerts", icon: ShieldAlert, label: "Alerts" },
          { to: "/notifications", icon: Bell, label: "Notifications" },
          {
            to: user?.approved ? "/checklists" : null,
            icon: CheckSquare,
            label: user?.approved ? "My Checklists" : "My Checklists (Pending)",
            disabled: !user?.approved,
          },
          { to: "/training", icon: GraduationCap, label: "Training" },
        ];
        if (user?.approved) {
          items.unshift({
            to: "/employee-dashboard",
            icon: LayoutDashboard,
            label: "Dashboard",
          });
        }
        return items;
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <aside className="w-16 md:w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0 z-40">
      <div className="p-3 md:p-6 border-b border-sidebar-border">
        <NavLink to="/home" className="flex items-center gap-2 cursor-pointer">
          <ShieldAlert className="h-6 w-6 md:h-8 md:w-8 text-sidebar-foreground" />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-sidebar-foreground">
              SafetyMS
            </h1>
            <p className="text-xs text-sidebar-foreground/80 capitalize">
              {user?.role?.replace("_", " ")}
            </p>
          </div>
        </NavLink>
      </div>

      <nav className="flex-1 p-2 md:p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 md:gap-3 px-2 md:px-4 py-3 rounded-lg transition-all duration-200",
                "text-sidebar-foreground/90 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                isActive &&
                  "bg-sidebar-accent text-sidebar-foreground font-medium"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden md:inline">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-2 md:p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <Avatar className="h-8 w-8 md:h-10 md:w-10">
            <AvatarFallback className="bg-sidebar-accent text-sidebar-foreground">
              {(() => {
                const ProfileIcon = getProfileIcon(user?.profileIcon || "User");
                return <ProfileIcon className="h-4 w-4 md:h-6 md:w-6" />;
              })()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 hidden md:block">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {user?.name}
            </p>
            <p className="text-xs text-sidebar-foreground/80 truncate">
              {user?.email}
            </p>
          </div>
          <ProfileEditDialog>
            <Button
              variant="ghost"
              size="sm"
              className="text-sidebar-foreground/90 hover:bg-sidebar-accent p-1 md:p-2"
            >
              <Edit className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </ProfileEditDialog>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 md:gap-3 px-2 md:px-4 py-3 rounded-lg transition-all duration-200 w-full text-sidebar-foreground/90 hover:bg-sidebar-accent hover:text-sidebar-foreground"
        >
          <LogOut className="h-5 w-5" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </aside>
  );
};
