export interface Product {
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    // type: ValidType;
    gender: Category;
}

export type Category = 'men'|'women'|'kid'|'unisex'|'dorado'|'plateado';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'|'MUG';
export type ValidType = 'shirts'|'pants'|'hoodies'|'hats'|'tazas';