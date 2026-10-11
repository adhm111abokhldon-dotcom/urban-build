"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import {
  RiArrowRightUpLine,
  RiErrorWarningLine,
  RiMailFill,
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

import Pretitle from "./Pretitle";
import Reveal from "./Reveal";

const serviceOptions = [
  "construction",
  "renovation",
  "restoration",
  "consulting",
  "other",
] as const;

type ServiceOption = (typeof serviceOptions)[number];
type FieldName = "name" | "email" | "phone" | "service" | "message";
type ValidationKey =
  | "required"
  | "nameShort"
  | "emailInvalid"
  | "phoneInvalid"
  | "messageShort";
type Status = "idle" | "preparing" | "ready";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[\d\s().-]{7,}$/;

const emptyValues: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/** Label + control + error message, shared by every field in the form. */
const Field = ({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 flex items-baseline gap-2 font-primary text-sm font-medium text-primary"
    >
      {label}
      {required ? (
        <span className="text-destructive" aria-hidden="true">
          *
        </span>
      ) : null}
      {hint ? (
        <span className="text-xs font-normal text-muted-foreground">
          ({hint})
        </span>
      ) : null}
    </label>

    {children}

    {error ? (
      <p
        id={`${id}-error`}
        role="alert"
        className="mt-2 flex items-center gap-1.5 text-sm text-destructive"
      >
        <RiErrorWarningLine className="shrink-0" aria-hidden="true" />
        {error}
      </p>
    ) : null}
  </div>
);

const Contact = () => {
  const t = useTranslations("contact");
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<
    Partial<Record<FieldName, ValidationKey>>
  >({});
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const next: Partial<Record<FieldName, ValidationKey>> = {};

    if (!values.name.trim()) next.name = "required";
    else if (values.name.trim().length < 2) next.name = "nameShort";

    if (!values.email.trim()) next.email = "required";
    else if (!emailPattern.test(values.email.trim()))
      next.email = "emailInvalid";

    if (values.phone.trim() && !phonePattern.test(values.phone.trim()))
      next.phone = "phoneInvalid";

    if (!values.message.trim()) next.message = "required";
    else if (values.message.trim().length < 10)
      next.message = "messageShort";

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Valid: move to the handoff panel. Nothing is transmitted from here —
    // the visitor reviews and sends the message themselves.
    setStatus("preparing");
    window.setTimeout(() => setStatus("ready"), 250);
  };

  const resetForm = () => {
    setValues(emptyValues);
    setErrors({});
    setStatus("idle");
  };

  const serviceItems = serviceOptions.map((option) => ({
    label: t(`form.options.${option}`),
    value: option as ServiceOption,
  }));

  const channels = [
    {
      id: "phone",
      href: siteConfig.phone.href,
      value: siteConfig.phone.display,
      label: t("channels.phone"),
      Icon: RiPhoneFill,
      external: false,
    },
    {
      id: "email",
      href: siteConfig.email.href,
      value: siteConfig.email.display,
      label: t("channels.email"),
      Icon: RiMailFill,
      external: false,
    },
    {
      id: "whatsapp",
      href: siteConfig.whatsapp,
      value: siteConfig.phone.display,
      label: t("channels.whatsapp"),
      Icon: RiWhatsappFill,
      external: true,
    },
  ];

  // Plain-text body shared by the email and WhatsApp handoffs.
  const serviceLabel = values.service
    ? t(`form.options.${values.service as ServiceOption}`)
    : "";

  const messageLines = [
    `${t("form.fields.name.label")}: ${values.name.trim()}`,
    `${t("form.fields.email.label")}: ${values.email.trim()}`,
    values.phone.trim()
      ? `${t("form.fields.phone.label")}: ${values.phone.trim()}`
      : "",
    serviceLabel
      ? `${t("form.fields.service.label")}: ${serviceLabel}`
      : "",
    "",
    values.message.trim(),
  ]
    .filter((line) => line !== "")
    .join("\n");

  const emailHref = `${siteConfig.email.href}?subject=${encodeURIComponent(
    t("form.ready.subject", { name: values.name.trim() }),
  )}&body=${encodeURIComponent(messageLines)}`;

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    messageLines,
  )}`;

  return (
    <section id="contact-us" className="pt-16 xl:pt-32">
      <div className="custom-container">
        <div className="grid gap-12 xl:grid-cols-[0.85fr_1.4fr] xl:gap-20">
          {/* Intro + direct channels */}
          <div>
            <Reveal>
              <Pretitle text={t("pretitle")} />
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mb-5">{t("title")}</h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="max-w-md">{t("description")}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul
                aria-label={t("channels.aria")}
                className="mt-10 border-t border-border"
              >
                {channels.map(({ id, href, value, label, Icon, external }) => (
                  <li key={id} className="border-b border-border">
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="group flex items-center gap-4 py-4"
                    >
                      <span
                        className="flex size-10 shrink-0 items-center justify-center bg-primary text-white transition-colors duration-200 group-hover:bg-accent group-hover:text-primary"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="eyebrow text-xs text-muted-foreground">
                          {label}
                        </span>
                        <span className="bidi-ltr truncate font-primary font-medium text-primary">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="bg-surface p-6 sm:p-8 xl:p-10">
              {status === "ready" ? (
                <motion.div
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="mb-3">{t("form.ready.title")}</h3>

                  <p className="mb-8 max-w-lg text-secondary">
                    {t("form.ready.description")}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={emailHref}
                      className="group flex h-13.5 flex-1 items-center justify-between gap-4 bg-accent ps-4 pe-1.25 text-primary transition-colors duration-200 hover:bg-[#f5c22f]"
                    >
                      <span className="tracked flex-1 text-center font-primary text-sm font-bold uppercase rtl:normal-case">
                        {t("form.ready.emailAction")}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center bg-primary text-white">
                        <RiMailFill className="text-xl" aria-hidden="true" />
                      </span>
                    </a>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex h-13.5 flex-1 items-center justify-between gap-4 border border-primary/20 ps-4 pe-1.25 text-primary transition-colors duration-200 hover:border-primary/50"
                    >
                      <span className="tracked flex-1 text-center font-primary text-sm font-bold uppercase rtl:normal-case">
                        {t("form.ready.whatsappAction")}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center bg-primary text-white">
                        <RiWhatsappFill
                          className="text-xl"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="tracked mt-8 font-primary text-sm font-bold uppercase text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-primary/70 rtl:normal-case"
                  >
                    {t("form.ready.editAction")}
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-busy={status === "preparing"}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <h3 className="mb-2">{t("form.title")}</h3>
                    <p className="text-sm">{t("form.description")}</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="name"
                      label={t("form.fields.name.label")}
                      required
                      error={
                        errors.name
                          ? t(`form.validation.${errors.name}`)
                          : undefined
                      }
                    >
                      <Input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        placeholder={t("form.fields.name.placeholder")}
                        autoComplete="name"
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="h-12"
                      />
                    </Field>

                    <Field
                      id="email"
                      label={t("form.fields.email.label")}
                      required
                      error={
                        errors.email
                          ? t(`form.validation.${errors.email}`)
                          : undefined
                      }
                    >
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder={t("form.fields.email.placeholder")}
                        autoComplete="email"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className="h-12"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="phone"
                      label={t("form.fields.phone.label")}
                      hint={t("form.optional")}
                      error={
                        errors.phone
                          ? t(`form.validation.${errors.phone}`)
                          : undefined
                      }
                    >
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        placeholder={t("form.fields.phone.placeholder")}
                        autoComplete="tel"
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className="h-12"
                      />
                    </Field>

                    <Field id="service" label={t("form.fields.service.label")}>
                      <Select
                        name="service"
                        items={serviceItems}
                        value={values.service || null}
                        onValueChange={(value) =>
                          updateField("service", value ?? "")
                        }
                      >
                        <SelectTrigger id="service" className="h-12! w-full">
                          <SelectValue
                            placeholder={t("form.fields.service.placeholder")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {t(`form.options.${option}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field
                    id="message"
                    label={t("form.fields.message.label")}
                    required
                    error={
                      errors.message
                        ? t(`form.validation.${errors.message}`)
                        : undefined
                    }
                  >
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      placeholder={t("form.fields.message.placeholder")}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className="min-h-32"
                    />
                  </Field>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={status === "preparing"}
                      className="group flex h-13.5 min-w-52.5 items-center justify-between gap-4 bg-accent ps-4 pe-1.25 text-primary transition-colors duration-200 enabled:hover:bg-[#f5c22f] disabled:cursor-progress disabled:opacity-70"
                    >
                      <span className="tracked flex-1 text-center font-primary text-sm font-bold uppercase rtl:normal-case">
                        {status === "preparing"
                          ? t("form.submitting")
                          : t("form.submit")}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center bg-primary text-white">
                        <RiArrowRightUpLine
                          className="text-xl transition-transform duration-300 group-hover:rotate-45 rtl:-scale-x-100"
                          aria-hidden="true"
                        />
                      </span>
                    </button>

                    <p className="max-w-56 text-xs leading-relaxed text-muted-foreground">
                      {t("form.privacy")}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
