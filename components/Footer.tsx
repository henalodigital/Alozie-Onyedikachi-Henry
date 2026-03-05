import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-sm">
        {PERSONAL_INFO.copyright}
      </p>
    </footer>
  );
};

export default Footer;