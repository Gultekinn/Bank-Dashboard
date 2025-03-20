import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dil kaynakları
const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      profile: "Profile",
      logout: "Logout",
      bankDashboard: "Bank Dashboard",
      overview: "Overview",
      transactions: "Transactions",
      accountDetails: "Account Details",
      transfers: "Transfers",
      billPayments: "Bill Payments",
      settings: "Settings",
    },
  },
  tr: {
    translation: {
      dashboard: "Kontrol Paneli",
      profile: "Profil",
      logout: "Çıkış",
      bankDashboard: "Banka Kontrol Paneli",
      overview: "Genel Bakış",
      transactions: "İşlemler",
      accountDetails: "Hesap Detayları",
      transfers: "Transferler",
      billPayments: "Fatura Ödemeleri",
      settings: "Ayarlar",
    },
  },
  az: {
    translation: {
      dashboard: "İdarə Paneli",
      profile: "Profil",
      logout: "Çıxış",
      bankDashboard: "Bank İdarə Paneli",
      overview: "Baxış",
      transactions: "Əməliyyatlar",
      accountDetails: "Hesab Detalları",
      transfers: "Transferlər",
      billPayments: "Fatura Ödənişləri",
      settings: "Ayarlar",
    },
  },
};

i18n
  .use(initReactI18next) // react-i18next entegrasyonu
  .init({
    resources,
    lng: 'en', // Başlangıç dili
    fallbackLng: 'en', // Yedek dil
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağlar
    },
  });

export default i18n;
