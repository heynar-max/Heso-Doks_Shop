import { initialData } from "./seed";
import { prisma } from '../lib/prisma';


async function main() {

    // 1. Borrar registros previos
        await Promise.all( [
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]);

     //  Categorias

    const { categories, products } = initialData;
    
    const categoriesData = categories.map( (name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData
    });

    
    const categoriesDB = await prisma.category.findMany();
    
    const categoriesMap = categoriesDB.reduce( (map, category) => {
            map[ category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); //<string=shirt, string=categoryID>
    console.log(categoriesMap)

    // Productos


    products.forEach( async(product) => {

        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
        data: {
            ...rest,
            categoryId: categoriesMap[type]
        }
        })



    });


    console.log('Seed Ejecutado');
}


(() => {
    main();
})();