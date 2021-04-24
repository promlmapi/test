import i18n from 'i18next';
// import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

/*
 * Language files
 */

//English
import EnTranslationCommon from "./translations/En/Common";
import EnTranslationField from "./translations/En/Field";
import EnTranslationLayout from "./translations/En/Layout";
import EnTranslationOnBoarding from "./translations/En/OnBoarding";
import EnTranslationPage from "./translations/En/Page";
import EnTranslationPageAdmin from "./translations/En/PageAdmin";

//French
import FrTranslationCommon from "./translations/Fr/Common";
import FrTranslationField from "./translations/Fr/Field";
import FrTranslationLayout from "./translations/Fr/Layout";
import FrTranslationOnBoarding from "./translations/Fr/OnBoarding";
import FrTranslationPage from "./translations/Fr/Page";
import FrTranslationPageAdmin from "./translations/Fr/PageAdmin";

//Germany
import GrTranslationCommon from "./translations/Gr/Common";
import GrTranslationField from "./translations/Gr/Field";
import GrTranslationLayout from "./translations/Gr/Layout";
import GrTranslationOnBoarding from "./translations/Gr/OnBoarding";
import GrTranslationPage from "./translations/Gr/Page";
import GrTranslationPageAdmin from "./translations/Gr/PageAdmin";

//Spanish
import EsTranslationCommon from "./translations/Es/Common";
import EsTranslationField from "./translations/Es/Field";
import EsTranslationLayout from "./translations/Es/Layout";
import EsTranslationOnBoarding from "./translations/Es/OnBoarding";
import EsTranslationPage from "./translations/Es/Page";
import EsTranslationPageAdmin from "./translations/Es/PageAdmin";

//Chinese
import ZhTranslationCommon from "./translations/Zh/Common";
import ZhTranslationField from "./translations/Zh/Field";
import ZhTranslationLayout from "./translations/Zh/Layout";
import ZhTranslationOnBoarding from "./translations/Zh/OnBoarding";
import ZhTranslationPage from "./translations/Zh/Page";
import ZhTranslationPageAdmin from "./translations/Zh/PageAdmin";

//Polish
import PoTranslationCommon from "./translations/Po/Common";
import PoTranslationField from "./translations/Po/Field";
import PoTranslationLayout from "./translations/Po/Layout";
import PoTranslationOnBoarding from "./translations/Po/OnBoarding";
import PoTranslationPage from "./translations/Po/Page";
import PoTranslationPageAdmin from "./translations/Po/PageAdmin";

//Portuguese
import PrTranslationCommon from "./translations/Pr/Common";
import PrTranslationField from "./translations/Pr/Field";
import PrTranslationLayout from "./translations/Pr/Layout";
import PrTranslationOnBoarding from "./translations/Pr/OnBoarding";
import PrTranslationPage from "./translations/Pr/Page";
import PrTranslationPageAdmin from "./translations/Pr/PageAdmin";

//Russian
import RsTranslationCommon from "./translations/Rs/Common";
import RsTranslationField from "./translations/Rs/Field";
import RsTranslationLayout from "./translations/Rs/Layout";
import RsTranslationOnBoarding from "./translations/Rs/OnBoarding";
import RsTranslationPage from "./translations/Rs/Page";
import RsTranslationPageAdmin from "./translations/Rs/PageAdmin";

//Malay
import MsTranslationCommon from "./translations/Ms/Common";
import MsTranslationField from "./translations/Ms/Field";
import MsTranslationLayout from "./translations/Ms/Layout";
import MsTranslationOnBoarding from "./translations/Ms/OnBoarding";
import MsTranslationPage from "./translations/Ms/Page";
import MsTranslationPageAdmin from "./translations/Ms/PageAdmin";

//Arabic
import ArTranslationCommon from "./translations/Ar/Common";
import ArTranslationField from "./translations/Ar/Field";
import ArTranslationLayout from "./translations/Ar/Layout";
import ArTranslationOnBoarding from "./translations/Ar/OnBoarding";
import ArTranslationPage from "./translations/Ar/Page";
import ArTranslationPageAdmin from "./translations/Ar/PageAdmin";

//Vietnamese
import ViTranslationCommon from "./translations/Vi/Common";
import ViTranslationField from "./translations/Vi/Field";
import ViTranslationLayout from "./translations/Vi/Layout";
import ViTranslationOnBoarding from "./translations/Vi/OnBoarding";
import ViTranslationPage from "./translations/Vi/Page";
import ViTranslationPageAdmin from "./translations/Vi/PageAdmin";

//Italian
import ItTranslationCommon from "./translations/It/Common";
import ItTranslationField from "./translations/It/Field";
import ItTranslationLayout from "./translations/It/Layout";
import ItTranslationOnBoarding from "./translations/It/OnBoarding";
import ItTranslationPage from "./translations/It/Page";
import ItTranslationPageAdmin from "./translations/It/PageAdmin";

//Korean
import KoTranslationCommon from "./translations/Ko/Common";
import KoTranslationField from "./translations/Ko/Field";
import KoTranslationLayout from "./translations/Ko/Layout";
import KoTranslationOnBoarding from "./translations/Ko/OnBoarding";
import KoTranslationPage from "./translations/Ko/Page";
import KoTranslationPageAdmin from "./translations/Ko/PageAdmin";



//Initialize i18next
i18n.use(reactI18nextModule)
    // .use(XHR)
    .use(LanguageDetector)
    .init({
        //lng: 'en',
        fallbackLng: {
            'en-US': ['en'],
            default: ['en'],
        },
        defaultNS: ['layout'],
        ns: ['common', 'field', 'layout', 'onBoarding', 'page', 'pageAdmin'],
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                common: EnTranslationCommon,
                field: EnTranslationField,
                layout: EnTranslationLayout,
                onBoarding: EnTranslationOnBoarding,
                page: EnTranslationPage,
                pageAdmin: EnTranslationPageAdmin,
            },
            ar: {
                common: ArTranslationCommon,
                field: ArTranslationField,
                layout: ArTranslationLayout,
                onBoarding: ArTranslationOnBoarding,
                page: ArTranslationPage,
                pageAdmin: ArTranslationPageAdmin,
            },
            gr: {
                common: GrTranslationCommon,
                field: GrTranslationField,
                layout: GrTranslationLayout,
                onBoarding: GrTranslationOnBoarding,
                page: GrTranslationPage,
                pageAdmin: GrTranslationPageAdmin,
            },
            fr: {
                common: FrTranslationCommon,
                field: FrTranslationField,
                layout: FrTranslationLayout,
                onBoarding: FrTranslationOnBoarding,
                page: FrTranslationPage,
                pageAdmin: FrTranslationPageAdmin,
            },
            es: {
                common: EsTranslationCommon,
                field: EsTranslationField,
                layout: EsTranslationLayout,
                onBoarding: EsTranslationOnBoarding,
                page: EsTranslationPage,
                pageAdmin: EsTranslationPageAdmin,
            },
            zh: {
                common: ZhTranslationCommon,
                field: ZhTranslationField,
                layout: ZhTranslationLayout,
                onBoarding: ZhTranslationOnBoarding,
                page: ZhTranslationPage,
                pageAdmin: ZhTranslationPageAdmin,
            }, 
            po: {
                common: PoTranslationCommon,
                field: PoTranslationField,
                layout: PoTranslationLayout,
                onBoarding: PoTranslationOnBoarding,
                page: PoTranslationPage,
                pageAdmin: PoTranslationPageAdmin,
            },
            pr: {
                common: PrTranslationCommon,
                field: PrTranslationField,
                layout: PrTranslationLayout,
                onBoarding: PrTranslationOnBoarding,
                page: PrTranslationPage,
                pageAdmin: PrTranslationPageAdmin,
            },  
            rs: {
                common: RsTranslationCommon,
                field: RsTranslationField,
                layout: RsTranslationLayout,
                onBoarding: RsTranslationOnBoarding,
                page: RsTranslationPage,
                pageAdmin: RsTranslationPageAdmin,
            },
            ms: {
                common: MsTranslationCommon,
                field: MsTranslationField,
                layout: MsTranslationLayout,
                onBoarding: MsTranslationOnBoarding,
                page: MsTranslationPage,
                pageAdmin: MsTranslationPageAdmin,
            },  
            vi: {
                common: ViTranslationCommon,
                field: ViTranslationField,
                layout: ViTranslationLayout,
                onBoarding: ViTranslationOnBoarding,
                page: ViTranslationPage,
                pageAdmin: ViTranslationPageAdmin,
            },
            it: {
                common: ItTranslationCommon,
                field: ItTranslationField,
                layout: ItTranslationLayout,
                onBoarding: ItTranslationOnBoarding,
                page: ItTranslationPage,
                pageAdmin: ItTranslationPageAdmin,
            },
            ko: {
                common: KoTranslationCommon,
                field: KoTranslationField,
                layout: KoTranslationLayout,
                onBoarding: KoTranslationOnBoarding,
                page: KoTranslationPage,
                pageAdmin: KoTranslationPageAdmin,
            },                    
        },
        react: {
            wait: false,
                bindI18n: 'languageChanged loaded',
                bindStore: 'added removed',
                nsMode: 'default'
            }
        });

export default i18n;
