import { QuantitySelector, SizeSelector } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";


    interface Props {
        params: {
            slug: string;
        }
    }


export default function productSlugShopPage({params}: Props) {

    const { slug } = params;
    const product = initialData.products.find( product => product.slug === slug);

    if ( !product ) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

            {/* slideshow  */}
            <div className="col-span-1 md:col-span-2" >
                hola
            </div>

            {/* detalles  */}
            <div className="col-span-1 px-5">
                <h1 className="antialiased font-bold text-xl">
                    {product.title}
                </h1>
                <p className="text-lg mb-5">
                    $ {product.price}
                </p>

                {/* selector de tallas  */}
                <SizeSelector
                    selectedSize={product.sizes[0]}
                    availablesizes={product.sizes}
                />

                {/* selector de cantidad  */}
                <QuantitySelector
                    quantity={1}
                />

                {/* boton  */}
                <button className="btn-primary my-5">
                    agregar al carrito
                </button>

                {/* descripcion  */}
                <h3 className="font-bold text-sm">
                    descripción
                </h3>
                <p className="font-light">
                    {product.description}
                </p>
            </div>

        </div>
    );
}