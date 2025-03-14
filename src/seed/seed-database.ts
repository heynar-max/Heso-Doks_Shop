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

    const { categories } = initialData;
    
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

    console.log('Seed Ejecutado');
}


(() => {
    main();
})();