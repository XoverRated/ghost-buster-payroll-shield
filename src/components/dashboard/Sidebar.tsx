
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  User, 
  Database, 
  FileText, 
  LogOut, 
  Clock,
  Search,
  Lock
} from 'lucide-react';

interface SidebarProps {
  user: any;
  activeView: string;
  setActiveView: (view: string) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ user, activeView, setActiveView, onLogout }) => {
  const getMenuItems = () => {
    const baseItems = [
      { id: 'overview', label: 'Overview', icon: Shield },
    ];

    const roleSpecificItems = {
      employee: [
        { id: 'profile', label: 'My Profile', icon: User },
        { id: 'attendance', label: 'Attendance', icon: Clock },
        { id: 'payroll', label: 'Payroll', icon: FileText },
      ],
      manager: [
        { id: 'team', label: 'Team Management', icon: User },
        { id: 'approvals', label: 'Approvals', icon: FileText },
        { id: 'reports', label: 'Reports', icon: Database },
      ],
      hr: [
        { id: 'employees', label: 'Employee Management', icon: User },
        { id: 'verification', label: 'Verification', icon: Shield },
        { id: 'reports', label: 'HR Reports', icon: FileText },
      ],
      payroll_admin: [
        { id: 'payroll', label: 'Payroll Processing', icon: FileText },
        { id: 'verification', label: 'Salary Verification', icon: Shield },
        { id: 'audit', label: 'Audit Trail', icon: Search },
      ],
      system_admin: [
        { id: 'users', label: 'User Management', icon: User },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'audit', label: 'System Audit', icon: Search },
        { id: 'settings', label: 'System Settings', icon: Database },
      ],
    };

    return [...baseItems, ...(roleSpecificItems[user.role as keyof typeof roleSpecificItems] || [])];
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-slate-800/50 backdrop-blur-lg border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">EVS</h1>
            <p className="text-gray-400 text-sm">v2.0</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">{user.name}</p>
            <p className="text-gray-400 text-xs capitalize">{user.role.replace('_', ' ')}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeView === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start text-left ${
                activeView === item.id 
                  ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveView(item.id)}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-300 hover:text-red-200 hover:bg-red-900/20"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};
