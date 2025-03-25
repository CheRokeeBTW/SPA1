'use client'

import { usePathname } from 'next/navigation';
import ProductBtn from './ProductsBtn';
import ProductsList from './products/page';

export default function Home() {
  const pathname = usePathname();

  return (
    <div>
      {pathname === '/' && <ProductBtn />}
      {pathname === '/products' && <ProductsList />}
    </div>
  );
}