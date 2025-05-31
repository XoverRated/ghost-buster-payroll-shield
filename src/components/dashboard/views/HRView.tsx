
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Shield, FileText } from 'lucide-react';

interface HRViewProps {
  user: any;
  activeView: string;
}

export const HRView: React.FC<HRViewProps> = ({ user, activeView }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white capitalize">
          {activeView.replace('_', ' ')}
        </h1>
        <p className="text-gray-400">HR management for {activeView}</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>HR Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            HR-specific features for {activeView} will be implemented here.
            This includes employee management, verification processes, and HR reporting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
