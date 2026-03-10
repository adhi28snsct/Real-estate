'use client';

import {
  Users,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  MoreHorizontal,
  Plus
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { INITIAL_LEADS } from './leads/page';

export default function DashboardPage() {
  const totalLeads = INITIAL_LEADS.length;
  const closedLeads = INITIAL_LEADS.filter((l) => l.status === "CLOSED").length;
  const newLeads = INITIAL_LEADS.filter((l) => l.status === "NEW").length;
  const followUps = INITIAL_LEADS.filter((l) => l.status === "FOLLOW_UP").length;
  const conversionRate = totalLeads === 0 ? "0.0" : ((closedLeads / totalLeads) * 100).toFixed(1);

  return (
    <div className="flex flex-col gap-8 p-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back. Here's what's happening with your properties today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Download Report</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="mr-2 h-4 w-4" /> New Property
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Leads"
          value={totalLeads}
          description="+12% from last month"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="New Inquiries"
          value={newLeads}
          description="+4 received today"
          icon={<FileText className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Follow Ups"
          value={followUps}
          description="3 closing soon"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Closed Deals"
          value={closedLeads}
          description={`${conversionRate}% conversion rate`}
          icon={<CheckCircle2 className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Pipeline Value Chart Area */}
        <Card className="lg:col-span-4 shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pipeline Value</CardTitle>
              <CardDescription>Revenue forecast for the current week.</CardDescription>
            </div>
            <Tabs defaultValue="week" className="w-[180px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] w-full flex items-end justify-between gap-3 pt-4">
              {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="relative w-full bg-slate-100 rounded-md overflow-hidden h-full flex items-end">
                    <div
                      className="w-full bg-indigo-500 rounded-t-sm transition-all duration-500 group-hover:bg-indigo-600"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-3 shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ActivityItem
                title="New WhatsApp lead"
                person="Ahmed Al Nuaimi"
                time="10 mins ago"
                status="New"
              />
              <ActivityItem
                title="Status updated"
                person="Fatima Al Mansoori"
                time="1 hour ago"
                status="Negotiation"
              />
              <ActivityItem
                title="Added a new property"
                person="System"
                time="3 hours ago"
              />
              <ActivityItem
                title="Deal Closed 🎉"
                person="Omar Hassan"
                time="Yesterday"
                isSuccess
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* Helper Components to keep code clean */

function StatsCard({ title, value, description, icon }: any) {
  return (
    <Card className="shadow-sm border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function ActivityItem({ title, person, time, status, isSuccess }: any) {
  return (
    <div className="flex gap-4">
      <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${isSuccess ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">
          {person} • {time}
        </p>
        {status && (
          <Badge variant="secondary" className="mt-1 text-[10px] px-1.5 py-0">
            {status}
          </Badge>
        )}
      </div>
    </div>
  );
}