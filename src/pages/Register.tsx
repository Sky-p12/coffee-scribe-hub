
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Coffee, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      // Toast error is handled by the Auth context
      return;
    }
    
    const success = await register(name, email, password);
    if (success) {
      navigate("/login");
    }
  };
  
  return (
    <Container className="bg-muted/30">
      <PageContainer className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">{t("createYourAccount")}</h1>
            <p className="text-muted-foreground mt-2">
              {t("joinCoffeeSAV")}
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{t("register")}</CardTitle>
              <CardDescription>
                {t("enterDetailsToCreate")}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("fullName")}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
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
                  <Label htmlFor="password">{t("password")}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t("confirmPassword")}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                      {t("creatingAccount")}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4" />
                      {t("createAccount")}
                    </span>
                  )}
                </Button>
                <div className="text-center">
                  <span className="text-muted-foreground">
                    {t("alreadyHaveAccount")}{" "}
                    <Link 
                      to="/login" 
                      className="text-primary hover:underline font-medium"
                    >
                      {t("signIn")}
                    </Link>
                  </span>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Register;
