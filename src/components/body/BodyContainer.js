import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
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
        <Route exact path="/gallery" component={LazyGalleryPage}></Route>
        <Route exact path="/about" component={LazyContactUsPage}></Route>
        <Route exact path="/" component={LazyHomePage}></Route>
        <Route exact path="*" component={LazyHomePage}></Route>
      </Switch>
    );
  };
  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      {getPages()}
      <CopyRightFooter />
    </Suspense>
  );
};

export default BodyContainer;
