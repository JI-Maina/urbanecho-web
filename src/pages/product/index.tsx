import { lazy, Suspense } from "react";
import { ProductMainContainer } from "./product.styled";
import Loading from "@/components/ui/loading";

// Lazy load product page components
const ProductDevDocsSection = lazy(() => import("./product-dev-docs-section"));
const ProductProductSection = lazy(() => import("./product-product-section"));
const ProductResourcesSection = lazy(() => import("./product-resources-section"));
const ProductUseCaseSection = lazy(() => import("./product-use-case-section"));

export default function ProductPage() {
  return (
    <ProductMainContainer>
      <Suspense fallback={<Loading message="Loading product section..." size="medium" />}>
        <ProductProductSection />
      </Suspense>
      <Suspense fallback={<Loading message="Loading use cases..." size="medium" />}>
        <ProductUseCaseSection />
      </Suspense>
      <Suspense fallback={<Loading message="Loading dev docs..." size="medium" />}>
        <ProductDevDocsSection />
      </Suspense>
      <Suspense fallback={<Loading message="Loading resources..." size="medium" />}>
        <ProductResourcesSection />
      </Suspense>
    </ProductMainContainer>
  );
}
