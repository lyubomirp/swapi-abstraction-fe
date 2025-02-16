import Navigation from "@/app/components/Navigation";
import React from "react";
import ModelDetails from "@/app/components/ModelDetails";
import Main from "@/app/components/Main";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
          <main className="relative flex flex-row gap-8 w-full">
            <Navigation />
            <Main />
            <ModelDetails />
          </main>
        </div>
  );
}
