import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-navy-950 px-4 pt-24 text-center">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="relative">
        <p className="font-display text-8xl font-extrabold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-200">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outlineLight">Contact us</ButtonLink>
        </div>
      </div>
    </section>
  );
}
