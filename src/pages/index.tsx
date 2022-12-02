import * as React from 'react';

import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/components/layout/Layout';
import MiddleComponent from '@/components/MiddleComponent';


export default function HomePage() {
  return (
    <Layout>
      <div className='flex h-screen flex-col'>
        <HeaderComponent></HeaderComponent>
        <MiddleComponent></MiddleComponent>
        <FooterComponent></FooterComponent>
      </div>
    </Layout>
  );
}
