import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, errorMessage: ''};
    }

    componentDidCatch(error) {
        this.setState({hasError: true, errorMessage: error.message});
    }

    render() {
        if (this.state.hasError) {
            return <p>{this.state.errorMessage}</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;