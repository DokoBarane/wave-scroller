import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const COUNTRIES = [
  "Bangladesh",
  "China",
  "India",
  "Indonesia",
  "Malaysia",
  "Pakistan",
  "Singapore",
  "Sri Lanka",
  "Taiwan",
  "Thailand",
  "UAE",
  "Vietnam",
];

interface FormData {
  name: string;
  mobile: string;
  country: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  country?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    country: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Name is required";
    if (!data.mobile.trim()) {
      next.mobile = "Mobile number is required";
    } else if (!/^[+\d\s()-]{7,20}$/.test(data.mobile.trim())) {
      next.mobile = "Enter a valid mobile number";
    }
    if (!data.country) next.country = "Country is required";
    if (!data.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = "Enter a valid email address";
    }
    if (!data.message.trim()) next.message = "Message is required";
    return next;
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nMobile: ${formData.mobile}\nCountry: ${formData.country}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:marina@vyomshipping.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
        <p className="text-lg font-semibold text-foreground">Thank you, {formData.name}.</p>
        <p className="mt-2 text-muted-foreground">
          Your email client should open with your enquiry details. If it does not open, please
          email us directly at{" "}
          <a href="mailto:marina@vyomshipping.com" className="text-primary underline">
            marina@vyomshipping.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-2"
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile">Mobile Number</Label>
        <Input
          id="mobile"
          type="tel"
          placeholder="+65 0000 0000"
          value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          aria-invalid={!!errors.mobile}
        />
        {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select
          value={formData.country}
          onValueChange={(value) => handleChange("country", value)}
        >
          <SelectTrigger id="country" aria-invalid={!!errors.country}>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2 lg:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your shipment, route, or requirements"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>

      <div className="lg:col-span-2">
        <Button
          type="submit"
          className="w-full rounded-full gradient-brand px-8 py-6 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:w-auto"
        >
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}
