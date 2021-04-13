import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeLayout } from "../components/layout/HomeLayout";
import { LandingPage } from "../components/Landing Page/LandingPage";
import { Register } from "../components/LogIn/Register";
import { LogIn } from "../components/LogIn/LogIn";
import { LogOut } from "../components/LogIn/LogOut";
import { Rodrigo } from "../components/LogIn/Rodrigo";
import { FaqLayout } from "../components/layout/FaqLayout";
import { BookingLayout } from "../components/layout/BookingLayout";
import { AccomodationLayout } from "./../components/layout/AccomodationLayout";
import { AccomodationDetailsLayout } from "../components/layout/AccomodationsDetailsLayout";
import { Plantilla } from "../Admin/Plantilla";
import { RoomsLayout } from "../Admin/components/RoomsLayout";

//ACA VAN TODAS LAS RUTAS

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeLayout} />
          <Route exact path="/form" component={Register} />
          <Route exact path="/logIn" component={LogIn} />
          <Route exact path="/logOut" component={LogOut} />
          <Route exact path="/rodrigo" component={Rodrigo} />
          <Route exact path="/booking" component={BookingLayout} />
          <Route exact path="/faq" component={FaqLayout} />

          {/* Parte administrativa */}
          <Route exact path="/admin" component={Plantilla} />
          <Route exact path="/admin/rooms" component={RoomsLayout} />

          <Route exact path="/accomodations" component={AccomodationLayout} />
          <Route
            exact
            path="/accomodations/:id"
            component={AccomodationDetailsLayout}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
