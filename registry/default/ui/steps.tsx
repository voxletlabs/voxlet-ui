import * as React from "react";

interface StepProps {
    title: string;
    children: React.ReactNode;
}

interface StepsProps {
    children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ title, children }) => {
    return (
        <div className="mb-4 last:mb-0">
            <h3 className="font-semibold text-md">{title}</h3>
            <div className="text-sm mt-2 text-muted-foreground">{children}</div>
        </div>
    );
};

const Steps: React.FC<StepsProps> = ({ children }) => {
    const filteredChildren = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child)
    ) as React.ReactElement<StepProps>[]; 

    return (
        <ol className="relative border-l border-muted-foreground/20 ml-3">
            {filteredChildren.map((child, index) => (
                <li key={index} className="mb-10 ml-6 last:mb-0">
                    <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground/20 -left-4 ring-8 ring-background">
                        <span className="text-sm font-medium text-foreground">{index + 1}</span>
                    </div>
                    {child}
                </li>
            ))}
        </ol>
    );
};

export { Step, Steps };
export type { StepProps, StepsProps };