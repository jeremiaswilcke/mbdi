"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="font-heading text-3xl text-primary text-center">
        {title}
      </h2>
      {description && (
        <p className="text-foreground/70 text-center mt-4">{description}</p>
      )}
      <div className="mt-12">{children}</div>
    </section>
  );
}
