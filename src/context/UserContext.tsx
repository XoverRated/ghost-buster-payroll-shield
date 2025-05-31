
import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  role: 'employee' | 'manager' | 'hr' | 'payroll_admin' | 'system_admin';
  department: string;
  employeeId: string;
  biometricVerified: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  verificationStatus: 'pending' | 'verified' | 'failed';
  setVerificationStatus: (status: 'pending' | 'verified' | 'failed') => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verified' | 'failed'>('pending');

  return (
    <UserContext.Provider value={{ user, setUser, verificationStatus, setVerificationStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
