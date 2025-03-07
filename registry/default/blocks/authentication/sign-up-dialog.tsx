import { Button } from "@/registry/default/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { LogIn } from "lucide-react";
import { useId } from "react";

export default function SignUpDialog() {
    const id = useId();
    return (
        <div className="min-h-[20rem] w-full flex items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Sign up</Button>
                </DialogTrigger>
                <DialogContent className="max-w-md z-[200]">
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
                            aria-hidden="true"
                        >
                           <LogIn className="size-4"/>
                        </div>
                        <DialogHeader>
                            <DialogTitle className="sm:text-center">Sign up Voxlet UI</DialogTitle>
                            <DialogDescription className="sm:text-center">
                                We just need a few details to get you started.
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-4">
                            <div className="*:not-first:mt-2">
                                <Label htmlFor={`${id}-name`}>Full name</Label>
                                <Input id={`${id}-name`} placeholder="Kaif" type="text" required />
                            </div>
                            <div className="*:not-first:mt-2">
                                <Label htmlFor={`${id}-email`}>Email</Label>
                                <Input id={`${id}-email`} placeholder="mail@yourcompany.com" type="email" required />
                            </div>
                            <div className="*:not-first:mt-2">
                                <Label htmlFor={`${id}-password`}>Password</Label>
                                <Input
                                    id={`${id}-password`}
                                    placeholder="Enter your password"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                        <Button type="button" className="w-full">
                            Sign up
                        </Button>
                    </form>

                    <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
                        <span className="text-muted-foreground text-xs">Or</span>
                    </div>

                    <Button variant="outline">Continue with Google</Button>

                    <p className="text-muted-foreground text-center text-xs">
                        By signing up you agree to our{" "}
                        <a className="underline hover:no-underline" href="#">
                            Terms
                        </a>
                        .
                    </p>
                </DialogContent>
            </Dialog>
        </div>
    );
}
