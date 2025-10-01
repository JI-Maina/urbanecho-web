import type { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import BaseLayout from "@/components/layouts/base-layout";
import Loading from "@/components/ui/loading";
import ErrorBoundary from "@/components/ui/error-boundary";

// Lazy load page components
const LandingPage = lazy(() => import("@/pages/landing"));
const CompanyPage = lazy(() => import("@/pages/company"));
const ForgotPasswordPage = lazy(() => import("@/pages/forgot-password"));
const NewPasswordPage = lazy(() => import("@/pages/new-password"));
const ProductPage = lazy(() => import("@/pages/product"));
const BlogIndex = lazy(() => import("@/pages/blog"));
const LoginPage = lazy(() => import("@/pages/login"));
const ScheduleDemo = lazy(() => import("@/pages/schedule-demo"));
const ScheduleDemoSuccess = lazy(() => import("@/pages/schedule-demo-success"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));

// Helper component to wrap lazy components with Suspense and ErrorBoundary
const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback={<Loading message="Loading page..." size="large" />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <LazyWrapper>
            <LandingPage />
          </LazyWrapper>
        ),
      },
      {
        path: "/company",
        element: (
          <LazyWrapper>
            <CompanyPage />
          </LazyWrapper>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <LazyWrapper>
            <ForgotPasswordPage />
          </LazyWrapper>
        ),
      },
      {
        path: "/new-password",
        element: (
          <LazyWrapper>
            <NewPasswordPage />
          </LazyWrapper>
        ),
      },
      {
        path: "/product",
        element: (
          <LazyWrapper>
            <ProductPage />
          </LazyWrapper>
        ),
      },
      {
        path: "/blog",
        element: (
          <LazyWrapper>
            <BlogIndex />
          </LazyWrapper>
        ),
      },
      {
        path: "/login",
        element: (
          <LazyWrapper>
            <LoginPage />
          </LazyWrapper>
        ),
      },
      {
        path: "/schedule-demo",
        element: (
          <LazyWrapper>
            <ScheduleDemo />
          </LazyWrapper>
        ),
      },
      {
        path: "/schedule-demo-success",
        element: (
          <LazyWrapper>
            <ScheduleDemoSuccess />
          </LazyWrapper>
        ),
      },{
        path: "/terms-of-service",
        element: (
          <LazyWrapper>
            <TermsOfService />
          </LazyWrapper>
        ),
      },{
        path: "/privacy-policy",
        element: (
          <LazyWrapper>
            <PrivacyPolicy />
          </LazyWrapper>
        ),
      }
    ],
  },
];

export default routes;
