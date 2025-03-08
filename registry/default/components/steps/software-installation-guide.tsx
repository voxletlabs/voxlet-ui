import { Steps, Step } from "@/registry/default/ui/steps";

export default function SoftwareSetupSteps() {
    return (
        <div className="max-w-md mx-auto py-8">
            <Steps>
                <Step title="Download Installer">
                    <p className="text-sm text-muted-foreground">Click the link to download the setup file.</p>
                    <a href="#" className="text-blue-500 underline mt-2 block">Download Software</a>
                </Step>

                <Step title="Run Installation">
                    <p className="text-sm text-muted-foreground">Open the downloaded file and follow the setup instructions.</p>
                    <p className="mt-2 text-sm font-medium">✔ Installing Dependencies...</p>
                    <p className="text-sm font-medium">✔ Copying Files...</p>
                </Step>

                <Step title="Complete Setup">
                    <p className="text-sm text-muted-foreground">Your software is ready to use!</p>
                    <p className="mt-2 text-green-500">✅ Installation Successful!</p>
                </Step>
            </Steps>
        </div>
    );
}
