import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import SupportUs from "./components/SupportUs/SupportUs";
import Footer from "./components/Footer/Footer";
import AboutDepression from "./components/AboutDepression/AboutDepression";

const App = () => {
  return (
     <HashRouter>
         <>
             <NavBar />
             <Header />
         <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/o-nas" component={AboutUs} />
             <Route path="/wsparcie" component={SupportUs} />
             <Route path="/kontakt" component={ContactUs} />
             <Route path="/o-depresji" component={AboutDepression} />
             <Route component={PageNotFound} />
         </Switch>
             <Footer />
         </>
     </HashRouter>
  );
}

export default App;
