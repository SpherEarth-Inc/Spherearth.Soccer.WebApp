"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
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

const careersSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Required"),
  role: z.string().min(1, "Required"),
  message: z.string().min(10, "Required"),
  consent: z.literal(true, { message: "Consent required" }),
});

type CareersFormData = z.infer<typeof careersSchema>;

const roles = [
  "Admissions Advisor",
  "Coach",
  "Operations",
  "Volunteer",
  "Internship",
  "Corporate Role",
];

export function CareersForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: { role: roles[0] },
  });

  function onSubmit() {
    toast.success("Application received!", {
      description: "Our team will review your submission and respond if there is a suitable opportunity.",
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
          <Label>Role of Interest *</Label>
          <Select defaultValue={roles[0]} onValueChange={(v) => setValue("role", v as string)}>
            <SelectTrigger className={fieldClass}><SelectValue /></SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r} value={r}>{r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="message">Tell us about yourself *</Label>
        <Textarea id="message" {...register("message")} className="min-h-32 rounded-none" />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          className="mt-1"
          checked={watch("consent") === true}
          onChange={(e) => setValue("consent", e.target.checked as true)}
        />
        <span>I consent to SpherEarth Football Academy contacting me regarding career opportunities.</span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}
      <Button type="submit" disabled={isSubmitting} className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90">
        Submit Application
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
