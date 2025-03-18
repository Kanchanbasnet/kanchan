import { Copyright } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bottom-0 w-full text-gray-400 text-center py-4 flex items-center justify-center">
      {year} <Copyright className="w-4 h-4 ml-1 mr-1" /> Kanchan Basnet
    </div>
  );
};

export default Footer;
