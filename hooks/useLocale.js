import {useParams, usePathname} from "next/navigation";
import {useMemo} from "react";

export default function useLocale() {
  const params = useParams();
  const pathname = usePathname();

  const localeFromParams = useMemo(() => {
    return params?.locale;
  }, [params.locale]);

  const localeFromPathname = useMemo(() => {
    return pathname?.split?.("/")?.[1];
  }, [pathname]);

  const finalLocale = useMemo(() => {
    const decision = localeFromParams ?? localeFromPathname;
    if (!!decision && ['en', 'vi'].includes(decision)) return decision;
    return 'en';
  }, [localeFromParams, localeFromPathname]);

  return finalLocale;
}