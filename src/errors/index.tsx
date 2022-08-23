import Error from "../interface/pages/Error";

const ErrorHandler = () => {
    window.history.pushState({ foo: 'bar' }, 'URL', '/error/404');

    return (
        <Error />
    );
};

export default ErrorHandler;
