let hasLocalStorageSupport: boolean | null = null;

const localStorageAvailable = () => {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;

  try {
    hasLocalStorageSupport =
      (window as any) !== 'undefined' && window.localStorage !== null;
    const testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'localStorage',

  lookup(options: { lookupLocalStorage: string }) {
    let found;

    if (options.lookupLocalStorage && localStorageAvailable()) {
      const lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }

    return found;
  },

  cacheUserLanguage(lng: string, options: { lookupLocalStorage: string }) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  },
};
