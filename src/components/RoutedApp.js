import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { RegionsPage } from './Regions';


class RoutedApp extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={WineApp}> 
                    <IndexRoute component={RegionsPage} /> 
                    <Route path="regions/:regionId" component={WineListPage} />
                    <Route path="regions/:regionId/wines/:wineId" component={WinePage} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        );
    }
}

export default RoutedApp;

ReactDOM.render(<RoutedApp />, document.getElementById('root'));

// top level route <WineApp><RegionsPage/></WineApp> since RegionsPage is default
// <WineApp><WineListPage/></WineApp>