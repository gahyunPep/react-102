import React, { Component } from 'react';

class Navigator extends Component {
    static propTypes = {
        initialRoute: React.PropTypes.shape({
            component: React.PropTypes.func.isRequired,
            title: React.PropTypes.string,
            props: React.PropTypes.object,
          }).isRequired,
    };

    state = {
        component: null, // The component to render
        title: null, // The title of the page
        props: null, // The component props
    }

    componentDidMount() {
        this.setState({
            component: this.props.initialRoute.component,
            title: this.props.initialRoute.title,
            props: this.props.initialRoute.props,
        });
    }

    navigateTo = ({ component, title, props }) => {
        this.setState({ component, title, props });
    };

    render() {
        const Component = this.state.component;
        const { title, props } = this.state;

        return(
            <Component 
                {...props}
                navTitle={title}
                navigator={{ navigateTo: this.navigateTo }}/>
        );
    }
}

// The current navigation state is lost when the page is reloaded and the URL does not change in the browser when the current page changes.

// Another example page...
// class Page1 =  extends Component {

//     gotoNext = () => {
//       // Use the router to navigate to Page2
//       this.props.navigator.navigateTo({
//         title: 'Page 2',
//         component: Page2,
//         props: {
//           foo: 'bar',
//         },
//       });
//     };
  
//     render() {
//       return (
//         <div>
//           <h2>{this.props.navTitle}</h2>
//           <button onClick={this.gotoNext}>Next</button>
//         </div>
//       );
//     }
//   }
  
//   // Render the router into the DOM
//   ReactDOM.render(
//     <Navigator initialRoute= {{ title: 'Page 1', component: Page1 }} />,
//     document.getElementById('main')
//   );
