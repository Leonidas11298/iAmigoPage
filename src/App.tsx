// Project: iAmigo
import { ConditionsPage } from "./components/conditions";
import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermAndConditions from "./components/sections/TermAndConditions";
import ThankYouPage from "./components/sections/ThankYouPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="iAmigo">
              <Hero />
              <Brands />
              <Services />
              <AboutUs />
              <Pricing />
              <CTA />
            </Layout>
          }
        />
        <Route
          path="/conditions"
          element={
            <ConditionsPage title="iAmigo - Términos y Condiciones">
              <TermAndConditions />
            </ConditionsPage>
          }
        />
        <Route 
        path="/successpay"
        element={
          <ThankYouPage />
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
