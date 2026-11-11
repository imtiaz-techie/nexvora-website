import {
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Factory,
  Globe,
  GraduationCap,
  Headset,
  HeartPulse,
  Landmark,
  Lightbulb,
  Megaphone,
  PenTool,
  Plane,
  ScanEye,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  Users,
  Workflow,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/**
 * Icon registry — config files reference icons by these keys.
 * To use a new Lucide icon, import it above and add it here.
 */
export const icons: Record<string, LucideIcon> = {
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Factory,
  Globe,
  GraduationCap,
  Headset,
  HeartPulse,
  Landmark,
  Lightbulb,
  Megaphone,
  PenTool,
  Plane,
  ScanEye,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  Users,
  Workflow,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp aria-hidden="true" {...props} />;
}
