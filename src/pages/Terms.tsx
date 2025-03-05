
import { Container, PageContainer } from "@/components/layout/Container";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Terms = () => {
  const lastUpdated = "June 15, 2023";
  
  return (
    <Container>
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                Welcome to CoffeeSAV ("Company", "we", "our", "us")! As you have just clicked our Terms of Service, please pause, grab a cup of coffee, and carefully read the following pages. It will take you approximately 20 minutes.
              </p>
              <p>
                These Terms of Service ("Terms", "Terms of Service") govern your use of our web application CoffeeSAV (collectively or individually "Service") operated by CoffeeSAV Inc.
              </p>
              <p>
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here [Privacy Policy Link].
              </p>
              <p>
                Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
              </p>
              <p>
                If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@coffeesav.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Communications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at support@coffeesav.com.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Purchases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
              </p>
              <p>
                You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
              </p>
              <p>
                We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. Subscriptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                Some parts of Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
              </p>
              <p>
                At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or CoffeeSAV Inc. cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting CoffeeSAV Inc. customer support team.
              </p>
              <p>
                A valid payment method, including credit card, is required to process the payment for your subscription. You shall provide CoffeeSAV Inc. with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize CoffeeSAV Inc. to charge all Subscription fees incurred through your account to any such payment instruments.
              </p>
              <p>
                Should automatic billing fail to occur for any reason, CoffeeSAV Inc. will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>5. Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
              </p>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            This is a simplified version of our Terms of Service for demonstration purposes. 
            For a complete version of our Terms, please contact our legal department.
          </p>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Terms;
