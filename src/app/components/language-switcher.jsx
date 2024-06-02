"use client";

import next from "next";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    // console.log(e.target.value);

    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
    // startTransition(() => {
    // });
  };

  return (
    <>
      <label>
        <p className="sr-only">Change Language</p>
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
          className="bg-transparent py-2 text-white border-2 border-white rounded">
          <option value="id">Bahasa Indonesia</option>
          <option value="en">English</option>
        </select>
      </label>
    </>
  );
};

export default LanguageSwitcher;
