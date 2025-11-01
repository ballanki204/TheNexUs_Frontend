import React from "react";
import { useLocation, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

class NotFoundContent extends React.Component {
  componentDidMount() {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      this.props.pathname
    );
  }

  render() {
    return (
      <div className="min-h-screen bg-muted/50">
        <div className="container py-4"></div>
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              Oops! Page not found
            </p>
            <a
              href="/"
              className="text-primary underline hover:text-primary/80"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function NotFound() {
  const location = useLocation();
  return <NotFoundContent pathname={location.pathname} />;
}

export default NotFound;
