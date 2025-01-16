import React from 'react';
import { 
  Home, 
  Users, 
  FileText, 
  Shield, 
  HardDrive, 
  BookOpen, 
  Mail,
  Calendar,
  LifeBuoy,
  Settings,
  Menu
} from 'lucide-react';
import { Card } from '@/components/ui/card';

// Logo component with image placeholder
const MaxxEnergyLogo = () => (
  <img
    src="/assets/maxx-energy-logo-white.png"
    alt="MAXX Energy Logo"
    className="h-8 w-auto"
  />
);

const IntranetLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <MaxxEnergyLogo />
              <span className="text-xl font-semibold">MAXX Energy Intranet</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5" />
              <Calendar className="h-5 w-5" />
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] fixed">
          <nav className="p-4">
            <div className="space-y-2">
              <SidebarItem icon={<Home />} text="Home" active />
              <SidebarItem icon={<Users />} text="People Directory" />
              <SidebarItem icon={<FileText />} text="Documents" />
              <SidebarItem icon={<Shield />} text="Security" />
              <SidebarItem icon={<HardDrive />} text="IT Support" />
              <SidebarItem icon={<BookOpen />} text="Knowledge Base" />
              <SidebarItem icon={<LifeBuoy />} text="Help Desk" />
              <SidebarItem icon={<Settings />} text="Settings" />
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="ml-64 flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Links */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li className="text-blue-600 hover:underline cursor-pointer">Submit IT Ticket</li>
                <li className="text-blue-600 hover:underline cursor-pointer">Employee Directory</li>
                <li className="text-blue-600 hover:underline cursor-pointer">Meeting Rooms</li>
                <li className="text-blue-600 hover:underline cursor-pointer">Security Training</li>
              </ul>
            </Card>

            {/* Company News */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Company News</h2>
              <div className="space-y-4">
                <NewsItem 
                  title="Q1 Sustainability Goals Achieved"
                  date="April 15, 2025"
                />
                <NewsItem 
                  title="New IT Security Protocols"
                  date="April 12, 2025"
                />
                <NewsItem 
                  title="Employee Town Hall Next Week"
                  date="April 10, 2025"
                />
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">System Status</h2>
              <div className="space-y-2">
                <StatusItem name="Email Services" status="operational" />
                <StatusItem name="VPN Access" status="operational" />
                <StatusItem name="SharePoint" status="degraded" />
                <StatusItem name="Time Entry System" status="operational" />
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper Components
const SidebarItem = ({ icon, text, active = false }) => (
  <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer
    ${active ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}>
    {icon}
    <span>{text}</span>
  </div>
);

const NewsItem = ({ title, date }) => (
  <div className="border-b pb-2">
    <h3 className="font-medium text-blue-700 hover:underline cursor-pointer">{title}</h3>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
);

const StatusItem = ({ name, status }) => (
  <div className="flex items-center justify-between">
    <span>{name}</span>
    <span className={`px-2 py-1 rounded-full text-xs
      ${status === 'operational' ? 'bg-green-100 text-green-800' : 
        status === 'degraded' ? 'bg-yellow-100 text-yellow-800' : 
        'bg-red-100 text-red-800'}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  </div>
);

export default IntranetLayout;