import type { MockupVariant, Project } from "@/config/projects";
import { SafeImage } from "@/components/ui/SafeImage";
import { ProjectMockup } from "./ProjectMockup";

/** Renders a real image when configured, otherwise the generated mockup. */
export function ProjectVisual({
  project,
  image,
  variant,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority,
}: {
  project: Project;
  image?: string;
  variant?: MockupVariant;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full">
      <ProjectMockup
        variant={variant ?? project.mockup.variant}
        from={project.mockup.from}
        to={project.mockup.to}
        title={project.title}
      />
      {image && (
        <SafeImage src={image} alt={`${project.title} screenshot`} fill sizes={sizes} priority={priority} className="object-cover" />
      )}
    </div>
  );
}
