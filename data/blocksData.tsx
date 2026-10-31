type Block = {
    name: string;
    path: string;
    /** Showcase image for the block card (and preview embeds). */
    imageUrl: string;
    /** Featured blocks render before the (randomized) rest of the catalog. */
    featured?: boolean;
};

type BlockCategory = {
    categoryName: string;
    supportLine: string;
    blocks: Block[];
};

const BlocksData: BlockCategory[] = [
    {
        categoryName: 'Hero Section',
        supportLine: 'Make a stunning first impression with captivating hero sections.',
        blocks: [
            {
                name: 'Hero Section Two',
                path: 'heroSection/heroSectionTwo.tsx',
                imageUrl: '/blocks/hero-section/hero-section-two.png'
            },
            {
                name: 'Hero Section One',
                path: 'heroSection/heroSectionOne.tsx',
                imageUrl: '/blocks/hero-section/hero-section-one.png'
            },
        ]
    },
    {
        categoryName: 'Pricing',
        supportLine: 'Make a stunning first impression with captivating hero sections.',
        blocks: [
            {
                name: 'Pricing One',
                path: 'pricing/pricingOne.tsx',
                imageUrl: '/blocks/pricing.png'
            },
            {
                name: 'Pricing Three',
                path: 'pricing/pricingThree.tsx',
                imageUrl: '/blocks/pricing.png'
            },
            {
                name: 'Pricing Two',
                path: 'pricing/pricingTwo.tsx',
                imageUrl: '/blocks/pricing.png'
            },
        ]
    },
    {
        categoryName: 'Testimonials',
        supportLine: 'Build trust with authentic feedback and real customer stories.',
        blocks: [
            {
                name: 'Testimonials Section One',
                path: 'testimonialsSection/testimonialsSectionOne.tsx',
                imageUrl: '/blocks/testimonials.png'
            },
        ]
    },
    {
        categoryName: 'Authentication',
        supportLine: 'Streamline user access with intuitive and customizable authentication UI.',
        blocks: [
            {
                name: 'Login Page Three',
                path: 'authentication/login-page-three.tsx',
                imageUrl: '/blocks/authentication.png'
            },
            {
                name: 'Login Page Four',
                path: 'authentication/login-page-four.tsx',
                imageUrl: '/blocks/authentication.png'
            },
            {
                name: 'Login Page One',
                path: 'authentication/login-page-one.tsx',
                imageUrl: '/blocks/authentication.png'
            },
            {
                name: 'Sign in dialog',
                path: 'authentication/sign-in-dialog.tsx',
                imageUrl: '/blocks/authentication.png'
            },
            {
                name: 'Sign up dialog',
                path: 'authentication/sign-up-dialog.tsx',
                imageUrl: '/blocks/authentication.png'
            },
            {
                name: 'Login Page Five',
                path: 'authentication/login-page-five.tsx',
                imageUrl: '/blocks/authentication.png'
            },
            {
                name: 'Login Page Two',
                path: 'authentication/login-page-two.tsx',
                imageUrl: '/blocks/authentication.png'
            },
        ]
    },
    {
        categoryName: 'Footer',
        supportLine: `Design seamless, informative footers that complete your website's experience.`,
        blocks: [
            {
                name: 'Footer One',
                path: 'footer/footerOne.tsx',
                imageUrl: '/blocks/footer.png'
            },
            {
                name: 'Footer Two',
                path: 'footer/footerTwo.tsx',
                imageUrl: '/blocks/footer.png'
            },
        ]
    },
];

export { BlocksData, type BlockCategory, type Block };
