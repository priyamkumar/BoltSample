import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Package, MessageSquare } from 'lucide-react';

const Admin = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin/products', label: 'Products', icon: Package },
    { path: '/admin/messages', label: 'Messages', icon: MessageSquare },
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md mb-2 ${
                    location.pathname === path
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;