
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
    "french": "French",
    
    // Register page
    "createYourAccount": "Create Account",
    "joinCoffeeSAV": "Join CoffeeSAV to manage your coffee machines",
    "enterDetailsToCreate": "Enter your details to create a new account",
    "fullName": "Full Name",
    "confirmPassword": "Confirm Password",
    "creatingAccount": "Creating account...",
    "alreadyHaveAccount": "Already have an account?",
    
    // NotFound page
    "pageNotFound": "Page Not Found",
    "pageNotFoundMessage": "Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.",
    "backToHome": "Back to Home",
    "goBack": "Go Back",
    
    // About page
    "aboutCoffeeSAV": "About CoffeeSAV",
    "aboutTagline": "Revolutionizing coffee machine service and maintenance tracking",
    "aboutMission": "Our Mission",
    "aboutVision": "Our Vision",
    "aboutPrinciples": "Our Principles",
    "joinOurJourney": "Join Our Journey",
    "qualityFirst": "Quality First",
    "collaboration": "Collaboration",
    "innovation": "Innovation",
    "dataDriver": "Data-Driven",
    "reliability": "Reliability",
    "userCentric": "User-Centric",
    
    // Contact page
    "contactUs": "Contact Us",
    "getInTouch": "Get in touch with our team",
    "contactForm": "Contact Form",
    "yourName": "Your Name",
    "yourEmail": "Your Email",
    "subject": "Subject",
    "message": "Message",
    "sendMessage": "Send Message",
    "sending": "Sending...",
    
    // Profile page
    "profileSettings": "Profile Settings",
    "manageYourProfile": "Manage your personal information and preferences",
    "personalInfo": "Personal Information",
    "accountSettings": "Account Settings",
    "notifications": "Notifications",
    "emailNotifications": "Email Notifications",
    "saveChanges": "Save Changes",
    "saving": "Saving...",
    
    // Machine details
    "machineDetails": "Machine Details",
    "machineInfo": "Machine Information",
    "status": "Status",
    "model": "Model",
    "serialNumber": "Serial Number",
    "installationDate": "Installation Date",
    "location": "Location",
    "lastMaintenance": "Last Maintenance",
    "upcomingMaintenance": "Upcoming Maintenance",
    "maintenanceHistory": "Maintenance History",
    "performedBy": "Performed By",
    "date": "Date",
    "type": "Type",
    "notes": "Notes",
    "editMachine": "Edit Machine",
    "deleteMachine": "Delete Machine",
    "scheduleService": "Schedule Service",
    "reportIssue": "Report Issue",
    
    // Maintenance page
    "maintenanceManagement": "Maintenance Management",
    "scheduledMaintenance": "Scheduled Maintenance",
    "completedMaintenance": "Completed Maintenance",
    "noScheduledMaintenance": "No scheduled maintenance",
    "noCompletedMaintenance": "No completed maintenance records",
    "machineId": "Machine ID",
    "maintenanceType": "Maintenance Type",
    "maintenanceDate": "Maintenance Date",
    "technician": "Technician",
    "markComplete": "Mark as Complete",
    "addNewMaintenance": "Add New Maintenance",
    
    // Loading
    "loading": "Loading..."
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
    "french": "Français",
    
    // Register page
    "createYourAccount": "Créer un Compte",
    "joinCoffeeSAV": "Rejoignez CoffeeSAV pour gérer vos machines à café",
    "enterDetailsToCreate": "Entrez vos informations pour créer un nouveau compte",
    "fullName": "Nom Complet",
    "confirmPassword": "Confirmer le Mot de Passe",
    "creatingAccount": "Création du compte...",
    "alreadyHaveAccount": "Vous avez déjà un compte ?",
    
    // NotFound page
    "pageNotFound": "Page Non Trouvée",
    "pageNotFoundMessage": "Désolé, nous n'avons pas trouvé la page que vous cherchez. La page a peut-être été déplacée, supprimée ou n'a jamais existé.",
    "backToHome": "Retour à l'Accueil",
    "goBack": "Retour",
    
    // About page
    "aboutCoffeeSAV": "À Propos de CoffeeSAV",
    "aboutTagline": "Révolutionner le suivi de service et d'entretien des machines à café",
    "aboutMission": "Notre Mission",
    "aboutVision": "Notre Vision",
    "aboutPrinciples": "Nos Principes",
    "joinOurJourney": "Rejoignez Notre Aventure",
    "qualityFirst": "Qualité d'Abord",
    "collaboration": "Collaboration",
    "innovation": "Innovation",
    "dataDriver": "Basé sur les Données",
    "reliability": "Fiabilité",
    "userCentric": "Centré sur l'Utilisateur",
    
    // Contact page
    "contactUs": "Contactez-Nous",
    "getInTouch": "Entrez en contact avec notre équipe",
    "contactForm": "Formulaire de Contact",
    "yourName": "Votre Nom",
    "yourEmail": "Votre Email",
    "subject": "Sujet",
    "message": "Message",
    "sendMessage": "Envoyer le Message",
    "sending": "Envoi en cours...",
    
    // Profile page
    "profileSettings": "Paramètres du Profil",
    "manageYourProfile": "Gérez vos informations personnelles et préférences",
    "personalInfo": "Informations Personnelles",
    "accountSettings": "Paramètres du Compte",
    "notifications": "Notifications",
    "emailNotifications": "Notifications par Email",
    "saveChanges": "Enregistrer les Modifications",
    "saving": "Enregistrement...",
    
    // Machine details
    "machineDetails": "Détails de la Machine",
    "machineInfo": "Informations sur la Machine",
    "status": "Statut",
    "model": "Modèle",
    "serialNumber": "Numéro de Série",
    "installationDate": "Date d'Installation",
    "location": "Emplacement",
    "lastMaintenance": "Dernière Maintenance",
    "upcomingMaintenance": "Maintenance à Venir",
    "maintenanceHistory": "Historique de Maintenance",
    "performedBy": "Effectuée Par",
    "date": "Date",
    "type": "Type",
    "notes": "Notes",
    "editMachine": "Modifier la Machine",
    "deleteMachine": "Supprimer la Machine",
    "scheduleService": "Planifier un Service",
    "reportIssue": "Signaler un Problème",
    
    // Maintenance page
    "maintenanceManagement": "Gestion de la Maintenance",
    "scheduledMaintenance": "Maintenance Programmée",
    "completedMaintenance": "Maintenance Terminée",
    "noScheduledMaintenance": "Aucune maintenance programmée",
    "noCompletedMaintenance": "Aucun historique de maintenance",
    "machineId": "ID de la Machine",
    "maintenanceType": "Type de Maintenance",
    "maintenanceDate": "Date de Maintenance",
    "technician": "Technicien",
    "markComplete": "Marquer comme Terminé",
    "addNewMaintenance": "Ajouter une Nouvelle Maintenance",
    
    // Loading
    "loading": "Chargement..."
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
