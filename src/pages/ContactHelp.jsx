import React from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  HelpCircle,
  Send,
  Users,
  Building,
} from "lucide-react";

class ContactHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      submitted: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", this.state.formData);
    this.setState({ submitted: true });
    // Reset form after submission
    setTimeout(() => {
      this.setState({
        formData: { name: "", email: "", subject: "", message: "" },
        submitted: false,
      });
    }, 3000);
  };

  render() {
    const { formData, submitted } = this.state;

    const faqs = [
      {
        question: "How do I apply for a job?",
        answer:
          "Click on the job listing and follow the application process. Make sure to fill out all required fields and attach your resume.",
      },
      {
        question: "What is the hiring timeline?",
        answer:
          "The timeline varies by position, but typically takes 2-4 weeks from application to offer. We'll keep you updated throughout the process.",
      },
      {
        question: "Do you offer remote work?",
        answer:
          "Yes, we offer remote and hybrid options for many positions. Check individual job postings for work arrangement details.",
      },
      {
        question: "What are your benefits?",
        answer:
          "We offer competitive benefits including health insurance, paid time off, professional development opportunities, and flexible work arrangements.",
      },
      {
        question: "How can I prepare for an interview?",
        answer:
          "Research our company, prepare questions about the role and team, and be ready to discuss your relevant experience and achievements.",
      },
    ];

    const contactMethods = [
      {
        icon: Mail,
        title: "Email Us",
        description: "Send us an email and we'll respond within 24 hours",
        contact: "careers@thenexus.com",
        action: "mailto:careers@thenexus.com",
      },
      {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our recruitment team",
        contact: "+1 (555) 123-4567",
        action: "tel:+15551234567",
      },
      {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Get instant help through our chatbot",
        contact: "Available 24/7",
        action: "#",
      },
    ];

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact & Help Center
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                We're here to help you with any questions about careers,
                applications, or our services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  className="text-white bg-blue-600 hover:bg-white hover:text-blue-600"
                  onClick={() =>
                    document
                      .getElementById("faq")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the best way to reach us. We're committed to providing
                quick and helpful responses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      <p className="font-medium text-blue-600 mb-4">
                        {method.contact}
                      </p>
                      <Button
                        variant="outline"
                        className="group-hover:bg-blue-400 group-hover:border-blue-400"
                        onClick={() => window.open(method.action, "_blank")}
                      >
                        Contact Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="contact-form" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6 text-blue-600" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={this.handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={this.handleInputChange}
                            className="mt-1"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={this.handleInputChange}
                            className="mt-1"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium"
                        >
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={this.handleInputChange}
                          className="mt-1"
                          placeholder="What can we help you with?"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={this.handleInputChange}
                          rows={6}
                          className="mt-1 resize-none"
                          placeholder="Please provide details about your inquiry..."
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info & Office Hours */}
              <div className="space-y-8">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Building className="w-6 h-6 text-green-600" />
                      Office Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Headquarters
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          123 Tech Street
                          <br />
                          Innovation City, IC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Business Hours
                        </h4>
                        <div className="text-gray-600 space-y-1">
                          <p>
                            <span className="font-medium">
                              Monday - Friday:
                            </span>{" "}
                            9:00 AM - 6:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Saturday:</span> 10:00
                            AM - 4:00 PM
                          </p>
                          <p>
                            <span className="font-medium text-red-600">
                              Sunday:
                            </span>{" "}
                            Closed
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Response Time
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          We typically respond within{" "}
                          <span className="font-semibold text-purple-600">
                            24 hours
                          </span>{" "}
                          during business days. For urgent matters, please call
                          us directly.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Currently online and ready to help</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <HelpCircle className="w-6 h-6 text-purple-600" />
                      Quick Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Application Status</span>
                        <Button variant="link" className="text-blue-600 p-0">
                          Check Here
                        </Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Technical Issues</span>
                        <Button variant="link" className="text-green-600 p-0">
                          Report Issue
                        </Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span className="font-medium">General Inquiry</span>
                        <Button variant="link" className="text-purple-600 p-0">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our careers, application
                process, and company policies.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left hover:text-blue-600 py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactHelp;
