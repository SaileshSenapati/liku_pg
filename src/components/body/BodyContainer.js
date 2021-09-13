import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingPage from "../common/LoadingPage";
import Footer from "./components/footer/Footer";

const BodyContainer = () => {
  const LazyHomePage = lazy(() => import("./components/home/HomePage"));
  const LazyGalaryPage = lazy(() => import("./components/galary/GalaryPage"));
  const LazyContactUsPage = lazy(() =>
    import("./components/contactus/ContactUsPage")
  );
  const getPages = () => {
    return (
      <Switch>
        <Route exact path="/" component={LazyHomePage} />
        <Route exact path="/galary" component={LazyGalaryPage} />
        <Route exact path="/contactus" component={LazyContactUsPage} />
      </Switch>
    );
  };
  return (
    <Suspense fallback={<LoadingPage />}>
      {getPages()}
      <Footer />
    </Suspense>
  );
};

export default BodyContainer;
