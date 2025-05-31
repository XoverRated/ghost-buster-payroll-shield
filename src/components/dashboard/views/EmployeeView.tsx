
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Clock, FileText, CheckCircle, Shield } from 'lucide-react';

interface EmployeeViewProps {
  user: any;
  activeView: string;
}

export const EmployeeView: React.FC<EmployeeViewProps> = ({ user, activeView }) => {
  const renderProfile = () => (
    <div className="space-y-6">
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Personal Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <p className="text-white font-medium">{user.name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Employee ID</label>
              <p className="text-white font-medium">{user.employeeId}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Department</label>
              <p className="text-white font-medium">{user.department}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Role</label>
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                {user.role.replace('_', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span>Biometric Verification Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-white font-medium">Verified</p>
              <p className="text-sm text-gray-400">Last updated: Today, 9:00 AM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Attendance Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-900/20 rounded-lg">
              <p className="text-2xl font-bold text-green-400">98.5%</p>
              <p className="text-sm text-gray-400">This Month</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
              <p className="text-2xl font-bold text-blue-400">22</p>
              <p className="text-sm text-gray-400">Days Present</p>
            </div>
            <div className="text-center p-4 bg-red-900/20 rounded-lg">
              <p className="text-2xl font-bold text-red-400">1</p>
              <p className="text-sm text-gray-400">Days Absent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle>Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: 'Today', checkIn: '9:00 AM', checkOut: 'In Progress', status: 'active' },
              { date: 'Yesterday', checkIn: '8:55 AM', checkOut: '6:15 PM', status: 'complete' },
              { date: 'Dec 29', checkIn: '9:05 AM', checkOut: '6:00 PM', status: 'complete' },
            ].map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="text-white">{record.date}</span>
                <span className="text-gray-400">{record.checkIn} - {record.checkOut}</span>
                <Badge 
                  variant={record.status === 'active' ? 'default' : 'secondary'}
                  className={record.status === 'active' ? 'bg-green-600/20 text-green-300' : 'bg-gray-600/20 text-gray-300'}
                >
                  {record.status === 'active' ? 'Active' : 'Complete'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPayroll = () => (
    <div className="space-y-6">
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Payroll Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Current Month</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Salary</span>
                  <span className="text-white">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Overtime</span>
                  <span className="text-white">$250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Deductions</span>
                  <span className="text-red-400">-$500</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between font-semibold">
                  <span className="text-white">Net Pay</span>
                  <span className="text-green-400">$4,750</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Payment Status</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Verified by AI System</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Manager Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Processing Payment</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white capitalize">
          {activeView.replace('_', ' ')}
        </h1>
        <p className="text-gray-400">Manage your {activeView} information</p>
      </div>

      {activeView === 'profile' && renderProfile()}
      {activeView === 'attendance' && renderAttendance()}
      {activeView === 'payroll' && renderPayroll()}
    </div>
  );
};
