"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import { Mail, User, MessageSquare, Loader2, CheckCircle } from "./icons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Refs for cleanup
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const errorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Name is required";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (trimmedName.length > 100) {
      newErrors.name = "Name must not exceed 100 characters";
    }

    if (!trimmedEmail) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address";
    } else if (trimmedEmail.length > 255) {
      newErrors.email = "Email is too long";
    }

    if (!trimmedMessage) {
      newErrors.message = "Message is required";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (trimmedMessage.length > 5000) {
      newErrors.message = "Message must not exceed 5000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    // Clear any existing timeouts
    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset to idle after 5 seconds
      successTimeoutRef.current = setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly.",
      );

      // Reset error state after 8 seconds
      errorTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      aria-label="Contact form"
      noValidate
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          <span className="flex items-center gap-2">
            <User size={16} className="text-primary" aria-hidden="true" />
            Name
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.name
              ? "border-destructive"
              : "border-border/60 focus-visible:border-primary/40"
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-primary" aria-hidden="true" />
            Email
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.email
              ? "border-destructive"
              : "border-border/60 focus-visible:border-primary/40"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          <span className="flex items-center gap-2">
            <MessageSquare
              size={16}
              className="text-primary"
              aria-hidden="true"
            />
            Message
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed resize-none ${
            errors.message
              ? "border-destructive"
              : "border-border/60 focus-visible:border-primary/40"
          }`}
          placeholder="Tell me about your project, idea, or just say hi..."
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col gap-3 pt-1">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting" || status === "success"}
          className="w-full rounded-xl"
          aria-live="polite"
        >
          {status === "submitting" && (
            <Loader2
              size={20}
              className="animate-spin mr-2"
              aria-hidden="true"
            />
          )}
          {status === "success" && (
            <CheckCircle size={20} className="mr-2" aria-hidden="true" />
          )}
          {status === "submitting"
            ? "Sending..."
            : status === "success"
              ? "Sent!"
              : "Send Message"}
        </Button>

        {status === "error" && (
          <p
            className="text-sm text-destructive text-center"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        )}

        {status === "success" && (
          <p
            className="text-sm text-primary text-center"
            role="status"
            aria-live="polite"
          >
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
      </div>
    </form>
  );
}
