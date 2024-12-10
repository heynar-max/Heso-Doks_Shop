export interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'men'|'women'|'kid'|'unisex'|'dorado'|'plateado'
}

export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'|'11 onzas';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats'|'tazas';