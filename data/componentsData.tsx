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
];

export { ComponentsData };
