import React, { useEffect } from "react";
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
import { Upload } from "lucide-react";

const ApplicationForm = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    whyJoin: "",
    experience: "",
    linkedin: "",
    github: "",
  });

  // Smooth scroll to top when component mounts
  useSmoothScrollToTop();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
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
    // Handle form submission
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };

  const renderStep1 = () => {
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="github">GitHub Profile</Label>
          <Input
            id="github"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
          />
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="resume">Resume Upload</Label>
          <div className="flex items-center gap-2">
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <Label
              htmlFor="resume"
              className="cursor-pointer flex items-center gap-2 border rounded px-3 py-2"
            >
              <Upload className="w-4 h-4" />
              {formData.resume ? formData.resume.name : "Choose file"}
            </Label>
          </div>
        </div>
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="whyJoin">Why do you want to join TheNexUS?</Label>
          <Textarea
            id="whyJoin"
            name="whyJoin"
            value={formData.whyJoin}
            onChange={handleInputChange}
            rows={3}
            required
          />
        </div>
        <div>
          <Label htmlFor="experience">Years of Experience</Label>
          <Input
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    );
  };

  const totalSteps = 2;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Apply for Position</CardTitle>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-600">
            Step {step} of {totalSteps}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button type="button" onClick={handlePrev} variant="outline">
                  Previous
                </Button>
              )}
              {step < totalSteps ? (
                <Button type="button" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit Application</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
