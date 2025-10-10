
import React from 'react';

const Header: React.FC = () => {
  // A simplified navigation for demonstration
  const navItems = [
    { name: 'ホーム', href: '#' },
    { name: 'イベント', href: '#' },
    { name: '店舗情報', href: '#' },
    { name: 'メニュー', href: '#' },
    { name: 'キャンペーン', href: '#' },
    { name: 'メンバーズカード', href: '#' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2 border-b">
          <h1 className="w-48">
            <a href="#">
              <img src="https://www.pub-hub.com/assets/common/images/logo.png" alt="英国風パブ HUB | 82ALE HOUSE" />
            </a>
          </h1>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gray-800 text-white text-lg px-4 py-2 rounded hover:bg-gray-700 transition-colors">
              マイ店舗リスト
            </button>
            <a href="#" className="hidden md:block text-gray-800 font-bold text-lg">ENGLISH</a>
            <div className="hidden md:flex items-center space-x-2">
              <a href="#"><img src="https://www.pub-hub.com/assets/common/images/logo_facebook.png" alt="Facebook" className="h-6 w-6" /></a>
              <a href="#"><img src="https://www.pub-hub.com/assets/common/images/logo_twitter.png" alt="Twitter" className="h-6 w-6" /></a>
              <a href="#"><img src="https://www.pub-hub.com/assets/common/images/logo_instagram.png" alt="Instagram" className="h-6 w-6" /></a>
            </div>
             <button className="md:hidden text-3xl">&#9776;</button>
          </div>
        </div>
        <nav className="hidden md:flex justify-center items-center py-3 space-x-6 text-lg">
          {navItems.map(item => (
            <a key={item.name} href={item.href} className="text-gray-700 hover:text-red-700 font-bold">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;