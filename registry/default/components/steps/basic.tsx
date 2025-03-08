import { Steps, Step } from "@/registry/default/ui/steps"; 

export default function BasicStepper() {
    return (
        <div className="flex items-center justify-center py-8">
            <Steps>
                <Step title="Step One">This is the first step.</Step>
                <Step title="Step Two">This is the second step.</Step>
                <Step title="Step Three">This is the third step.</Step>
            </Steps>
        </div>
    );
}
