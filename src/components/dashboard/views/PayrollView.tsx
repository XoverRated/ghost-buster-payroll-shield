
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Search } from 'lucide-react';

interface PayrollViewProps {
  user: any;
  activeView: string;
}

export const PayrollView: React.FC<PayrollViewProps> = ({ user, activeView }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white capitalize">
          {activeView.replace('_', ' ')}
        </h1>
        <p className="text-gray-400">Payroll administration for {activeView}</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Payroll Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Payroll administrator features for {activeView} will be implemented here.
            This includes salary processing, verification, and audit capabilities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
