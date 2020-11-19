import React, { Component } from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

///IMPORT CUSTOM STYLING
import '../Styles/App.css';
import Gallery from "./Gallery";
// import fs from 'fs';
//const files = require.context('./', true, /\.(svg|png)$/igm);

///IMPORT PAGES TO LINK THEM
/*import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import ForgotPass from './ForgotPassPage';
import ProfileConsumerPage from './ProfileConsumerPage';
import ProfileSellerPage from './ProfileSellerPage';*/

// function listAll() {
//     const testFolder = '../Components';
//     fs.readdir(testFolder, (err, files) => {
//         files.forEach(file => {
//             console.log(file);
//         });
//     });
// }

export default class App extends Component {
    state = {
        links : ["https://images.unsplash.com/photo-1603924498829-ce16c0da32aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1996&q=80",
                  "https://images.unsplash.com/photo-1605354005460-b64835fdebfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                  "https://images.unsplash.com/photo-1597291970574-645f2fc92bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80"
                ]
    };

    render() {
        return (
                <div className={"App no-mg-pd"}>
                    <h1 className={"no-mg-pd"}>Hello</h1>
                    <Gallery info={this.state}/>
                </div>
            // <Router>
            //     <Switch>
            //
            //         {/*use this first route as index page*/}
            //         {/*<Route exact path={"/"} component={HomePage}/>*/}
            //
            //         {/*use this routes for other pages*/}
            //         {/*<Route path={"/login"} component={LoginPage}/>*/}
            //         {/*<Route path={"/home"} component={HomePage}/>*/}
            //         {/*<Route path={"/signup"} component={SignupPage}/>*/}
            //         {/*<Route path={"/forgot"} component={ForgotPass}/>*/}
            //         {/*<Route path={"/profileconsumer"} component={ProfileConsumerPage}/>*/}
            //         {/*<Route path={"/profileseller"} component={ProfileSellerPage}/>*/}
            //     </Switch>
            // </Router>
        );
    }
}