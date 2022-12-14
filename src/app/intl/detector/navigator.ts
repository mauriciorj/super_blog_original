// eslint-disable-next-line import/no-anonymous-default-export

interface NavigatorLanguage {
  userLanguage?: string;
}

export default {
  name: 'navigator',

  // eslint-disable-next-line no-unused-vars
  lookup(options: any) {
    const found = [] as any;

    if (typeof (navigator as NavigatorLanguage) !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      // Typescript doesnt accept userLanguage
      // if (navigator.userLanguage as any) {
      //   found.push(navigator.userLanguage);
      // }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.length > 0 ? found : undefined;
  },
};
