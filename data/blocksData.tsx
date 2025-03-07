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
                path: 'pricing/pricingThree.tsx'
            },
            {
                name: 'Pricing Two',
                path: 'pricing/pricingOne.tsx'
            },
            {
                name: 'Pricing Three',
                path: 'pricing/pricingTwo.tsx'
            },
        ]
    },
    {
        categoryName: 'Authentication',
        supportLine: 'Streamline user access with intuitive and customizable authentication UI.',
        imageUrl: '/blocks/pricing.png',
        blocks: [
            {
                name: 'Login Page One',
                path: 'authentication/login-page-one.tsx'
            },
            {
                name: 'Login Page Two',
                path: 'authentication/login-page-two.tsx'
            },
        ]
    },
];

export { BlocksData, type BlockCategory, type Block };