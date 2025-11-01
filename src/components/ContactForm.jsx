import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

class ContactFormContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      },
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

  handleServiceChange = (value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        service: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    this.setState({
      formData: {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      },
    });
  };

  render() {
    const { formData } = this.state;

    return (
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Get In Touch</CardTitle>
                <CardDescription>
                  Have a question or want to work together? Send us a message!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={this.handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 987654xxxx"
                      value={formData.phone}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={this.handleServiceChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software">
                          Software Development
                        </SelectItem>
                        <SelectItem value="marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="plants">
                          Plant Marketplace
                        </SelectItem>
                        <SelectItem value="safety">Safety App</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

function ContactForm() {
  const { toast } = useToast();
  return <ContactFormContent toast={toast} />;
}

export default ContactForm;
