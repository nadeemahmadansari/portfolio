"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  Cell
} from "recharts";
import { Users, Eye, MousePointer2, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const visitorData = [
  { day: "Mon", visitors: 450, views: 1200 },
  { day: "Tue", visitors: 520, views: 1450 },
  { day: "Wed", visitors: 480, views: 1300 },
  { day: "Thu", visitors: 610, views: 1800 },
  { day: "Fri", visitors: 550, views: 1600 },
  { day: "Sat", visitors: 300, views: 900 },
  { day: "Sun", visitors: 250, views: 750 },
];

const projectClicks = [
  { name: "Workflow Automator", clicks: 320 },
  { name: "AI Content Intel", clicks: 280 },
  { name: "Analytics Dash", clicks: 250 },
  { name: "Apps Script Suite", clicks: 190 },
];

export default function AnalyticsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md p-8 rounded-3xl bg-card border border-border shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold">Admin Access</h1>
            <p className="text-muted-foreground text-sm">Please enter your password to view analytics.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <Input 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-secondary/30"
            />
            <Button type="submit" className="w-full h-12 font-bold">
              Access Dashboard
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <SectionHeader 
            title="Analytics Dashboard" 
            subtitle="Real-time insights into your portfolio performance."
            align="left"
            className="mb-0"
          />
          <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/50 text-green-500 text-xs font-bold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Live Data Feed Active
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Visitors", value: "3,160", icon: Users, trend: "+12%" },
            { label: "Page Views", value: "9,000", icon: Eye, trend: "+18%" },
            { label: "Project Clicks", value: "1,040", icon: MousePointer2, trend: "+5%" },
            { label: "Conversion Rate", value: "3.2%", icon: TrendingUp, trend: "+2%" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-secondary text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                  {stat.trend}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-card border border-border h-[400px]">
            <h3 className="text-lg font-bold mb-8">Weekly Traffic</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "12px" }}
                  itemStyle={{ color: "#3B82F6" }}
                />
                <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="views" stroke="#8B5CF6" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border h-[400px]">
            <h3 className="text-lg font-bold mb-8">Project Engagement</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectClicks} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#374151" />
                <XAxis type="number" axisLine={false} tickLine={false} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  width={150}
                />
                <Tooltip 
                  cursor={{ fill: "transparent" }}
                  contentStyle={{ backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "12px" }}
                />
                <Bar dataKey="clicks" radius={[0, 4, 4, 0]}>
                  {projectClicks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? "#3B82F6" : "#4B5563"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Container>
    </div>
  );
}
