'use client'

import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils";
import Image from "next/image"
import { useEffect, useState } from 'react';

const ProductosInCart = () => {
;
    const productsInCart = useCartStore( state => state.cart)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    },[]);

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
                        <span >
                            { product.size } - { product.title } ({ product.quantity })
                        </span>

                        <p className="font-bold">{ currencyFormat(product.price * product.quantity )  }</p>

                    </div>

                </div>


                ) )
            }
        </>
    )
}

export default ProductosInCart