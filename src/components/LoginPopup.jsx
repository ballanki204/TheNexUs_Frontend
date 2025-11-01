import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User,
  LogOut,
  Sparkles,
  Mail,
  Lock,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - in real app, this would be an API call
    if (loginData.email && loginData.password) {
      setUser({ name: "John Doe", email: loginData.email });
      setIsLoggedIn(true);
      setIsOpen(false);
      setLoginData({ email: "", password: "" });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration - in real app, this would be an API call
    if (
      registerData.name &&
      registerData.email &&
      registerData.password &&
      registerData.password === registerData.confirmPassword
    ) {
      setUser({ name: registerData.name, email: registerData.email });
      setIsLoggedIn(true);
      setIsOpen(false);
      setRegisterData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <User className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 glass-card border-2 border-primary/20 shadow-xl"
        >
          <div className="px-3 py-2 border-b border-primary/10">
            <div className="px-2 py-1.5 text-sm font-semibold gradient-text">
              {user?.name}
            </div>
            <div className="px-2 py-1 text-xs text-muted-foreground flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {user?.email}
            </div>
          </div>
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <LogOut className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="glass-card border-2 hover:text-gray-600 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 font-semibold"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] glass-card border-2 border-primary/20 shadow-2xl overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

        <DialogHeader className="relative z-10">
          <div className="flex items-center justify-center mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl md:text-3xl font-bold gradient-text-extended">
            Welcome to TheNexUS
          </DialogTitle>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Access your account or join our community
          </p>
        </DialogHeader>
        <div className="relative z-10">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass-card border-2 border-primary/10 p-1 h-auto">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:via-blue-500 data-[state=active]:to-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-2.5 font-semibold"
              >
                <Lock className="h-4 w-4 mr-2" />
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:via-blue-500 data-[state=active]:to-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-2.5 font-semibold"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="login-email"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                    className="glass-card border-2 border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="login-password"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <Lock className="h-4 w-4 text-primary" />
                    Password
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                    className="glass-card border-2 border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group relative bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden py-6"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-base">
                    Login
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register" className="mt-6">
              <form onSubmit={handleRegister} className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="register-name"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Enter your name"
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, name: e.target.value })
                    }
                    required
                    className="glass-card border-2 border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="register-email"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="glass-card border-2 border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="register-password"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <Lock className="h-4 w-4 text-primary" />
                    Password
                  </Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Enter your password"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    required
                    className="glass-card border-2 border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="register-confirm-password"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <Lock className="h-4 w-4 text-primary" />
                    Confirm Password
                  </Label>
                  <Input
                    id="register-confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    value={registerData.confirmPassword}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                    className="glass-card border-2 border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group relative bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden py-6"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-base">
                    Create Account
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;
