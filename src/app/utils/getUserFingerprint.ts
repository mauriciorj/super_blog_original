const { ClientJS } = require('clientjs');

const GetUserFingerprint = () => {
  const client = new ClientJS();
  const getFingerprint = client.getFingerprint();

  return getFingerprint;

  //   const getBrowserData = client.getBrowserData();
  //   const getCustomFingerprint = client.getCustomFingerprint(...);

  //   const getUserAgent = client.getUserAgent();
  //   const getUserAgentLowerCase = client.getUserAgentLowerCase();

  //   const getBrowser = client.getBrowser();
  //   const getBrowserVersion = client.getBrowserVersion();
  //   const getBrowserMajorVersion = client.getBrowserMajorVersion();
  //   const isIE = client.isIE();
  //   const isChrome = client.isChrome();
  //   const isFirefox = client.isFirefox();
  //   const isSafari = client.isSafari();
  //   const isOpera = client.isOpera();

  //   const getEngine = client.getEngine();
  //   const getEngineVersion = client.getEngineVersion();

  //   const getOS = client.getOS();
  //   const getOSVersion = client.getOSVersion();
  //   const isWindows = client.isWindows();
  //   const isMac = client.isMac();
  //   const isLinux = client.isLinux();
  //   const isUbuntu = client.isUbuntu();
  //   const isSolaris = client.isSolaris();

  //   const getDevice = client.getDevice();
  //   const getDeviceType = client.getDeviceType();
  //   const getDeviceVendor = client.getDeviceVendor();

  //   const getCPU = client.getCPU();

  //   const isMobile = client.isMobile();
  //   const isMobileMajor = client.isMobileMajor();
  //   const isMobileAndroid = client.isMobileAndroid();
  //   const isMobileOpera = client.isMobileOpera();
  //   const isMobileWindows = client.isMobileWindows();
  //   const isMobileBlackBerry = client.isMobileBlackBerry();

  //   const isMobileIOS = client.isMobileIOS();
  //   const isIphone = client.isIphone();
  //   const isIpad = client.isIpad();
  //   const isIpod = client.isIpod();

  //   const getScreenPrint = client.getScreenPrint();
  //   const getColorDepth = client.getColorDepth();
  //   const getCurrentResolution = client.getCurrentResolution();
  //   const getAvailableResolution = client.getAvailableResolution();
  //   const getDeviceXDPI = client.getDeviceXDPI();
  //   const getDeviceYDPI = client.getDeviceYDPI();

  //   const getPlugins = client.getPlugins();
  //   const isJava = client.isJava();
  //   const getJavaVersion = client.getJavaVersion(); // functional only in java and full builds, throws an error otherwise
  //   const isFlash = client.isFlash();
  //   const isSilverlight = client.isSilverlight();
  //   const getSilverlightVersion = client.getSilverlightVersion();

  //   const getMimeTypes = client.getMimeTypes();
  //   const isMimeTypes = client.isMimeTypes();

  //   const isFont = client.isFont();
  //   const getFonts = client.getFonts();

  //   const isLocalStorage = client.isLocalStorage();
  //   const isSessionStorage = client.isSessionStorage();
  //   const isCookie = client.isCookie();

  //   const getTimeZone = client.getTimeZone();

  //   const getLanguage = client.getLanguage();
  //   const getSystemLanguage = client.getSystemLanguage();

  //   const isCanvas = client.isCanvas();
  //   const getCanvasPrint = client.getCanvasPrint();
};

export default GetUserFingerprint;
