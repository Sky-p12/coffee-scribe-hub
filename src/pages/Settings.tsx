
import { useState, useEffect } from "react";
import { Container, PageContainer } from "@/components/layout/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Bell,
  Mail,
  Smartphone,
  Moon,
  Settings as SettingsIcon,
  Save,
  Trash2
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Settings = () => {
  const { toast } = useToast();
  const { logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    maintenanceReminders: true,
    alertNotifications: true,
    autoLogout: true
  });

  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleDarkModeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
  };
  
  const handleSaveSettings = () => {
    toast({
      title: t("settingsSaved"),
      description: t("preferencesUpdated"),
    });
  };
  
  const handleDeleteAccount = () => {
    toast({
      title: t("accountDeletion"),
      description: t("featureNotAvailable"),
      variant: "destructive",
    });
  };
  
  return (
    <Container>
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t("settings")}</h1>
          <p className="text-muted-foreground mb-8">
            {t("managePreferences")}
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  {t("notificationPreferences")}
                </CardTitle>
                <CardDescription>
                  {t("controlNotifications")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">{t("emailNotifications")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("receiveViaEmail")}
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={() => handleToggle('emailNotifications')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications">{t("smsNotifications")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("receiveViaSMS")}
                    </p>
                  </div>
                  <Switch
                    id="sms-notifications"
                    checked={settings.smsNotifications}
                    onCheckedChange={() => handleToggle('smsNotifications')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-reminders">{t("maintenanceReminders")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("getRemindersMaintenance")}
                    </p>
                  </div>
                  <Switch
                    id="maintenance-reminders"
                    checked={settings.maintenanceReminders}
                    onCheckedChange={() => handleToggle('maintenanceReminders')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="alert-notifications">{t("machineAlerts")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("notifiedMachineIssue")}
                    </p>
                  </div>
                  <Switch
                    id="alert-notifications"
                    checked={settings.alertNotifications}
                    onCheckedChange={() => handleToggle('alertNotifications')}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="h-5 w-5 mr-2" />
                  {t("applicationSettings")}
                </CardTitle>
                <CardDescription>
                  {t("customizeExperience")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">{t("darkMode")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("switchTheme")}
                    </p>
                  </div>
                  <Switch
                    id="dark-mode"
                    checked={isDarkMode}
                    onCheckedChange={handleDarkModeToggle}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-logout">{t("autoLogout")}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t("automaticallyLogout")}
                    </p>
                  </div>
                  <Switch
                    id="auto-logout"
                    checked={settings.autoLogout}
                    onCheckedChange={() => handleToggle('autoLogout')}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-destructive">{t("dangerZone")}</CardTitle>
                <CardDescription>
                  {t("irreversibleActions")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium mb-1">{t("deleteAccount")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("permanentlyDelete")}
                    </p>
                  </div>
                  <Button 
                    variant="destructive"
                    onClick={handleDeleteAccount}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    {t("deleteAccount")}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium mb-1">{t("logout")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("signOut")}
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={logout}
                  >
                    {t("logout")}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                {t("saveSettings")}
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Settings;
