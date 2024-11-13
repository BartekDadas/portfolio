import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '../i18n/translations';

interface LanguageState {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en',
      t: (path: string) => {
        const keys = path.split('.');
        let current: any = translations[get().language];
        
        for (const key of keys) {
          if (current[key] === undefined) {
            console.warn(`Translation missing for key: ${path}`);
            return path;
          }
          current = current[key];
        }
        
        return current;
      },
      setLanguage: (lang: string) => set({ language: lang })
    }),
    {
      name: 'language-storage'
    }
  )
);