import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  
  // Protect route - redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // If not authenticated, don't render the dashboard content
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>
          <p className="text-gray-600">
            This is your personal dashboard. You are logged in with: {user.email}
          </p>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">What you can do:</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Update your profile information</li>
              <li>Manage your account settings</li>
              <li>View your activity history</li>
              <li>Explore available features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}