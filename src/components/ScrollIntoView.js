import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/*class ScrollIntoView extends PureComponent {
    componentDidMount = () => window.scrollTo(0, 0);

    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
    };

    render = () => this.props.children;
}*/
function ScrollIntoView({ children }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return children;
}

/*export default withRouter(ScrollIntoView);*/
export default ScrollIntoView;
