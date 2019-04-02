import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_vi from 'react-intl/locale-data/vi';

addLocaleData(
  [
    ...locale_en,
    ...locale_vi
  ]
);