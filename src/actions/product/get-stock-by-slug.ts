'use server';

import { prisma } from "@/lib/prisma";
// import { sleep } from "@/utils/sleep";

export const getStockBySlug = async( slug: string ): Promise<number> => {

    try {

        // await sleep(3);

        const stock = await prisma.product.findFirst({
        where: { slug },
        select: { inStock: true }
        });

        return stock?.inStock ?? 0;

    } catch (error) {
        console.error("Error en getStockBySlug:", error);
        return 0;
    }

}