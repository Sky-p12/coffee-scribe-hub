
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Auth
    "login": "Log in",
    "register": "Register",
    "email": "Email",
    "password": "Password",
    "forgotPassword": "Forgot password?",
    "dontHaveAccount": "Don't have an account?",
    "createAccount": "Create account",
    "signingIn": "Signing in...",
    "signIn": "Sign in",
    "welcomeBack": "Welcome Back",
    "signInToCoffeeSAV": "Sign in to your CoffeeSAV account",
    "enterCredentials": "Enter your credentials to access your account",
    "demoCredentials": "Demo credentials",
    
    // Navigation
    "dashboard": "Dashboard",
    "machines": "Machines",
    "maintenance": "Maintenance",
    "history": "History",
    "settings": "Settings",
    "profile": "Profile",
    "logout": "Logout",
    
    // Dashboard
    "welcome": "Welcome back! Here's an overview of your coffee machine operations.",
    "totalMachines": "Total Machines",
    "acrossAllLocations": "Across all locations",
    "maintenanceDue": "Maintenance Due",
    "withinNext7Days": "Within next 7 days",
    "recentServices": "Recent Services",
    "last30Days": "Last 30 days",
    "activeAlerts": "Active Alerts",
    "requireAttention": "Require attention",
    "recentActivity": "Recent Activity",
    "latestEvents": "Latest events across your machines",
    "quickActions": "Quick Actions",
    "commonTasks": "Common tasks and shortcuts",
    "registerNewMachine": "Register New Machine",
    "logMaintenance": "Log Maintenance",
    "viewAllMachines": "View All Machines",
    
    // Machines
    "coffeeMachines": "Coffee Machines",
    "viewAndManageMachines": "View and manage all your registered coffee machines",
    "searchMachines": "Search machines by name, model, or location...",
    "viewDetails": "View Details",
    "nextService": "Next service",
    "noServiceScheduled": "No service scheduled",
    "noMachinesFound": "No machines found",
    "noMachinesMessage": "We couldn't find any machines matching your search criteria.",
    "clearSearch": "Clear Search",
    
    // Auth messages
    "authRequired": "Authentication required",
    "pleaseLogIn": "Please log in to access this page",
    
    // Status
    "operational": "Operational",
    "needsService": "Needs Service",
    "outOfOrder": "Out of Order",
    
    // Languages
    "english": "English",
    "french": "French"
  },
  fr: {
    // Auth
    "login": "Se connecter",
    "register": "S'inscrire",
    "email": "Email",
    "password": "Mot de passe",
    "forgotPassword": "Mot de passe oublié ?",
    "dontHaveAccount": "Vous n'avez pas de compte ?",
    "createAccount": "Créer un compte",
    "signingIn": "Connexion en cours...",
    "signIn": "Se connecter",
    "welcomeBack": "Bienvenue",
    "signInToCoffeeSAV": "Connectez-vous à votre compte CoffeeSAV",
    "enterCredentials": "Entrez vos identifiants pour accéder à votre compte",
    "demoCredentials": "Identifiants de démonstration",
    
    // Navigation
    "dashboard": "Tableau de bord",
    "machines": "Machines",
    "maintenance": "Maintenance",
    "history": "Historique",
    "settings": "Paramètres",
    "profile": "Profil",
    "logout": "Déconnexion",
    
    // Dashboard
    "welcome": "Bienvenue ! Voici un aperçu de vos opérations de machines à café.",
    "totalMachines": "Machines totales",
    "acrossAllLocations": "Dans tous les emplacements",
    "maintenanceDue": "Maintenance prévue",
    "withinNext7Days": "Dans les 7 prochains jours",
    "recentServices": "Services récents",
    "last30Days": "30 derniers jours",
    "activeAlerts": "Alertes actives",
    "requireAttention": "Nécessite attention",
    "recentActivity": "Activité récente",
    "latestEvents": "Derniers événements sur vos machines",
    "quickActions": "Actions rapides",
    "commonTasks": "Tâches et raccourcis courants",
    "registerNewMachine": "Enregistrer une nouvelle machine",
    "logMaintenance": "Enregistrer une maintenance",
    "viewAllMachines": "Voir toutes les machines",
    
    // Machines
    "coffeeMachines": "Machines à café",
    "viewAndManageMachines": "Visualisez et gérez toutes vos machines à café enregistrées",
    "searchMachines": "Rechercher des machines par nom, modèle ou emplacement...",
    "viewDetails": "Voir les détails",
    "nextService": "Prochain service",
    "noServiceScheduled": "Aucun service programmé",
    "noMachinesFound": "Aucune machine trouvée",
    "noMachinesMessage": "Nous n'avons trouvé aucune machine correspondant à vos critères de recherche.",
    "clearSearch": "Effacer la recherche",
    
    // Auth messages
    "authRequired": "Authentification requise",
    "pleaseLogIn": "Veuillez vous connecter pour accéder à cette page",
    
    // Status
    "operational": "Opérationnelle",
    "needsService": "Nécessite entretien",
    "outOfOrder": "Hors service",
    
    // Languages
    "english": "Anglais",
    "french": "Français"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get language from localStorage or use browser language or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "fr" ? "fr" : "en";
  };

  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || getBrowserLanguage()
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
