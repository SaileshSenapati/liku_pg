import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingPage from "../common/LoadingPage";
import CopyRightFooter from "./components/footer/CopyRightFooter";

const BodyContainer = () => {
  const LazyHomePage = lazy(() => import("./components/home/HomePage"));
  const LazyGalleryPage = lazy(() =>
    import("./components/gallery/GalleryPage")
  );
  const LazyContactUsPage = lazy(() =>
    import("./components/contactus/ContactUsPage")
  );
  const getPages = () => {
    return (
      <Switch>
        <Route exact path="liku_pg/#/gallery" component={LazyGalleryPage} />
        <Route exact path="liku_pg/#/contactus" component={LazyContactUsPage} />
        <Route exact path="/" component={LazyHomePage} />
        <Route exact path="*" component={LazyHomePage} />
      </Switch>
    );
  };
  return (
    <Suspense fallback={<LoadingPage />}>
      {getPages()}
      <CopyRightFooter />
    </Suspense>
  );
};

export default BodyContainer;
