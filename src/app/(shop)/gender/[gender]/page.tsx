export const revalidate = 60 //60 segundos

import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "../../../../actions";

import { redirect } from "next/navigation";
import { Gender } from "@prisma/client";



interface Props {
    params: {
        gender: string;
    },
    
    searchParams:{
        page?: string;
    }
}

export default  async function categoryIdShopPage({params, searchParams}:Props) {

    const { gender } =  params;

    const page = searchParams.page ? parseInt (searchParams.page) : 1;
    const{ products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
        page,
        gender: gender as Gender,
    });

    console.log({ currentPage})

    if ( products.length === 0 ) {
    redirect(`/gender/${ gender }`);
    }
    

    // Record es propio de next 
    const labels: Record<string, string> = {
        'men': ' para Hombres',
        'women': 'para Mujeres',
        'kid': 'para Niños',
        'unisex': 'para Todos',
        'dorado': 'Mug doradas',
        'plateado': 'Mug plateadas',
    }
    const labelsSubtitle: Record<string, string> = {
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
            title={`Articulos ${labels[gender]}`}
            subtitle={`productos para ${labelsSubtitle[gender]}`}
            className="mb-2"
            />

        <ProductGrid
            products={ products }
            />

        <Pagination totalPages={totalPages} />

        </>
    );
}