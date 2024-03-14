import Form from '@/app/ui/add-product-form';
import Breadcrumbs from '../ui/breadcrumbs';
import { fetchProducts } from '../lib/data';

export default async function Page() {
    //const products = await fetchProducts();

    return (
        <main>
            <Breadcrumbs
              breadcrumbs={[
                {label: 'Products', href: '/#' },
                {
                    label: 'Add Product',
                    href: '/#',
                    active: true,
                    
                },
              ]}
              />
              <Form />
             </main>
    );
}