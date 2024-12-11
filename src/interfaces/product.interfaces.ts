export interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Sizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidType;
    gender: Category;
}

export type Category = 'men'|'women'|'kid'|'unisex'|'dorado'|'plateado';
export type Sizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'|'11 onzas';
export type ValidType = 'shirts'|'pants'|'hoodies'|'hats'|'tazas';