
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Scan, ArrowLeft } from 'lucide-react';

interface BiometricScannerProps {
  onSuccess: () => void;
  onBack: () => void;
}

export const BiometricScanner: React.FC<BiometricScannerProps> = ({ onSuccess, onBack }) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');
  const [currentStep, setCurrentStep] = useState<'face' | 'fingerprint'>('face');

  useEffect(() => {
    if (scanStatus === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanStatus('success');
            setTimeout(() => {
              if (currentStep === 'face') {
                setCurrentStep('fingerprint');
                setScanProgress(0);
                setScanStatus('idle');
              } else {
                onSuccess();
              }
            }, 1500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [scanStatus, currentStep, onSuccess]);

  const startScan = () => {
    setScanProgress(0);
    setScanStatus('scanning');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="text-center">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="absolute top-4 left-4 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
            <Scan className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">
            {currentStep === 'face' ? 'Facial Recognition' : 'Fingerprint Verification'}
          </CardTitle>
          <CardDescription className="text-gray-300">
            {currentStep === 'face' 
              ? 'Position your face within the frame for scanning' 
              : 'Place your finger on the scanner'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <div className="w-48 h-48 mx-auto border-2 border-dashed border-blue-400 rounded-lg flex items-center justify-center bg-blue-900/20">
              {scanStatus === 'scanning' ? (
                <div className="animate-pulse">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-50"></div>
                </div>
              ) : scanStatus === 'success' ? (
                <CheckCircle className="w-16 h-16 text-green-400" />
              ) : scanStatus === 'failed' ? (
                <XCircle className="w-16 h-16 text-red-400" />
              ) : (
                <div className="text-center">
                  <Scan className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">
                    {currentStep === 'face' ? 'Face Scanner' : 'Fingerprint Scanner'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {scanStatus === 'scanning' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Analyzing biometric data...</span>
                <span>{scanProgress}%</span>
              </div>
              <Progress value={scanProgress} className="w-full" />
            </div>
          )}

          {scanStatus === 'success' && (
            <div className="text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto" />
              <p className="text-green-400 font-semibold">
                {currentStep === 'face' ? 'Face verified successfully!' : 'Authentication complete!'}
              </p>
              {currentStep === 'face' && (
                <p className="text-sm text-gray-400">Proceeding to fingerprint verification...</p>
              )}
            </div>
          )}

          {scanStatus === 'idle' && (
            <Button 
              onClick={startScan}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
            >
              Start {currentStep === 'face' ? 'Face' : 'Fingerprint'} Scan
            </Button>
          )}

          <div className="flex justify-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${currentStep === 'face' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
            <div className={`w-3 h-3 rounded-full ${currentStep === 'fingerprint' ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
