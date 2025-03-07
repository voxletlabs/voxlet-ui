type Block = {
    name: string;
    path: string;
};

type BlockCategory = {
    categoryName: string;
    supportLine: string;
    imageUrl: string;
    blocks: Block[];
};

const BlocksData: BlockCategory[] = [
    {
        categoryName: 'Hero Section',
        supportLine: 'Make a stunning first impression with captivating hero sections.',
        imageUrl: '/blocks/hero-section.png',
        blocks: [
            {
                name: 'Hero Section One',
                path: 'heroSection/heroSectionOne.tsx'
            }
        ]
    },
    {
        categoryName: 'Pricing',
        supportLine: 'Make a stunning first impression with captivating hero sections.',
        imageUrl: '/blocks/pricing.png',
        blocks: [
            {
                name: 'Pricing One',
                path: 'pricing/pricingOne.tsx'
            }
        ]
    }
];

export { BlocksData, type BlockCategory, type Block };