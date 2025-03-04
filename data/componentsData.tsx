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
    dependencies: Dependency[];
    cnUtilsFIle?: boolean;
    code: string;
    typesTable: TypeTable[];
}

const ComponentsData: ComponentDataType[] = [
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
];

export { ComponentsData };
