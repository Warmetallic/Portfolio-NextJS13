"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-44 space-y-32 overflow-y-scroll z-10">
      <ContactForm />
    </main>
  );
}

export default page;
