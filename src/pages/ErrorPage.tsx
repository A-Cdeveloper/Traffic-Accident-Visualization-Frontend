import { Link } from "react-router";

/**
 * ErrorPage component displayed when an error occurs in the application.
 * Used as fallback UI for ErrorBoundary.
 */
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-full p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-muted-foreground mb-6">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            aria-label="Reload page"
          >
            Reload Page
          </button>
          <Link
            to="/"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
