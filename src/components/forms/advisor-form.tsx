"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const advisorSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Required"),
  city: z.string().min(1, "Required"),
  experience: z.string().min(10, "Required"),
  motivation: z.string().min(20, "Please provide more detail"),
  consent: z.literal(true, { message: "Consent required" }),
});

type AdvisorFormData = z.infer<typeof advisorSchema>;

export function AdvisorForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdvisorFormData>({
    resolver: zodResolver(advisorSchema),
  });

  function onSubmit() {
    toast.success("Application received!", {
      description: "Our team will review your advisor application and respond through official channels.",
    });
    reset();
  }

  const fieldClass = "h-12 rounded-none bg-background focus-visible:border-input focus-visible:ring-0";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} className={fieldClass} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} className={fieldClass} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" {...register("phone")} className={fieldClass} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="city">City / Region *</Label>
          <Input id="city" {...register("city")} className={fieldClass} />
          {errors.city && <p className="text-xs text-destructive">{errors.city.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="experience">Relevant Experience *</Label>
        <Textarea id="experience" {...register("experience")} className="min-h-24 rounded-none" />
        {errors.experience && <p className="text-xs text-destructive">{errors.experience.message}</p>}
      </div>
      <div>
        <Label htmlFor="motivation">Why do you want to become an Admissions Advisor? *</Label>
        <Textarea id="motivation" {...register("motivation")} className="min-h-32 rounded-none" />
        {errors.motivation && <p className="text-xs text-destructive">{errors.motivation.message}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          className="mt-1"
          checked={watch("consent") === true}
          onChange={(e) => setValue("consent", e.target.checked as true)}
        />
        <span>I consent to SpherEarth Football Academy contacting me regarding this application.</span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}
      <Button type="submit" disabled={isSubmitting} className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90">
        Submit Advisor Application
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
