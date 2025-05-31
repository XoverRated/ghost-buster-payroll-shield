
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BiometricScanner } from './BiometricScanner';
import { Shield, Lock, User } from 'lucide-react';

interface LoginFormProps {
  onLogin: (user: any) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showBiometric, setShowBiometric] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock user database
  const mockUsers = {
    'EMP001': { 
      id: '1', name: 'John Doe', role: 'employee' as const, department: 'Engineering', 
      password: 'password123', biometricVerified: true 
    },
    'MGR001': { 
      id: '2', name: 'Sarah Smith', role: 'manager' as const, department: 'Engineering', 
      password: 'manager123', biometricVerified: true 
    },
    'HR001': { 
      id: '3', name: 'Emily Johnson', role: 'hr' as const, department: 'Human Resources', 
      password: 'hr123', biometricVerified: true 
    },
    'PAY001': { 
      id: '4', name: 'Michael Brown', role: 'payroll_admin' as const, department: 'Finance', 
      password: 'payroll123', biometricVerified: true 
    },
    'ADM001': { 
      id: '5', name: 'Admin User', role: 'system_admin' as const, department: 'IT', 
      password: 'admin123', biometricVerified: true 
    },
  };

  const handleCredentialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const user = mockUsers[employeeId as keyof typeof mockUsers];
      if (user && user.password === password) {
        setShowBiometric(true);
      } else {
        alert('Invalid credentials');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleBiometricSuccess = () => {
    const user = mockUsers[employeeId as keyof typeof mockUsers];
    onLogin({ ...user, employeeId });
  };

  if (showBiometric) {
    return <BiometricScanner onSuccess={handleBiometricSuccess} onBack={() => setShowBiometric(false)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Employee Verification System</CardTitle>
          <CardDescription className="text-gray-300">
            Secure access with multi-factor authentication
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCredentialSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Employee ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="pl-10 bg-white/10 border-white/30 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-white/10 border-white/30 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Continue to Biometric Verification'}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-300 mb-2">Demo Credentials:</h3>
            <div className="text-xs text-gray-300 space-y-1">
              <div>Employee: EMP001 / password123</div>
              <div>Manager: MGR001 / manager123</div>
              <div>HR: HR001 / hr123</div>
              <div>Payroll: PAY001 / payroll123</div>
              <div>Admin: ADM001 / admin123</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
