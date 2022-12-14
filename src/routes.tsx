/* eslint-disable prettier/prettier */
import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

// Layout To No Auth Pages
import { NoAuthLayout } from './app/containers/layouts/NoAuthLayout';

// Layout To Auth Pages
import { AuthLayout } from './app/containers/admin/layouts/AuthLayout';

// No Auth Pages
import ContactUs from './app/containers/contactUs';
import ForgetPassword from './app/containers/signIn/ForgetPassword';
import HelpCenter from './app/containers/helpCenter';
import Home from './app/containers/home';
import SignIn from './app/containers/signIn';
import SignUp from './app/containers/signUp';
import TopLinks from './app/containers/topApps';
import Topic from './app/containers/topic';
import VerifyCode from './app/containers/signUp/verifyCode';

// Post
import Post from './app/containers/post/id';

// Tools
import InjectCookies from './app/containers/tools/injectCookies';

// Admin Area
import UserContactUs from './app/containers/admin/userContactUs';
import UserBilling from './app/containers/admin/userBilling';
import UserProfile from './app/containers/admin/userProfile';
import UserSecurity from './app/containers/admin/userSecurity';
import UserSettings from './app/containers/admin/userSettings';
import SavedPosts from './app/containers/admin/savedPosts';
import ControlledEditor from './app/containers/richTextEditor';

// LogOut
import LogOut from './app/containers/admin/logout';

// Protect Routes
import { ProtectedRoute } from './protectedRoute';

// No Auth Pages With Layout Applied
export const PostWithLayout = NoAuthLayout(Post);
export const ContactUsWithLayout = NoAuthLayout(ContactUs);
export const ForgetPasswordWithLayout = NoAuthLayout(ForgetPassword);
export const HelpCenterWithLayout = NoAuthLayout(HelpCenter);
export const HomeWithLayout = NoAuthLayout(Home);
export const SignInWithLayout = NoAuthLayout(SignIn);
export const SignUpWithLayout = NoAuthLayout(SignUp);
export const ToolsInjectCookiesWithLayout = NoAuthLayout(InjectCookies);
export const TopLinksWithLayout = NoAuthLayout(TopLinks);
export const TopicWithLayout = NoAuthLayout(Topic);
export const VerifyCodeWithLayout = NoAuthLayout(VerifyCode);

// Auth Pages With Layout Applied
export const UserContactUsWithAuthLayout = AuthLayout(UserContactUs);
export const UserBillingWithAuthLayout = AuthLayout(UserBilling);
export const UserProfileWithAuthLayout = AuthLayout(UserProfile);
export const UserSecurityWithAuthLayout = AuthLayout(UserSecurity);
export const UserSettingsWithAuthLayout = AuthLayout(UserSettings);
export const SavedPostsWithAuthLayout = AuthLayout(SavedPosts);

const RoutesManager = () => (
  <Routes>
    <Route path="/" element={<HomeWithLayout />} />
    <Route path="/post/:id" element={<PostWithLayout />} />
    <Route path="/contactUs" element={<ContactUsWithLayout />} />
    <Route path="/forgetPassword" element={<ForgetPasswordWithLayout />} />
    <Route path="/help-center" element={<HelpCenterWithLayout />} />
    <Route path="/signin" element={<SignInWithLayout />} />
    <Route path="/signup" element={<SignUpWithLayout />} />
    <Route path="/signup/verifyCode" element={<VerifyCodeWithLayout />} />
    <Route path="/textEditor" element={<ControlledEditor />} />
    <Route path="/topic/:id" element={<TopicWithLayout />} />
    <Route path="/top-links" element={<TopLinksWithLayout />} />
    <Route
      path="/tools/injectCookies"
      element={<ToolsInjectCookiesWithLayout />}
    />
    <Route path="/admin/logout" element={<LogOut />} />
    <Route path="*" element={<Navigate to="/" replace />} />

    {/* Protecte Route
    Just user logged can have access */}

    <Route
      path="/admin/billing"
      element={
        <ProtectedRoute>
          <UserBillingWithAuthLayout />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/contactUs"
      element={
        <ProtectedRoute>
          <UserContactUsWithAuthLayout />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/profile"
      element={
        <ProtectedRoute>
          <UserProfileWithAuthLayout />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/security"
      element={
        <ProtectedRoute>
          <UserSecurityWithAuthLayout />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/settings"
      element={
        <ProtectedRoute>
          <UserSettingsWithAuthLayout />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/savedPosts"
      element={
        <ProtectedRoute>
          <SavedPostsWithAuthLayout />
        </ProtectedRoute>
      }
    />

    <Route path="/admin/*" element={<Navigate to="/admin/profile" replace />} />
  </Routes>
);

export default RoutesManager;
