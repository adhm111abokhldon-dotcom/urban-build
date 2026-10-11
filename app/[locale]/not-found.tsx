import { useTranslations } from "next-intl";

import Button from "@/components/Button";
import Pretitle from "@/components/Pretitle";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <main className="custom-container flex flex-1 flex-col items-start justify-center py-24 xl:py-40">
      <Pretitle text={t("pretitle")} />
      <h1 className="max-w-3xl text-primary!">{t("title")}</h1>
      <p className="mt-6 mb-10 max-w-xl text-secondary">{t("description")}</p>
      <Button text={t("action")} to="/" />
    </main>
  );
}
