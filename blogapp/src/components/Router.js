import { BrowserRouter, Route } from 'react-router-dom';

import Quotes from './Quotes';
import Digital from './Digital';
import profs from './profs';
import Header from './Header';
import Footer from './Footer';
import Report from './Feedback';
import Contact from './contact';

function Router() {
    return (
        <BrowserRouter>
        <Header />
            <Route exact path="/" component={Quotes}></Route>
            <Route path="/Digital" component={Digital}></Route>
            <Route path="/profs" component={profs}></Route> 
            <Route path="/report" component={Report}></Route> 
            <Route path="/contact" component={Contact}></Route> 
            <Footer />
        </BrowserRouter>
    )
}

export default Router;