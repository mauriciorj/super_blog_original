import { generalInfo } from '../utils/constants';

export const enUs = {
  // GENERAL
  contactEmail: generalInfo.emailContact,
  contactUs: 'Contact Us',
  contactLabel: 'Contact',
  headerMenu: 'Menu',
  logo: generalInfo.appName,
  ogImage:
    'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw3zWqJQAuNyOHVenkS6yB7Q&ust=1667606736635000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKD28a2dk_sCFQAAAAAdAAAAABAD',
  siteName: generalInfo.appName,
  seoOgUrl: 'http://www.superblog.com',
  tileImage:
    'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw3zWqJQAuNyOHVenkS6yB7Q&ust=1667606736635000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKD28a2dk_sCFQAAAAAdAAAAABAD',

  // MENU AND FOOTER (USER NOT LOGGED)
  signinTitle: 'Sing In',
  signupTitle: 'Create Account',
  toolsMenu: 'Tools',
  injectCookies: 'Inject Cookies',
  home: 'Home',

  // MENU AND FOOTER (USER LOGGED)
  adminHeaderMenuTitle: 'Menu',
  userBilling: 'Billing',
  userProfile: 'Profile',
  userSavedPosts: 'Saved Posts',
  userSecurity: 'Security',
  userSettings: 'Settings',
  userLogOut: 'Log Out',

  // PASSWORD RULES
  passwordMinChar: 'Minimum 8 characters',
  passwordOneUpperCaseLetter: 'At least 1 upper case letter',
  passwordOneLowerCaseLetter: 'At least 1 lower case letter',
  passwordOneDigit: 'At least 1 digit',
  passwordOneSpecialChar: 'At least 1 special character',

  // ADMIN: ALERT BANNER
  alertBannerTitle: 'IMPORTANT:',
  alertBannerDescription:
    'Please update your profile to have access to all features',

  // PAGE: ADMIN - BILLING
  seoUserBillingPageTitle: 'Billing Area',
  seoUserBillingPageDescription: 'Welcome to Billing Area',
  userBillingTitle: 'Billing',
  userBillingTableTitle: 'Bills',
  userBillingTableSelected: 'selected',
  userBillingTableDownload: 'download',
  userBillingSubscriptionTitle: 'Subscription',
  userBillingSubscriptionPlan: 'Current Plan:',
  userBillingSubscriptionUpgradePlan: 'UPGRADE',
  userBillingSubscriptionNextPayment: 'Next Payment:',
  userBillingCancelSubscriptionCta: 'Cancel Subscription',

  // PAGE: ADMIN - PROFILE
  seoUserProfilePageTitle: 'Admin Area',
  seoUserProfilePageDescription: 'Welcome to Admin Area',
  userProfileTitle: 'User Profile',
  userProfileSubTitlePersonalInformation: 'Personal Information',
  userProfileSubTitleBirthdate: 'Birthdate',
  userProfileSubTitleAddress: 'Address',
  userProfileFirstNameError: 'Please Insert a Valid Name',
  userProfileBirthDateError: 'Please Insert a Valid Birth Date',
  errorUserProfileUpdateNotEnoughTime:
    'You can only update your profile each 7 days. Unfortunately you can not update it right now.',
  errorUserProfileUpdateGeneric:
    'Ops, something went wrong. Please try again later',
  seoUserProfileInfoUpdatedTitle: 'Congrats',
  seoUserProfileInfoUpdatedDescription: 'Your information was updated!',

  // PAGE: ADMIN - SAVED POSTS
  seoUserSavedPostsPageTitle: 'Admin Area',
  seoUserSavedPostsPageDescription: 'Welcome to Admin Area',
  userSavedPostsTitle: 'Saved Posts',
  userSavedPostsTableTitle: 'Posts',
  userSavedPostsTableSelected: 'selected',
  userSavedPostsTableDownload: 'delete',

  // PAGE: ADMIN - SECURITY
  seoUserSecurityPageTitle: 'Security Area',
  seoUserSecurityPageDescription: 'Welcome to security area',
  userSecurityTitle: 'Security',
  userSecurityResetPasswordCta: 'Reset Password',
  userCancelSecurityResetPasswordCta: 'Cancel Reset Password',

  // PAGE: ADMIN - SETTINGS
  seoUserSettingsPageTitle: 'Settings Area',
  seoUserSettingsPageDescription: 'Welcome to settings area',
  userSettingsTitle: 'Settings',
  userSettingsSubTitle: 'Language',
  userSettingsResetPasswordCta: 'Set Default Language',
  deactivateAccountTitle: 'Deactivate Account',
  deactivateAccountCta: 'Deactivate Account',
  cancelDeactivateAccountCta: 'Cancel Deactivation',
  step01Title: 'Step 01',
  step01Instruction: 'Slide the button to the end.',
  step02Title: 'Step 02',
  step02Instruction: 'Insert %s and hit the %s button',
  step02SpecialWord: 'deactivate',
  step02ErrorMessage: 'Please insert the correct word',

  // PAGE: CONTACT US
  seoContactUsPageTitle: 'Contact Us',
  seoContactUsPageDescription: 'Contact Us',
  seoContactUsPageKeywords: 'contact, contact us, send a message',
  contactUsTitle: 'Contact Us',
  contactUsSubTitle: 'Send your message',
  emailContactUsForm: 'Email',
  emailErrorContactUsForm: 'Please insert a valid email',
  firstNameContactUsForm: 'First Name',
  firstNameErrorContactUsForm: 'Please insert a name',
  subjectContactUsForm: 'Subject',
  subjectErrorContactUsForm: 'Please insert a subject',
  textContactUsForm: 'Text',
  textErrorContactUsForm: 'Please insert a text',
  ctaContactUsForm: 'Send Message',
  ctaContactUsSuccessTitle: 'Message Sent',
  ctaContactUsSuccesDescription: 'Our team will reply your message asap',
  formErrorContactUsFormTitle: 'Ops :(',
  formErrorContactUsFormDescription:
    'Somenthing went wrong. Please try again later or send an email to: %s',

  // PAGE: FORGET PASSWORD
  seoForgetPasswordPageTitle: 'Forget Password',
  seoForgetPasswordDescription: 'Forget Password',
  seoForgetPasswordKeywords: 'password, forget password, password recovery',
  verificationEmailFormTitle: 'Please insert your email',
  verificationCodeFormTitle:
    'Please insert the code sent to your email and the new password',

  // PAGE: HELP CENTER
  seoHelpCenterPageTitle: 'Help Center',
  seoHelpCenterDescription: 'Help Center',
  seoHelpCenterKeywords: 'help center, support, contact us',
  helpCenterTitle: 'Help Center',

  // PAGE: HOME
  seoHomePageTitle: 'Super Blog Home Page',
  seoHomePageDescription: 'Super Blog Home Page',
  seoHomePageKeywords: 'super blog',

  // PAGE: LINKS
  seoTopAppsPageTitle: 'Best Links',
  seoTopAppsPageDescription: 'List of the Best Links',
  seoTopAppsPageKewords: 'links, app, apps, best apps, best links',

  // PAGE: LOADING
  seoLoadingPageTitle: 'Loading Page Content',
  seoLoadingPageDescription: 'Loading Page Content',
  pageLoadingText: 'Loading...',

  // PAGE: POST
  notSubscriber: 'Are you not a subscriber ?',
  subscribeCTA: 'Subscribe Now',
  otherPosts: 'Other Posts',
  relatedPosts: 'Related Posts',
  otherTopicsToPost: 'Other Topics',
  morePosts: 'More Posts',

  // PAGE: SIGN IN
  seoSigninPageTitle: 'SignIn',
  seoSigninPageDescription: 'Signin to our app',
  seoSigninPageKeywords: 'signin, sign in',
  singInFormTitle: 'SignIn',

  // PAGE: SIGN UP
  seoSignupPageTitle: 'Create Your Account',
  seoSignupPageDescription:
    'Create your account right now in the best internet system',
  seoSignupPageDKeywords: 'account, create account, create your account',
  signupFormTitle: 'Create Account',
  signUpSubmitCta: 'Create Account',
  verifyCodeText:
    'Click here if you already have an account but need to verify your email.',

  // PAGE: VERIFY CODE
  seoVerifyCodePageTitle: 'SignIn',
  seoVerifyCodePageDescription: 'Singin to our app',
  verifyCodeFormTitle: 'Verify your code',
  sendCodeAgainLabel: 'Click here to re-send the code.',
  emailFormTitle: 'Please insert your email',

  // PAGE: TOOLS -> INJECT COOKIES
  seoToolsInjectCookiesTitle: 'Inject Cookies',
  seoToolsInjectCookiesDescription: 'Inject Cookies',
  seoToolsInjectCookiesKeywords: 'cookies, inject cookies, tools, black hat',
  toolsInjectCookiesTitle: 'Inject Cookies',
  toolsInjectCookiesFirstStep: 'Select Countries',
  toolsInjectCookiesSecondStep: 'Select Quantity of Cookies',
  toolsInjectCookiesAvailableQuanitity: 'Total of available cookies:',
  toolsInjectCookiesCta: 'Open websites',
  toolsInjectCookiesCtaLoading: 'Opening...',

  // PAGE: TOPICS
  seoTopicsPageTitle: 'Topics',
  seoTopicsPageDescription: 'Discovery more usign the topics',
  seoTopicsPageDKeywords: 'topics, more content',

  // FORM LABELS
  emailInputLabel: 'Please insert your email',
  passwordInputLabel: 'Password',
  firstNameLabelInputLabel: 'First Name',
  lastNameLabelInputLabel: 'Last Name',
  dayInputLable: 'Day',
  monthInputLable: 'Month',
  yearInputLable: 'Year',
  countryInputLable: 'Country',
  stateProvinceInputLable: 'State/Province',
  codeInputLabel: 'Code',
  forgetPasswordLabel: 'Forget my password',

  // YEARS
  january: 'January',
  february: 'February',
  march: 'March',
  april: 'April',
  may: 'May',
  june: 'June',
  july: 'July',
  august: 'August',
  september: 'September',
  october: 'October',
  november: 'November',
  december: 'December',

  // FORM CTAs
  submitCtaLoading: 'Loading...',
  saveCtaLabel: 'Save Changes',
  saveCtaLoadingLabel: 'Saving...',
  logOutCtaLabel: 'Logout',
  logOutLoadingCtaLabel: 'Closing app...',
  sendCtaLabel: 'Send',
  sendLoadingCtaLabel: 'Sending...',

  // ALERT
  codeSentAlertTitle: 'Code sent to your email.',
  codeSentAlertDescription: 'Please use this code to validate your request.',
  accountVerifiedAlertTitle: 'Account verified!',
  accountVerifiedAlertDescription: 'Login to access your account.',
  passwordChangedAlerTitle: 'Password Updated!',
  passwordChangedAlertDescription: 'Login to access your account.',
  accountCreatedSuccessAlertTitle: 'Conta Criada!',
  accountCreatedSuccessAlertDescription: 'Code sent to your email.',
  userNotConfirmedAlertTitle: 'Email ainda não confirmado.',
  userNotConfirmedAlertDescription: 'Please insert the code sent.',
  codeSuccessAlertTitle: 'Code sent.',
  codeSuccessAlertDescription:
    'Please verify your email - including the spam folder.',

  // ERROR BOUNDARY
  errorBoundaryTitle: 'Oops... :(',
  errorBoundaryDescription:
    'Somenthing went wrong. Please refresh the page or go to the home page clicking on the logo at the left top.',

  // FORM SPECIFIC ERROR MESSAGES
  emailErrorMessage: 'Please insert a valid email.',
  passwordErrorMessage: 'Please insert a valid password.',
  codeErrorMessage: 'Wrong Code. Please insert a valid code.',
  loginErrorMessage: 'Email and/or password wrong!',

  // FORM GENERAL ERRORS MESSAGE
  generalErrorMessage:
    'Ops, something went wrong. Please refresh this page and try again!',
  generalEmailErrorMessage:
    'Error to validate your email. Please try it later again.',
  generalPasswordErrorMessage:
    'Ops, something went wrong. Please refresh this page and try again or contact us.',

  // LANGUAGE
  language: 'Language',
  lngPortuguese: 'Portuguese',
  lngEnglish: 'English',

  // COUNTRIES
  allCountries: 'All',
  brazil: 'Brazil',
  unitedStates: 'United States',

  // COMPONENT TRENDING POSTS
  trendingPostsTitle: 'Trending Posts',

  // COMPONENT FEED POSTS
  feedPostsTitle: 'Our Feed',
  viewMorePosts: 'Find out much more',

  // COMPONENT TAG BOX
  tagBoxTitle: 'Discover More',
};
