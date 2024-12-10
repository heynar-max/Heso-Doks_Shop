import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    }
}

export default async function categoryIdShopPage({params}:Props) {

    const { id } = await params;

    if ( id === 'women' ) {
        notFound();
    }

    return (
        <div>
            <h1>category Page {id}</h1>
        </div>
    );
}