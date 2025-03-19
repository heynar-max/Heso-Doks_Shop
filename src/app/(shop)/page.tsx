import { ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "./actions";



export default async function Home() {

  const{ products } = await getPaginatedProductsWithImages();



  return (
    <>
        <Title
          title="Tienda"
          subtitle="Todos los productos"
          className="mb-2"
        />

      <ProductGrid
          products={ products }
        />

      </>
  );
}
