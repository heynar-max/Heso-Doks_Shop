export const revalidate = 604800; //7 dias 

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";


    interface Props {
        params: {
            slug: string;
        }
    }

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
    ): Promise<Metadata> {
    // read route params
    const slug = params.slug;
    
    // fetch data
    const product = await getProductBySlug(slug);
    
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
    
    return {
        title: product?.title ?? "Producto no encontrado",
        description: product?.description ?? "",
        openGraph: {
        title: product?.title ?? "Producto no encontrado",
        description: product?.description ?? "",
        // images: [], // https://misitioweb.com/products/image.png
        images: [ `/products/${ product?.images[1] }`],
        },
    };
    }    


export default async function productSlugShopPage({params}: Props) {

    const { slug } = params;
    const product = await getProductBySlug(slug);

    console.log(product);

    if ( !product ) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">

            {/* slideshow  */}
            <div className="col-span-1 md:col-span-2" >

                {/* mobile slideshow  */}
                <ProductMobileSlideshow
                    title={ product.title}
                    images={product.images}
                    className="block md:hidden"
                />

                {/* desktop slideshow  */}
                <ProductSlideshow
                    title={ product.title}
                    images={product.images}
                    className="hidden md:block"
                />
            </div>

            {/* detalles  */}
            <div className="col-span-1 px-5">

                <StockLabel slug={product.slug}/>

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