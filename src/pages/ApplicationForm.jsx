import React, { useEffect, useRef } from "react";
import { useSmoothScrollToTop } from "../hooks/useScrollAnimation";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Progress } from "../components/ui/progress";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

const ApplicationForm = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
    coverLetter: "",
    whyJoin: "",
    experience: "",
    linkedin: "",
    github: "",
  });

  const form = useRef();
  const { toast } = useToast();

  // Smooth scroll to top when component mounts
  useSmoothScrollToTop();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare template parameters from formData
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      linkedin: formData.linkedin,
      github: formData.github,
      coverLetter: formData.coverLetter,
      whyJoin: formData.whyJoin,
      resumeLink: formData.resumeLink,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_hqlsg7a", // Replace with your EmailJS service ID
        "template_lp6qd1t", // Replace with your EmailJS template ID
        templateParams,
        "_VV4GBo0vxYIJTND2" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast({
            title: "Application Submitted Successfully!",
            description: "We'll get back to you soon.",
            className: "bg-green-500 text-white border-green-600",
          });
          // Reset form or redirect
          setFormData({
            name: "",
            email: "",
            phone: "",
            resumeLink: "",
            coverLetter: "",
            whyJoin: "",
            experience: "",
            linkedin: "",
            github: "",
          });
          setStep(1);
        },
        (error) => {
          console.log("Email send failed:", error.text);
          toast({
            title: "Submission Failed",
            description: "Please try again or contact us directly.",
            variant: "destructive",
            className: "bg-red-500 text-white border-red-600",
          });
        }
      );
  };

  const renderStep1 = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <Label
            htmlFor="name"
            className="w-40 text-right text-sm font-medium text-gray-700"
          >
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            className="flex-1 h-11"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <Label
            htmlFor="email"
            className="w-40 text-right text-sm font-medium text-gray-700"
          >
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="flex-1 h-11"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <Label
            htmlFor="phone"
            className="w-40 text-right text-sm font-medium text-gray-700"
          >
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
            className="flex-1 h-11"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <Label
            htmlFor="experience"
            className="w-40 text-right text-sm font-medium text-gray-700"
          >
            Experience *
          </Label>
          <Input
            id="experience"
            name="experience"
            placeholder="e.g., 3 years"
            value={formData.experience}
            onChange={handleInputChange}
            className="flex-1 h-11"
            required
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Professional Profiles
          </h3>

          <div className="flex items-center gap-6 mb-4">
            <Label
              htmlFor="linkedin"
              className="w-40 text-right text-sm font-medium text-gray-700"
            >
              LinkedIn Profile
            </Label>
            <Input
              id="linkedin"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="flex-1 h-11"
            />
          </div>

          <div className="flex items-center gap-6">
            <Label
              htmlFor="github"
              className="w-40 text-right text-sm font-medium text-gray-700"
            >
              GitHub Profile
            </Label>
            <Input
              id="github"
              name="github"
              placeholder="https://github.com/yourusername"
              value={formData.github}
              onChange={handleInputChange}
              className="flex-1 h-11"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <div className="space-y-6">
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Resume & Documents
          </h3>
          <div className="flex items-center gap-6">
            <Label
              htmlFor="resumeLink"
              className="w-40 text-right text-sm font-medium text-gray-700"
            >
              Resume Link *
            </Label>
            <Input
              id="resumeLink"
              name="resumeLink"
              type="url"
              placeholder="Paste Google Drive / Dropbox Resume Link"
              value={formData.resumeLink}
              onChange={handleInputChange}
              className="flex-1 h-11"
              required
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Additional Information
          </h3>
          <div className="flex items-start gap-6 mb-4">
            <Label
              htmlFor="coverLetter"
              className="w-40 text-right text-sm font-medium text-gray-700 mt-2"
            >
              Cover Letter
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              placeholder="Tell us about yourself and why you're interested in this position..."
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
              className="flex-1 resize-none"
            />
          </div>

          <div className="flex items-start gap-6">
            <Label
              htmlFor="whyJoin"
              className="w-40 text-right text-sm font-medium text-gray-700 mt-2"
            >
              Why join TheNexUS? *
            </Label>
            <Textarea
              id="whyJoin"
              name="whyJoin"
              placeholder="What excites you about working with us? What are your career goals?"
              value={formData.whyJoin}
              onChange={handleInputChange}
              rows={3}
              className="flex-1 resize-none"
              required
            />
          </div>
        </div>
      </div>
    );
  };

  const totalSteps = 2;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Apply for Position
            </h1>
            <p className="text-lg text-gray-600">
              Join our team and help build innovative solutions
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-white border-b">
              <CardTitle className="text-xl text-gray-900">
                Application Form
              </CardTitle>
              <div className="mt-4">
                <Progress value={progress} className="w-full h-2" />
                <p className="text-sm text-gray-600 mt-2">
                  Step {step} of {totalSteps}
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <form ref={form} onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                <div className="flex justify-end mt-8 pt-6 border-t gap-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={handlePrev}
                      variant="outline"
                      className="px-6"
                    >
                      Previous
                    </Button>
                  )}
                  {step < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="px-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
