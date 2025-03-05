
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, PageContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Container>
      <PageContainer className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-md text-center">
          <h1 className="text-9xl font-bold text-primary/30">404</h1>
          <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
          <p className="text-muted-foreground mt-4 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
};

export default NotFound;
