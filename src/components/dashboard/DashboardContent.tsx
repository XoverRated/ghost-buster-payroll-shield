
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, User, Clock, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

interface DashboardContentProps {
  user: any;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({ user }) => {
  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getStats = () => {
    const baseStats = [
      {
        title: 'Verification Status',
        value: 'Verified',
        icon: CheckCircle,
        color: 'text-green-400',
        bgColor: 'bg-green-900/20'
      },
      {
        title: 'Last Login',
        value: 'Just now',
        icon: Clock,
        color: 'text-blue-400',
        bgColor: 'bg-blue-900/20'
      }
    ];

    const roleSpecificStats = {
      employee: [
        {
          title: 'Attendance Rate',
          value: '98.5%',
          icon: Clock,
          color: 'text-green-400',
          bgColor: 'bg-green-900/20'
        },
        {
          title: 'Next Payroll',
          value: 'Dec 30',
          icon: FileText,
          color: 'text-blue-400',
          bgColor: 'bg-blue-900/20'
        }
      ],
      manager: [
        {
          title: 'Team Members',
          value: '12',
          icon: User,
          color: 'text-purple-400',
          bgColor: 'bg-purple-900/20'
        },
        {
          title: 'Pending Approvals',
          value: '3',
          icon: AlertTriangle,
          color: 'text-orange-400',
          bgColor: 'bg-orange-900/20'
        }
      ],
      hr: [
        {
          title: 'Total Employees',
          value: '1,247',
          icon: User,
          color: 'text-purple-400',
          bgColor: 'bg-purple-900/20'
        },
        {
          title: 'Verification Queue',
          value: '8',
          icon: Shield,
          color: 'text-orange-400',
          bgColor: 'bg-orange-900/20'
        }
      ],
      payroll_admin: [
        {
          title: 'Payroll Queue',
          value: '234',
          icon: FileText,
          color: 'text-blue-400',
          bgColor: 'bg-blue-900/20'
        },
        {
          title: 'Flagged Entries',
          value: '2',
          icon: AlertTriangle,
          color: 'text-red-400',
          bgColor: 'bg-red-900/20'
        }
      ],
      system_admin: [
        {
          title: 'System Health',
          value: '99.8%',
          icon: Shield,
          color: 'text-green-400',
          bgColor: 'bg-green-900/20'
        },
        {
          title: 'Active Users',
          value: '342',
          icon: User,
          color: 'text-blue-400',
          bgColor: 'bg-blue-900/20'
        }
      ]
    };

    return [...baseStats, ...(roleSpecificStats[user.role as keyof typeof roleSpecificStats] || [])];
  };

  const stats = getStats();

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">
          {getWelcomeMessage()}, {user.name}!
        </h1>
        <p className="text-gray-400">
          Welcome to the Employee Verification System dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Security Status</span>
            </CardTitle>
            <CardDescription className="text-gray-400">
              Current security and verification status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-900/20 rounded-lg">
              <span className="text-sm">Biometric Verification</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-900/20 rounded-lg">
              <span className="text-sm">Multi-Factor Authentication</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-900/20 rounded-lg">
              <span className="text-sm">Role-Based Access</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription className="text-gray-400">
              Latest system activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Successful login verification</span>
              <span className="text-xs text-gray-400 ml-auto">Just now</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Biometric data updated</span>
              <span className="text-xs text-gray-400 ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm">Password changed</span>
              <span className="text-xs text-gray-400 ml-auto">1 day ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
