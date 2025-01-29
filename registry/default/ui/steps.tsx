import * as React from "react"

interface StepProps {
    title: string
    children: React.ReactNode
}

interface StepsProps {
    children: React.ReactElement<StepProps>[] | React.ReactElement<StepProps>
}

const Step: React.FC<StepProps> = ({ title, children }) => {
    return (
        <div className="mb-4 last:mb-0">
            <h3 className="font-semibold text-md">{title}</h3>
            <div className="text-sm mt-2 text-muted-foreground">{children}</div>
        </div>
    )
}

const Steps: React.FC<StepsProps> = ({ children }) => {
    return (
        <ol className="relative border-l border-muted-foreground/20 ml-3">
            {React.Children.map(children, (child, index) => {
                const stepNumber = index + 1
                return (
                    <li className="mb-10 ml-6 last:mb-0">
                        <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground/20 -left-4 ring-8 ring-background">
                            <span className="text-sm font-medium text-foreground">{stepNumber}</span>
                        </div>
                        {React.cloneElement(child)}
                    </li>
                )
            })}
        </ol>
    )
}

export { Step, Steps }
export type { StepProps, StepsProps }
