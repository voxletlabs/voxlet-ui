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
                name: 'Hero Section Two',
                path: 'heroSection/heroSectionTwo.tsx'
            },
            {
                name: 'Hero Section One',
                path: 'heroSection/heroSectionOne.tsx'
            },
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
            },
            {
                name: 'Pricing Three',
                path: 'pricing/pricingThree.tsx'
            },
            {
                name: 'Pricing Two',
                path: 'pricing/pricingTwo.tsx'
            },
        ]
    },
    {
        categoryName: 'Testimonials',
        supportLine: 'Build trust with authentic feedback and real customer stories.',
        imageUrl: '/blocks/pricing.png',
        blocks: [
            {
                name: 'Testimonials Section One',
                path: 'testimonialsSection/testimonialsSectionOne.tsx'
            },
        ]
    },
    {
        categoryName: 'Authentication',
        supportLine: 'Streamline user access with intuitive and customizable authentication UI.',
        imageUrl: '/blocks/pricing.png',
        blocks: [

            {
                name: 'Login Page Three',
                path: 'authentication/login-page-three.tsx'
            },
            {
                name: 'Login Page Four',
                path: 'authentication/login-page-four.tsx'
            },
            {
                name: 'Login Page One',
                path: 'authentication/login-page-one.tsx'
            },
            {
                name: 'Sign in dialog',
                path: 'authentication/sign-in-dialog.tsx'
            },
            {
                name: 'Sign up dialog',
                path: 'authentication/sign-up-dialog.tsx'
            },
            {
                name: 'Login Page Five',
                path: 'authentication/login-page-five.tsx'
            },
            {
                name: 'Login Page Two',
                path: 'authentication/login-page-two.tsx'
            },
        ]
    },
];

export { BlocksData, type BlockCategory, type Block };