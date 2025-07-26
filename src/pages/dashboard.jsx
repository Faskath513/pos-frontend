import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  Printer, 
  Wifi, 
  Bell,
  Search,
  Plus,
  CreditCard,
  Receipt,
  TrendingUp,
  AlertTriangle,
  Clock,
  DollarSign,
  User,
  LogOut,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  BarChart,
  ChevronDown,
  Filter,
  RefreshCw,
  Download,
  MoreVertical,
  ShoppingBag,
  Tag,
  List,
  Grid,
  LayoutDashboard
} from 'lucide-react';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState(3);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);

  // Sample product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Headphones', price: 99.99, stock: 15, category: 'Electronics' },
    { id: 2, name: 'Bluetooth Speaker', price: 59.99, stock: 8, category: 'Electronics' },
    { id: 3, name: 'Organic Cotton T-Shirt', price: 24.99, stock: 42, category: 'Clothing' },
    { id: 4, name: 'Stainless Steel Water Bottle', price: 19.99, stock: 23, category: 'Accessories' },
    { id: 5, name: 'Wireless Mouse', price: 29.99, stock: 17, category: 'Electronics' },
    { id: 6, name: 'Yoga Mat', price: 34.99, stock: 12, category: 'Fitness' },
  ]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quickStats = [
    { label: 'Today\'s Sales', value: '$2,847', icon: DollarSign, trend: '+12%', color: 'text-green-600' },
    { label: 'Transactions', value: '127', icon: Receipt, trend: '+8%', color: 'text-blue-600' },
    { label: 'Low Stock Items', value: '5', icon: AlertTriangle, trend: '-2', color: 'text-orange-600' },
    { label: 'Active Users', value: '8', icon: Users, trend: '+1', color: 'text-purple-600' }
  ];

  const mainModules = [
    {
      title: 'Sales & Billing',
      description: 'Process transactions, scan products, and generate receipts',
      icon: ShoppingCart,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      features: ['Barcode Scanning', 'Payment Processing', 'Receipt Generation']
    },
    {
      title: 'Inventory Management',
      description: 'Manage products, stock levels, and categories',
      icon: Package,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      features: ['Product CRUD', 'Stock Tracking', 'Low Stock Alerts']
    },
    {
      title: 'Customer Management',
      description: 'Maintain customer database and purchase history',
      icon: Users,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      features: ['Customer Profiles', 'Purchase History', 'Loyalty Points']
    },
    {
      title: 'Reports & Analytics',
      description: 'Generate sales reports and business insights',
      icon: BarChart3,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      features: ['Sales Reports', 'Inventory Analysis', 'Export Options']
    }
  ];

  const quickActions = [
    { title: 'New Sale', icon: Plus, color: 'bg-blue-500 hover:bg-blue-600' },
    { title: 'Add Product', icon: Package, color: 'bg-green-500 hover:bg-green-600' },
    { title: 'Print Receipt', icon: Printer, color: 'bg-purple-500 hover:bg-purple-600' },
    { title: 'View Reports', icon: BarChart3, color: 'bg-orange-500 hover:bg-orange-600' }
  ];

  const recentTransactions = [
    { id: '#001234', amount: '$45.99', customer: 'John Doe', time: '2 mins ago', status: 'completed' },
    { id: '#001233', amount: '$127.50', customer: 'Jane Smith', time: '5 mins ago', status: 'completed' },
    { id: '#001232', amount: '$89.99', customer: 'Mike Johnson', time: '8 mins ago', status: 'completed' },
    { id: '#001231', amount: '$234.00', customer: 'Sarah Wilson', time: '12 mins ago', status: 'refunded' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
    }, 1500);
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('User logged out');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">RetailPOS Pro</h1>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{currentTime.toLocaleTimeString()}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products, customers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">Online</span>
              </div>

              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Admin User</span>
                <button 
                  onClick={handleLogout}
                  className="p-1 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm font-medium mt-1 ${stat.color}`}>
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    {stat.trend}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Management Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">Product Inventory</h2>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-white pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  onClick={handleSync}
                  className={`p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 ${isSyncing ? 'animate-spin' : ''}`}
                  disabled={isSyncing}
                >
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Display */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <ShoppingBag className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.stock} in stock
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.map(product => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <ShoppingBag className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{product.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {product.stock}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`${action.color} text-white p-4 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex flex-col items-center`}
                  >
                    <action.icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Modules */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">System Modules</h2>
                <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mainModules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className={`${module.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                      <module.icon className="w-8 h-8 mb-3" />
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-white/90 text-sm">{module.description}</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.id}</p>
                        <p className="text-sm text-gray-600">{transaction.customer}</p>
                        <p className="text-xs text-gray-500">{transaction.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{transaction.amount}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          transaction.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Sale */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Sale</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <Tag className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Scan Barcode</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <LayoutDashboard className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Select Products</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Process Payment</span>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database Connection</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Connected</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Printer Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Ready</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Sync</span>
                  <span className="text-sm text-gray-600">2 mins ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Storage Used</span>
                  <span className="text-sm text-gray-600">67%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}