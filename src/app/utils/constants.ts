export const generalInfo = {
  appName: 'SuperBlog',
  logoText: 'Super Blog',
  emailContact: 'contact@superblog.com',
};

// ERRORS
export const ERROR_USER_PROFILE_UPDATE_NOT_ENOUGH_TIME =
  'errorUserProfileUpdateNotEnoughTime';

export const ERROR_USER_PROFILE_UPDATE_GENERIC =
  'errorUserProfileUpdateGeneric';

// URLS
export const CAROUSEL_POST_URI = 'carouselPosts';
export const POST_URI = 'post';
export const POSTS_URI = 'posts';
export const TOPICS_URI = 'topics';
export const TRENDING_POSTS_URI = 'trendingPosts';
export const USER_URI = 'userProfile';

// Get the auth token
export const HOTMART_GET_TOKEN = `https://api-sec-vlc.hotmart.com/security/oauth/token?grant_type=client_credentials&client_id=${process.env.REACT_APP_HOTMART_CLIENT_ID}&client_secret=${process.env.REACT_APP_HOTMART_CLIENT_SECRET}`;

// Get all subscribers
// TODO: add the real endpoint conditionally to prod environment
export const HOTMART_SUBSCRIPTIONS = `http://sandbox.hotmart.com/payments/api/v1/subscriptions?subscriber_email=`;

// Get the subscriber's purchases
// TODO: add the real endpoint conditionally to prod environment
export const HOTMART_SUBSCRIBER_PURCHASE = (id: string) =>
  `https://sandbox.hotmart.com/payments/api/v1/subscriptions/${id}/purchases`;
