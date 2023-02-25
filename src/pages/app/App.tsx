import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "utils/routes";
import { About, Assessment, Contact, Home, Projects, Services } from "pages";
import "components/theme/fonts/fonts.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.ASSESSMENT} element={<Assessment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
