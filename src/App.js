import "./App.css";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./Pages/TermsConditions/TermsCondition";
import FAQs from "./Pages/FAQs/FAQs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PrivacyPolicy} exact />
        <Route path="/TermsCondition" component={TermsCondition} />
        <Route path="/FAQs" component={FAQs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
