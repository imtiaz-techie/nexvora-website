"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-[80vh] place-items-center bg-slate-50 px-4 pt-24 text-center">
      <div>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-50 text-red-500">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-3xl font-bold">Something went wrong</h1>
        <p className="mx-auto mt-3 max-w-md">An unexpected error occurred while loading this page. Please try again.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button onClick={reset}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Try again
          </Button>
          <ButtonLink href="/" variant="outline">Go to homepage</ButtonLink>
        </div>
      </div>
    </section>
  );
}
