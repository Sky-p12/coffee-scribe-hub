
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, PageContainer } from "@/components/layout/Container";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Coffee, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication
    // In a real application, this would be an API call
    setTimeout(() => {
      // Demo credentials check (in real app, this would be handled by backend)
      if (email === "demo@coffeesav.com" && password === "password") {
        toast({
          title: "Success",
          description: "Login successful! Redirecting to dashboard...",
        });
        
        // In a real application, you would set authentication state and redirect
        window.location.href = "/dashboard";
      } else {
        toast({
          title: "Authentication Failed",
          description: "Invalid email or password. Try using demo@coffeesav.com / password",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <Container className="bg-muted/30">
      <PageContainer className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to your CoffeeSAV account
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign in
                    </span>
                  )}
                </Button>
                <div className="text-center">
                  <span className="text-muted-foreground">
                    Don't have an account?{" "}
                    <Link 
                      to="/register" 
                      className="text-primary hover:underline font-medium"
                    >
                      Create account
                    </Link>
                  </span>
                </div>
              </CardFooter>
            </form>
          </Card>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Demo credentials: <span className="font-medium">demo@coffeesav.com / password</span>
            </p>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Login;
