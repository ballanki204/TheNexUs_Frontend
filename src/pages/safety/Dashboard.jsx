import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  AlertTriangle,
  CheckSquare,
  Users,
  BarChart3,
  Bell,
  FileText,
  Home,
  Settings,
  User,
  Shield,
} from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    hazards: 0,
    checklists: 0,
    trainings: 0,
    notifications: 0,
  });

  useEffect(() => {
    // Load stats from localStorage or dummy data
    const hazards = JSON.parse(localStorage.getItem("hazards") || "[]");
    const checklists = JSON.parse(localStorage.getItem("checklists") || "[]");
    const trainings = JSON.parse(localStorage.getItem("trainings") || "[]");
    const notifications = JSON.parse(
      localStorage.getItem("notifications") || "[]"
    );

    setStats({
      hazards: hazards.length,
      checklists: checklists.length,
      trainings: trainings.length,
      notifications: notifications.length,
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getDashboardCards = () => {
    const cards = [
      {
        title: "Hazards",
        value: stats.hazards,
        icon: AlertTriangle,
        color: "text-red-500",
        bgColor: "bg-red-50",
        path: "/hazards",
      },
      {
        title: "Checklists",
        value: stats.checklists,
        icon: CheckSquare,
        color: "text-green-500",
        bgColor: "bg-green-50",
        path: "/checklists",
      },
      {
        title: "Training",
        value: stats.trainings,
        icon: FileText,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        path: "/training",
      },
      {
        title: "Notifications",
        value: stats.notifications,
        icon: Bell,
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
        path: "/notifications",
      },
    ];

    return cards;
  };

  const sidebarItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    {
      title: "Hazards",
      icon: AlertTriangle,
      path: "/hazards",
    },
    {
      title: "Checklists",
      icon: CheckSquare,
      path: "/checklists",
    },
    {
      title: "Training",
      icon: FileText,
      path: "/training",
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/notifications",
    },
    {
      title: "Profile",
      icon: User,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SafetyMS</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    className="w-full justify-start"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.name || "User"}
              </span>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name || "User"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {getDashboardCards().map((card) => (
                <Card
                  key={card.title}
                  className="hover:shadow-lg transition-all cursor-pointer animate-fade-in"
                  onClick={() => navigate(card.path)}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {card.title}
                    </CardTitle>
                    <div className={`p-2 rounded-full ${card.bgColor}`}>
                      <card.icon className={`h-4 w-4 ${card.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No recent activity to display.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate("/hazards")}
                  >
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Report Hazard
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate("/checklists")}
                  >
                    <CheckSquare className="mr-2 h-4 w-4" />
                    View Checklists
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate("/training")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Training Modules
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
