
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardContent } from './DashboardContent';
import { EmployeeView } from './views/EmployeeView';
import { ManagerView } from './views/ManagerView';
import { HRView } from './views/HRView';
import { PayrollView } from './views/PayrollView';
import { AdminView } from './views/AdminView';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeView, setActiveView] = useState('overview');

  const renderView = () => {
    if (activeView === 'overview') {
      return <DashboardContent user={user} />;
    }

    switch (user.role) {
      case 'employee':
        return <EmployeeView user={user} activeView={activeView} />;
      case 'manager':
        return <ManagerView user={user} activeView={activeView} />;
      case 'hr':
        return <HRView user={user} activeView={activeView} />;
      case 'payroll_admin':
        return <PayrollView user={user} activeView={activeView} />;
      case 'system_admin':
        return <AdminView user={user} activeView={activeView} />;
      default:
        return <DashboardContent user={user} />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Sidebar 
        user={user} 
        activeView={activeView} 
        setActiveView={setActiveView}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
};
