'use server';

import { Size } from "@/interfaces";
import { prisma } from "@/lib/prisma";

export const getPaginatedProductsWithImages = async() => {

    try {
        const products = await prisma.product.findMany({
            take: 10,
            include:{
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })

        console.log(products)

        return {
            currentPage: 1,
            totalPages: 10,
            products: products.map ( product => ({
                ...product,
                images: product.ProductImage.map( image => image.url),
                sizes: product.sizes.map(size => size as Size)
            }))
        }
    }catch (error){
        console.error('Error al cargar los productos:', error);
        throw new Error('No se pudo cargar los productos');
    }
}