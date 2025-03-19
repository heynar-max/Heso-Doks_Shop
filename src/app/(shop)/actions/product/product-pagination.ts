'use server';

import { Size } from "@/interfaces";
import { prisma } from "@/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
}

export const getPaginatedProductsWithImages = async({
    page = 1,
    take = 12,
}: PaginationOptions) => {

    if (isNaN ( Number(page))) page = 1;
    if (page < 1 ) page = 1;

    try {
        const products = await prisma.product.findMany({
            take: take,
            skip: ( page - 1 ) * take,
            include:{
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })


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