
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, FileText, Database } from 'lucide-react';

interface ManagerViewProps {
  user: any;
  activeView: string;
}

export const ManagerView: React.FC<ManagerViewProps> = ({ user, activeView }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white capitalize">
          {activeView.replace('_', ' ')}
        </h1>
        <p className="text-gray-400">Manager dashboard for {activeView}</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Manager Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Manager-specific features for {activeView} will be implemented here.
            This includes team management, approvals, and reporting capabilities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
