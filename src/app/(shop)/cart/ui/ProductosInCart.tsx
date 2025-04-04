'use client'

import { QuantitySelector } from "@/components"
import { useCartStore } from "@/store"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from 'react';

const ProductosInCart = () => {

    const productsInCart = useCartStore( state => state.cart)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    });

    if( !loaded) {
        return <p>Loading....</p>
    }
    return (
        <>
            {
                productsInCart.map( product => (

                <div key={ `${product.slug}-${product.size}` } className="flex mb-5">
                    <Image
                        src={ `/products/${ product.image }` }
                        width={ 100 }
                        height={ 100 }
                        style={{
                            width: '110px',
                            height: '80px'
                        }}
                        alt={ product.title }
                        className="mr-5 rounded"
                    />

                    <div>
                        <Link 
                            className="hover:underline cursor-pointer"
                            href={`/product/${ product.slug }`}>
                            { product.size } - { product.title }
                        </Link>
                        <p>${ product.price }</p>
                        <QuantitySelector quantity={ 3 }
                        onQuantityChanged={value => console.log(value)}
                        />

                        <button className="underline mt-3">
                            Remover
                        </button>
                    </div>

                </div>


                ) )
            }
        </>
    )
}

export default ProductosInCart