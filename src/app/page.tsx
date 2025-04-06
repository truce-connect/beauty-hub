// pages/index.tsx
import type { NextPage } from 'next';
import Navbar  from '@/app/Navbar/page'
import Hero from '@/app/Hero/page'
import Wrapper from '@/app/wrapper/page'
import SupportNav from '@/app/SupportNav/page'
import SpaServices from '@/app/Spa-services/page'
import Footer from './Footer/page';
const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Wrapper/>
      <SupportNav/>
      <SpaServices/>
      <Footer/>
      
      {/* Optional: Add content later */}
    </div>
  );
};

export default Home;