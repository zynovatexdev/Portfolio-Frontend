import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import About from "./page/About";
import Blog from "./page/Blog";
import Carrers from "./page/Carrers";
import Contact from "./page/Contact";
import CustomerFeedback from "./page/CustomerFeedback";
import Faqs from "./page/Faqs";
import Help from "./page/Help";
import News from "./page/News";
import PrivacyPolicy from "./page/PrivacyPolicy";
import Projects from "./page/Projects";
import Services from "./page/Services";
import TermsConditions from "./page/TermsConditions";
import ServicesReadMore from "./page/ServicesReadMore";
import Teams from "./page/Teams";
import SSE from "./page/CareerView";
import SEApply from "./page/CareerApply";
import NewsRead from "./page/NewsRead";
import { BlogReadMore } from "./page/BlogReadMore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route index Component={Home} />
          <Route path="about" Component={About} />
          <Route path="blog" Component={Blog} />
          <Route path="blog-more" Component={BlogReadMore} />
          <Route path="careers" Component={Carrers} />
          <Route path="contact" Component={Contact} />
          <Route path="customer-feedback" Component={CustomerFeedback} />
          <Route path="faqs" Component={Faqs} />
          <Route path="help" Component={Help} />
          <Route path="news" Component={News} />
          <Route path="newsread" Component={NewsRead} />
          <Route path="privacy-policy" Component={PrivacyPolicy} />
          <Route path="projects" Component={Projects} />
          <Route path="services" Component={Services} />
          <Route path="services/:serviceId" Component={ServicesReadMore} />
          <Route path="teams" Component={Teams} />
          <Route path="terms-conditions" Component={TermsConditions} />
          <Route path="sse" element={<SSE />} />
          <Route path="carrers-apply" element={<SEApply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
