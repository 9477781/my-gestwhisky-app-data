
import React from 'react';

const ArrowIcon = () => (
  <svg className="w-3 h-3 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

const Footer: React.FC = () => {
  const links = [
    'LINK',
    'よくあるご質問',
    '株式会社ハブ 企業情報',
    '採用情報',
    '店舗物件情報',
    '個人情報保護方針',
  ];

  return (
    <footer className="bg-[#3c3c3c] text-white pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-10">
          <div>
            <h3 className="font-baskerville text-2xl border-b border-gray-500 pb-2 mb-4">LINK</h3>
            <ul>
              {links.map(link => (
                <li key={link} className="mb-2">
                  <a href="#" className="hover:underline text-lg"><ArrowIcon />{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="font-baskerville text-2xl border-b border-gray-500 pb-2 mb-4">HUB’S SNS</h3>
            <div className="flex items-center space-x-4">
              <a href="#"><img src="https://www.pub-hub.com/assets/common/images/logo_facebook.png" alt="Facebook" className="h-8 w-8" /></a>
              <a href="#"><img src="https://www.pub-hub.com/assets/common/images/logo_twitter.png" alt="Twitter" className="h-8 w-8" /></a>
              <a href="#"><img src="https://www.pub-hub.com/assets/common/images/logo_instagram.png" alt="Instagram" className="h-8 w-8" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2c2c2c] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-base text-gray-400">&copy; 2019 HUB inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;