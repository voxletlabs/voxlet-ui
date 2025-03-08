interface Dependency {
    title: string;
    command: string;
}

interface TypeTable {
    title: string;
    table: {
        prop: string;
        type: string;
        default: string;
        description: string;
    }[];
}

export interface ComponentDataType {
    name: string;
    supportLine: string;
    imageUrl: string;
    demo: string[];
    dependencies?: Dependency[];
    cnUtilsFIle?: boolean;
    code: string;
    typesTable?: TypeTable[];
    credit?: {
        message: string;
        link: {
            text: string;
            url: string;
        };
    };
}

const ComponentsData: ComponentDataType[] = [
    {
        name: "Space Box",
        supportLine: "A cosmic-inspired interactive box with animated stars and shooting stars that react to user hover.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "space-box/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i framer-motion",
            },
        ],
        cnUtilsFIle: true,
        code: "space-box.tsx",
        typesTable: [
            {
                title: "SpaceBoxProps",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional custom class names for styling.",
                    },
                    {
                        prop: "highlightedWord",
                        type: "string",
                        default: "-",
                        description: "A word that appears bold before hovering over the component.",
                    },
                    {
                        prop: "text",
                        type: "string",
                        default: "-",
                        description: "The descriptive text that follows the highlighted word.",
                    },
                    {
                        prop: "animatedText",
                        type: "string",
                        default: "-",
                        description: "A scrolling text that appears when hovering over the component.",
                    },
                    {
                        prop: "starDensity",
                        type: '"low" | "medium" | "high"',
                        default: '"medium"',
                        description: "Controls the number of stars and shooting stars in the background animation.",
                    },
                ],
            },
        ],
    },
    {
        name: "Steps",
        supportLine: "A vertical stepper component for guiding users through multi-step processes.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "steps/basic.tsx",
            "steps/software-installation-guide.tsx",
            "steps/signin-onboarding.tsx",
        ],
        code: "steps.tsx",
        typesTable: [
            {
                title: "StepsProps",
                table: [
                    {
                        prop: "children",
                        type: "React.ReactNode",
                        default: "-",
                        description: "A collection of `<Step>` components that make up the stepper.",
                    },
                ],
            },
            {
                title: "StepProps",
                table: [
                    {
                        prop: "title",
                        type: "string",
                        default: "-",
                        description: "The title of the step.",
                    },
                    {
                        prop: "children",
                        type: "React.ReactNode",
                        default: "-",
                        description: "Content displayed inside the step, such as form fields or descriptions.",
                    },
                ],
            },
        ],
    },
    {
        name: "Magic Wand",
        supportLine: "An interactive Magic Wand effect that follows the cursor, animating a floating wand and revealing images within tiles as the cursor moves.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "magic-wand/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i framer-motion lucide-react",
            },
        ],
        code: "magic-wand.tsx",
        cnUtilsFIle: true,
        typesTable: [
            {
                title: "MagicWandContainerProps",
                table: [
                    {
                        prop: "children",
                        type: "React.ReactNode",
                        default: "-",
                        description: "Elements that will be wrapped by the magic wand effect.",
                    },
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Custom class names for additional styling of the container.",
                    },
                    {
                        prop: "wandClassName",
                        type: "string",
                        default: "undefined",
                        description: "Custom class names for additional styling of the floating wand.",
                    },
                ],
            },
            {
                title: "MagicWandTileProps",
                table: [
                    {
                        prop: "image",
                        type: "string",
                        default: "-",
                        description: "The source URL of the image to be revealed.",
                    },
                    {
                        prop: "icon",
                        type: "LucideIcon | IconConfig",
                        default: "undefined",
                        description: "Lucide icon or an object with an icon and optional className.",
                    },
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional class names for styling the tile.",
                    },
                ],
            },
            {
                title: "IconConfig",
                table: [
                    {
                        prop: "icon",
                        type: "LucideIcon",
                        default: "undefined",
                        description: "Lucide icon component.",
                    },
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional class names for styling the icon.",
                    },
                ],
            },
        ]
    },
    {
        name: "Animated Background",
        supportLine: "An animated background effect that highlights elements smoothly on hover or click, enhancing user interaction.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "animated-background/animated-nav-links-hover.tsx",
            "animated-background/animated-tabs-hover.tsx",
            "animated-background/animated-card-background-hover.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i motion",
            },
        ],
        code: "animated-background.tsx",
        cnUtilsFIle: true,
        typesTable: [
            {
                title: "AnimatedBackgroundProps",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Additional custom class names for styling the animated background.",
                    },
                    {
                        prop: "children",
                        type: "ReactElement<{ 'data-id': string }>[] | ReactElement<{ 'data-id': string }>",
                        default: "-",
                        description: "An array or a single React element with a `data-id` attribute used for tracking active elements.",
                    },
                    {
                        prop: "defaultValue",
                        type: "string",
                        default: "undefined",
                        description: "Specifies which item should be highlighted by default.",
                    },
                    {
                        prop: "onValueChange",
                        type: "(newActiveId: string | null) => void",
                        default: "undefined",
                        description: "Callback function triggered when the active element changes.",
                    },
                    {
                        prop: "transition",
                        type: "Transition",
                        default: "undefined",
                        description: "Defines the transition animation properties using the Motion library.",
                    },
                    {
                        prop: "enableHover",
                        type: "boolean",
                        default: "false",
                        description: "Enables hover-based activation instead of click-based interaction.",
                    },
                ],
            },
        ],
    },
    {
        name: "Scroll Progress",
        supportLine: "A scroll progress indicator that visually tracks page scroll with a circular progress bar.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "scroll-progress/usage.tsx",
        ],
        code: "scroll-progress.tsx",
        typesTable: [
            {
                title: "ScrollProgressProps",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional custom class names for styling.",
                    },
                ],
            },
        ],
    },
    {
        name: "Gravity Box",
        supportLine: "A physics-based tag cloud using Matter.js, where tags respond to gravity and collisions.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "gravity-box/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i matter-js",
            },
        ],
        code: "gravity-box.tsx",
        typesTable: [
            {
                title: "GravityBoxProps",
                table: [
                    {
                        prop: "tags",
                        type: "Tag[]",
                        default: "[]",
                        description: "An array of tags, each containing text and a background color.",
                    },
                ],
            },
            {
                title: "Tag",
                table: [
                    {
                        prop: "text",
                        type: "string",
                        default: "-",
                        description: "The display text for the tag.",
                    },
                    {
                        prop: "color",
                        type: "string",
                        default: "-",
                        description: "The background color of the tag.",
                    },
                ],
            },
        ],
    },
    {
        name: "Anime Navbar",
        supportLine: "A sleek and animated navigation bar built with Framer Motion for a smooth user experience.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "anime-navbar/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i framer-motion lucide-react",
            },
        ],
        cnUtilsFIle: true,
        code: "anime-navbar.tsx",
        typesTable: [
            {
                title: "NavBarProps",
                table: [
                    {
                        prop: "items",
                        type: "NavItem[]",
                        default: "[]",
                        description: "An array of navigation items, each containing a name, URL, and icon.",
                    },
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional custom class names for styling.",
                    },
                    {
                        prop: "defaultActive",
                        type: "string",
                        default: "undefined",
                        description: "Specifies which navigation item should be active by default.",
                    },
                ],
            },
            {
                title: "NavItem",
                table: [
                    {
                        prop: "name",
                        type: "string",
                        default: "undefined",
                        description: "The label for the navigation item.",
                    },
                    {
                        prop: "url",
                        type: "string",
                        default: "undefined",
                        description: "The destination URL for the navigation item.",
                    },
                    {
                        prop: "icon",
                        type: "LucideIcon",
                        default: "undefined",
                        description: "The icon representing the navigation item.",
                    },
                ],
            },
        ],
        credit: {
            message: "Inspired by Jatin Yadav's Anime Navbar component on",
            link: {
                text: "21st.dev.",
                url: "https://21st.dev/jatin-yadav05/anime-navbar/default",
            },
        },
    },
    {
        name: "Tube Light Navbar",
        supportLine: "A sleek, interactive navigation bar with a dynamic lighting effect, perfect for modern UIs.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "tubelight-navbar/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i framer-motion lucide-react",
            },
        ],
        cnUtilsFIle: true,
        code: "tubelight-navbar.tsx",
        typesTable: [
            {
                title: "NavBarProps",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional custom class names for styling.",
                    },
                    {
                        prop: "items",
                        type: "NavItem[]",
                        default: "[]",
                        description: "An array of navigation items containing name, URL, and icon.",
                    },
                ],
            },
            {
                title: "NavItem",
                table: [
                    {
                        prop: "name",
                        type: "string",
                        default: "undefined",
                        description: "The label for the navigation item.",
                    },
                    {
                        prop: "url",
                        type: "string",
                        default: "undefined",
                        description: "The destination URL for the navigation item.",
                    },
                    {
                        prop: "icon",
                        type: "LucideIcon",
                        default: "undefined",
                        description: "The icon representing the navigation item.",
                    },
                ],
            },
        ],
        credit: {
            message: "The inspiration for this component is directly taken from",
            link: {
                text: "Serenity UI",
                url: "https://www.serenity-ui.com/components/navbars/tubelightnavbar",
            },
        },
    },
    {
        name: "Download Button",
        supportLine: "A dynamic button with real-time download status and progress tracking.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "download-button/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Shadcn Components",
                command: "npx shadcn@latest add button",
            },
        ],
        cnUtilsFIle: true,
        code: "download-button.tsx",
        typesTable: [
            {
                title: "Props",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional custom class names for styling.",
                    },
                    {
                        prop: "downloadStatus",
                        type: `"idle" | "downloading" | "downloaded" | "complete"`,
                        default: `"idle"`,
                        description: "Represents the current state of the download process.",
                    },
                    {
                        prop: "progress",
                        type: "number",
                        default: "0",
                        description: "Indicates the download progress percentage (0-100).",
                    },
                    {
                        prop: "onClick",
                        type: "() => void",
                        default: "undefined",
                        description: "Callback function triggered when the button is clicked.",
                    },
                ],
            },
        ],
    },
    {
        name: "Emogi Nav",
        supportLine: "Emogi nav, think different.",
        imageUrl: "/components/emogi-nav.png",
        demo: [
            "emogi-nav/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Shadcn Components",
                command: "npx shadcn@latest add tooltip",
            },
        ],
        code: "emogiNav.tsx",
        typesTable: [
            {
                title: "EmogiNavProps",
                table: [
                    {
                        prop: "navItems",
                        type: "NavItem[]",
                        default: "-",
                        description: "An array of `NavItem` objects representing the emoji navigation links.",
                    },
                ],
            },
            {
                title: "NavItem",
                table: [
                    {
                        prop: "label",
                        type: "string",
                        default: "-",
                        description: "An array of `NavItem` objects representing the emoji navigation links.",
                    },
                    {
                        prop: "href",
                        type: "string",
                        default: "-",
                        description: "The URL link associated with the emoji navigation item.",
                    },
                    {
                        prop: "emogi",
                        type: "string",
                        default: "-",
                        description: "The image URL or path for the animated emoji.",
                    },
                    {
                        prop: "alt",
                        type: "string",
                        default: "-",
                        description: "Alt text for the emoji image to improve accessibility.",
                    },
                ],
            },
        ],
    },
    {
        name: "Pendulum",
        supportLine: "Bring your UI to life with the smooth, captivating motion of the Pendulum component.",
        imageUrl: "/components/pendulum.png",
        demo: [
            "pendulum/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i framer-motion",
            },
        ],
        code: "pendulum.tsx",
        typesTable: [
            {
                title: "Props",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "-",
                        description: "Optional prop for adding custom styles to the root div.",
                    },
                ],
            },
        ],
    },
    {
        name: "Circular Navigation",
        supportLine: "An interactive circular menu for seamless navigation throughout your application.",
        imageUrl: "/components/circularNavigation.png",
        demo: [
            "circular-navigation/usage.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i framer-motion lucide-react",
            },
        ],
        code: "circularNavigation.tsx",
        typesTable: [
            {
                title: "CircularNavigationProps",
                table: [
                    {
                        prop: "navItems",
                        type: "NavItem[]",
                        default: "[]",
                        description: "An array of navigation items, each containing a name, icon, and href.",
                    },
                    {
                        prop: "isOpen",
                        type: "boolean",
                        default: "false",
                        description: "Controls whether the circular navigation menu is open or closed.",
                    },
                    {
                        prop: "toggleMenu",
                        type: "() => void",
                        default: "undefined",
                        description: "Function to toggle the menu's open/close state.",
                    },
                ],
            },
            {
                title: "NavItem",
                table: [
                    {
                        prop: "name",
                        type: "string",
                        default: "''",
                        description: "The display name of the navigation item.",
                    },
                    {
                        prop: "icon",
                        type: "React.ComponentType<{ className?: string }>",
                        default: "undefined",
                        description: "The icon component for the navigation item.",
                    },
                    {
                        prop: "href",
                        type: "string",
                        default: "''",
                        description: "The URL link for the navigation item.",
                    },
                ],
            },
        ],
    },
    {
        name: "Loader Button",
        supportLine: "Seamless loading with a customizable Loader Button.",
        imageUrl: "/components/loader-button.png",
        demo: [
            "loaderButton/usage.tsx",
            "loaderButton/variants.tsx",
        ],
        dependencies: [
            {
                title: "Install Dependencies",
                command: "npm i lucide-react",
            },
            {
                title: "Install Shadcn Components",
                command: "npx shadcn@latest add button",
            },
        ],
        code: "loaderButton.tsx",
        typesTable: [
            {
                title: "Props",
                table: [
                    {
                        prop: "className",
                        type: "string",
                        default: "undefined",
                        description: "Optional class names to style the button component.",
                    },
                    {
                        prop: "isLoading",
                        type: "boolean",
                        default: "false",
                        description: "A boolean indicating whether the loader animation should be displayed.",
                    },
                    {
                        prop: "buttonVariant",
                        type: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined`,
                        default: `"default"`,
                        description: "Defines the style variant of the button, can be one of the provided Tailwind-based variants like 'default', 'destructive', etc.",
                    },
                    {
                        prop: "children",
                        type: "React.ReactNode",
                        default: "undefined",
                        description: "The content to be rendered inside the button, typically text or icons.",
                    },
                    {
                        prop: "onClick",
                        type: "(event: React.MouseEvent<HTMLButtonElement>) => void",
                        default: "undefined",
                        description: "Optional onClick event handler that gets triggered when the button is clicked.",
                    },
                ],
            },
        ],
    },
    {
        name: "MacBook Keyboard",
        supportLine: "An interactive, minimalist MacBook-inspired keyboard component for seamless user engagement.",
        imageUrl: "/components/MacBookKeyboard.png",
        demo: [
            "macbook-keyboard/usage.tsx",
        ],
        code: "macbook-keyboard.tsx",
    },
];

export { ComponentsData };
