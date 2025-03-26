import { generateStaticParams } from './generateStatic';
import ClientProductDetails from './ClientProductDetails';

export { generateStaticParams };

interface ProductPageProps {
  params: Promise<{ id: string }>; 
}

export default async function ProductPage({ params }: ProductPageProps) {

  const resolvedParams = await params;
  const products = await generateStaticParams();
  const product = products.find((item: any) => item.id === resolvedParams.id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return <ClientProductDetails product={product} />;
}