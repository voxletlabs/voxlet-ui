"use client";

import { useState } from "react";
import { Steps, Step } from "@/registry/default/ui/steps";
import { Input } from "@/registry/default/ui/input";
import { Textarea } from "@/registry/default/ui/textarea";
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";

export default function OnboardingFlow() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: "",
        phone: "",
        bio: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateStep = () => {
        if (step === 0) return formData.email.trim() !== "" && formData.password.trim() !== "";
        if (step === 1) return formData.fullName.trim() !== "" && formData.phone.trim() !== "";
        if (step === 2) return formData.bio.trim() !== "";
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((prev) => Math.min(prev + 1, 2));
        } else {
            alert("Please fill out all required fields before proceeding.");
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <div className="max-w-md mx-auto py-8 shadow-md rounded-lg">
            <Steps>
                <Step title="Create Account">
                    {step === 0 && (
                        <div>
                            <Label className="block text-sm font-medium mb-2">Email Address</Label>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="mb-2" required />

                            <Label className="block text-sm font-medium mb-2">Password</Label>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" required />
                        </div>
                    )}
                </Step>

                <Step title="Profile Details">
                    {step === 1 && (
                        <div>
                            <Label className="block text-sm font-medium mb-2">Full Name</Label>
                            <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className="mb-2" required />

                            <Label className="block text-sm font-medium mb-2">Phone Number</Label>
                            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                        </div>
                    )}
                </Step>

                <Step title="Tell Us About Yourself">
                    {step === 2 && (
                        <div>
                            <Label className="block text-sm font-medium mb-2">Your Bio</Label>
                            <Textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Write about yourself..." required />
                        </div>
                    )}
                </Step>
            </Steps>

            <div className="flex justify-between mt-8">
                <Button onClick={prevStep} disabled={step === 0} variant="outline">
                    Back
                </Button>
                <Button onClick={nextStep}>
                    {step === 2 ? "Finish" : "Next"}
                </Button>
            </div>
        </div>
    );
}
