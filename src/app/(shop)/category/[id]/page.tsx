import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
    params: {
        id: Category;
    }
}

export default async function categoryIdShopPage({params}:Props) {

    const { id } = await params;
    const products = seedProducts.filter( product => product.gender === id)
    // Record es propio de next 
    const labels: Record<Category, string> = {
        'men': ' para Hombres',
        'women': 'para Mujeres',
        'kid': 'para Niños',
        'unisex': 'para Todos',
        'dorado': 'Mug doradas',
        'plateado': 'Mug plateadas',
    }
    const labelsSubtitle: Record<Category, string> = {
        'men': ' Ellos',
        'women': 'Ellas',
        'kid': 'Niños',
        'unisex': 'Todos',
        'dorado': 'colección Mug doradas',
        'plateado': 'colección Mug plateadas',
    }

    // if ( id === 'woman' ) {
    //     notFound();
    // }

    return (
        <>
        <Title
            title={`Articulos ${labels[id]}`}
            subtitle={`productos para ${labelsSubtitle[id]}`}
            className="mb-2"
            />

        <ProductGrid
            products={ products }
            />

        </>
    );
}