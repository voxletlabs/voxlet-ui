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
}

const ComponentsData: ComponentDataType[] = [
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
