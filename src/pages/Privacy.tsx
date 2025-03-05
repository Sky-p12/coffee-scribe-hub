
import { Container, PageContainer } from "@/components/layout/Container";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Privacy = () => {
  const lastUpdated = "June 15, 2023";
  
  return (
    <Container>
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                CoffeeSAV Inc. ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use our CoffeeSAV application and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              <p>
                Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Service. By accessing or using this Service, you agree to this privacy policy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                We collect several types of information from and about users of our Service, including information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  By which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");
                </li>
                <li>
                  About your coffee machines, including model numbers, serial numbers, installation dates, maintenance records, and usage patterns;
                </li>
                <li>
                  About your internet connection, the equipment you use to access our Service, and usage details.
                </li>
              </ul>
              <p>
                We collect this information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Directly from you when you provide it to us.</li>
                <li>Automatically as you navigate through the Service (information collected automatically may include usage details, IP addresses, and information collected through cookies).</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To present our Service and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To provide you with notices about your account.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
                <li>To notify you about changes to our Service or any products or services we offer or provide through it.</li>
                <li>To allow you to participate in interactive features on our Service.</li>
                <li>To improve our Service and develop new features.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. Disclosure of Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
              </p>
              <p>
                We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of CoffeeSAV Inc.'s assets.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>
              <p>
                We may also disclose your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li>To enforce or apply our terms of service and other agreements.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of CoffeeSAV Inc., our customers, or others.</li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            This is a simplified version of our Privacy Policy for demonstration purposes. 
            For a complete version of our Privacy Policy, please contact our legal department.
          </p>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Privacy;
