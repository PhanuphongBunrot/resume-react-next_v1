import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react'; // นำเข้าไอคอนจาก Lucide

function Contact() {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 text-lg mb-3">
          <Mail className="text-blue-500" size={24} />
          <span className="font-medium">phanuphongza23@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-lg mb-3">
          <Phone className="text-green-500" size={24} />
          <span className="font-medium">095-351-3104</span>
        </div>
        <div className="flex items-center gap-3 text-lg">
        <img src="/logo_line.png" alt="LINE Logo" className="w-9 h-9" />
          <span className="font-medium">nesza1123</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
