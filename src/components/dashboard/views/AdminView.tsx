
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Lock, Search, Database } from 'lucide-react';

interface AdminViewProps {
  user: any;
  activeView: string;
}

export const AdminView: React.FC<AdminViewProps> = ({ user, activeView }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white capitalize">
          {activeView.replace('_', ' ')}
        </h1>
        <p className="text-gray-400">System administration for {activeView}</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="w-5 h-5" />
            <span>Admin Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            System administrator features for {activeView} will be implemented here.
            This includes user management, security settings, system audit, and configuration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
