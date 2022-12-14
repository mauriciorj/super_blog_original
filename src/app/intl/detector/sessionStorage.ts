let hasSessionStorageSupport: boolean | null = null;

const sessionStorageAvailable = () => {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;

  try {
    hasSessionStorageSupport =
      (window as any) !== 'undefined' && window.sessionStorage !== null;
    const testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'sessionStorage',

  lookup(options: { lookupSessionStorage: string }) {
    let found;

    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      const lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }

    return found;
  },

  cacheUserLanguage(lng: string, options: { lookupSessionStorage: string }) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  },
};
