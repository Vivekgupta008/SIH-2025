import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: 'Tourist Safety Dashboard',
      subtitle: 'Real-time monitoring and management system',
      refresh: 'Refresh',
      
      // Stats
      totalTourists: 'Total Tourists',
      activeTourists: 'Active Tourists',
      unresolvedAlerts: 'Unresolved Alerts',
      riskZones: 'Risk Zones',
      
      // Tourist Management
      searchTourists: 'Search tourists by name, email, or ID',
      addTourist: 'Add Tourist',
      editTourist: 'Edit Tourist',
      deleteTourist: 'Delete Tourist',
      touristDetails: 'Tourist Details',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      coordinates: 'Coordinates',
      status: 'Status',
      lastUpdate: 'Last Update',
      emergencyContact: 'Emergency Contact',
      
      // Status
      active: 'Active',
      inactive: 'Inactive',
      emergencyLabel: 'Emergency',
      
      // Alerts
      recentAlerts: 'Recent Alerts',
      alertType: 'Alert Type',
      severity: 'Severity',
      message: 'Message',
      createdAt: 'Created At',
      resolved: 'Resolved',
      unresolved: 'Unresolved',
      
      // Risk Zones
      riskZonesTitle: 'Risk Zones',
      addRiskZone: 'Add Risk Zone',
      editRiskZone: 'Edit Risk Zone',
      deleteRiskZone: 'Delete Risk Zone',
      zoneName: 'Zone Name',
      description: 'Description',
      radius: 'Radius (km)',
      
      // Map
      touristLocations: 'Tourist Locations',
      legend: 'Legend',
      
      // Actions
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      generatePDF: 'Generate PDF',
      
      // Severity Levels
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      critical: 'Critical',
      
      // Alert Types
      locationUpdate: 'Location Update',
      riskZoneEntry: 'Risk Zone Entry',
      checkIn: 'Check In',
      emergency: 'Emergency',
      
      // Common
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      confirm: 'Confirm',
      close: 'Close',
      
      // PDF
      touristReport: 'Tourist Report',
      generatedOn: 'Generated on',
      totalAlerts: 'Total Alerts',
      locationHistory: 'Location History',
    }
  },
  hi: {
    translation: {
      // Navigation
      dashboard: 'पर्यटक सुरक्षा डैशबोर्ड',
      subtitle: 'वास्तविक समय निगरानी और प्रबंधन प्रणाली',
      refresh: 'रिफ्रेश करें',
      
      // Stats
      totalTourists: 'कुल पर्यटक',
      activeTourists: 'सक्रिय पर्यटक',
      unresolvedAlerts: 'अनसुलझे अलर्ट',
      riskZones: 'जोखिम क्षेत्र',
      
      // Tourist Management
      searchTourists: 'नाम, ईमेल या आईडी से पर्यटक खोजें',
      addTourist: 'पर्यटक जोड़ें',
      editTourist: 'पर्यटक संपादित करें',
      deleteTourist: 'पर्यटक हटाएं',
      touristDetails: 'पर्यटक विवरण',
      name: 'नाम',
      email: 'ईमेल',
      phone: 'फोन',
      coordinates: 'निर्देशांक',
      status: 'स्थिति',
      lastUpdate: 'अंतिम अपडेट',
      emergencyContact: 'आपातकालीन संपर्क',
      
      // Status
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      emergencyLabel: 'आपातकाल',
      
      // Alerts
      recentAlerts: 'हाल के अलर्ट',
      alertType: 'अलर्ट प्रकार',
      severity: 'गंभीरता',
      message: 'संदेश',
      createdAt: 'बनाया गया',
      resolved: 'हल',
      unresolved: 'अनसुलझा',
      
      // Risk Zones
      riskZonesTitle: 'जोखिम क्षेत्र',
      addRiskZone: 'जोखिम क्षेत्र जोड़ें',
      editRiskZone: 'जोखिम क्षेत्र संपादित करें',
      deleteRiskZone: 'जोखिम क्षेत्र हटाएं',
      zoneName: 'क्षेत्र का नाम',
      description: 'विवरण',
      radius: 'त्रिज्या (किमी)',
      
      // Map
      touristLocations: 'पर्यटक स्थान',
      legend: 'किंवदंती',
      
      // Actions
      save: 'सहेजें',
      cancel: 'रद्द करें',
      delete: 'हटाएं',
      edit: 'संपादित करें',
      view: 'देखें',
      generatePDF: 'PDF जेनरेट करें',
      
      // Severity Levels
      low: 'कम',
      medium: 'मध्यम',
      high: 'उच्च',
      critical: 'गंभीर',
      
      // Alert Types
      locationUpdate: 'स्थान अपडेट',
      riskZoneEntry: 'जोखिम क्षेत्र प्रवेश',
      checkIn: 'चेक इन',
      emergency: 'आपातकाल',
      
      // Common
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      confirm: 'पुष्टि करें',
      close: 'बंद करें',
      
      // PDF
      touristReport: 'पर्यटक रिपोर्ट',
      generatedOn: 'जेनरेट किया गया',
      totalAlerts: 'कुल अलर्ट',
      locationHistory: 'स्थान इतिहास',
    }
  },
  bn: {
    translation: {
      // Navigation
      dashboard: 'পর্যটক নিরাপত্তা ড্যাশবোর্ড',
      subtitle: 'রিয়েল-টাইম মনিটরিং এবং ব্যবস্থাপনা সিস্টেম',
      refresh: 'রিফ্রেশ',
      
      // Stats
      totalTourists: 'মোট পর্যটক',
      activeTourists: 'সক্রিয় পর্যটক',
      unresolvedAlerts: 'অমীমাংসিত অ্যালার্ট',
      riskZones: 'ঝুঁকি অঞ্চল',
      
      // Tourist Management
      searchTourists: 'নাম, ইমেইল বা আইডি দিয়ে পর্যটক খুঁজুন',
      addTourist: 'পর্যটক যোগ করুন',
      editTourist: 'পর্যটক সম্পাদনা করুন',
      deleteTourist: 'পর্যটক মুছুন',
      touristDetails: 'পর্যটক বিবরণ',
      name: 'নাম',
      email: 'ইমেইল',
      phone: 'ফোন',
      coordinates: 'স্থানাঙ্ক',
      status: 'অবস্থা',
      lastUpdate: 'শেষ আপডেট',
      emergencyContact: 'জরুরি যোগাযোগ',
      
      // Status
      active: 'সক্রিয়',
      inactive: 'নিষ্ক্রিয়',
      emergencyLabel: 'জরুরি',
      
      // Alerts
      recentAlerts: 'সাম্প্রতিক অ্যালার্ট',
      alertType: 'অ্যালার্ট প্রকার',
      severity: 'তীব্রতা',
      message: 'বার্তা',
      createdAt: 'তৈরি হয়েছে',
      resolved: 'সমাধান',
      unresolved: 'অমীমাংসিত',
      
      // Risk Zones
      riskZonesTitle: 'ঝুঁকি অঞ্চল',
      addRiskZone: 'ঝুঁকি অঞ্চল যোগ করুন',
      editRiskZone: 'ঝুঁকি অঞ্চল সম্পাদনা করুন',
      deleteRiskZone: 'ঝুঁকি অঞ্চল মুছুন',
      zoneName: 'অঞ্চলের নাম',
      description: 'বিবরণ',
      radius: 'ব্যাসার্ধ (কিমি)',
      
      // Map
      touristLocations: 'পর্যটক অবস্থান',
      legend: 'কিংবদন্তি',
      
      // Actions
      save: 'সংরক্ষণ',
      cancel: 'বাতিল',
      delete: 'মুছুন',
      edit: 'সম্পাদনা',
      view: 'দেখুন',
      generatePDF: 'PDF তৈরি করুন',
      
      // Severity Levels
      low: 'নিম্ন',
      medium: 'মাঝারি',
      high: 'উচ্চ',
      critical: 'সমালোচনামূলক',
      
      // Alert Types
      locationUpdate: 'অবস্থান আপডেট',
      riskZoneEntry: 'ঝুঁকি অঞ্চলে প্রবেশ',
      checkIn: 'চেক ইন',
      emergency: 'জরুরি',
      
      // Common
      loading: 'লোড হচ্ছে...',
      error: 'ত্রুটি',
      success: 'সফলতা',
      confirm: 'নিশ্চিত করুন',
      close: 'বন্ধ',
      
      // PDF
      touristReport: 'পর্যটক রিপোর্ট',
      generatedOn: 'তৈরি হয়েছে',
      totalAlerts: 'মোট অ্যালার্ট',
      locationHistory: 'অবস্থান ইতিহাস',
    }
  },
  ta: {
    translation: {
      // Navigation
      dashboard: 'சுற்றுலா பாதுகாப்பு டாஷ்போர்டு',
      subtitle: 'நிகழ்நேர கண்காணிப்பு மற்றும் மேலாண்மை அமைப்பு',
      refresh: 'புதுப்பிக்க',
      
      // Stats
      totalTourists: 'மொத்த சுற்றுலா பயணிகள்',
      activeTourists: 'செயலில் உள்ள சுற்றுலா பயணிகள்',
      unresolvedAlerts: 'தீர்க்கப்படாத எச்சரிக்கைகள்',
      riskZones: 'ஆபத்து மண்டலங்கள்',
      
      // Tourist Management
      searchTourists: 'பெயர், மின்னஞ்சல் அல்லது ஐடி மூலம் சுற்றுலா பயணிகளைத் தேடுங்கள்',
      addTourist: 'சுற்றுலா பயணியைச் சேர்க்கவும்',
      editTourist: 'சுற்றுலா பயணியைத் திருத்தவும்',
      deleteTourist: 'சுற்றுலா பயணியை நீக்கவும்',
      touristDetails: 'சுற்றுலா பயணி விவரங்கள்',
      name: 'பெயர்',
      email: 'மின்னஞ்சல்',
      phone: 'தொலைபேசி',
      coordinates: 'ஆயங்கள்',
      status: 'நிலை',
      lastUpdate: 'கடைசி புதுப்பிப்பு',
      emergencyContact: 'அவசர தொடர்பு',
      
      // Status
      active: 'செயலில்',
      inactive: 'செயலற்ற',
      emergencyLabel: 'அவசர',
      
      // Alerts
      recentAlerts: 'சமீபத்திய எச்சரிக்கைகள்',
      alertType: 'எச்சரிக்கை வகை',
      severity: 'கடுமை',
      message: 'செய்தி',
      createdAt: 'உருவாக்கப்பட்டது',
      resolved: 'தீர்க்கப்பட்டது',
      unresolved: 'தீர்க்கப்படாத',
      
      // Risk Zones
      riskZonesTitle: 'ஆபத்து மண்டலங்கள்',
      addRiskZone: 'ஆபத்து மண்டலத்தைச் சேர்க்கவும்',
      editRiskZone: 'ஆபத்து மண்டலத்தைத் திருத்தவும்',
      deleteRiskZone: 'ஆபத்து மண்டலத்தை நீக்கவும்',
      zoneName: 'மண்டலத்தின் பெயர்',
      description: 'விளக்கம்',
      radius: 'ஆரம் (கிமீ)',
      
      // Map
      touristLocations: 'சுற்றுலா பயணி இடங்கள்',
      legend: 'விளக்கம்',
      
      // Actions
      save: 'சேமிக்கவும்',
      cancel: 'ரத்து செய்',
      delete: 'நீக்கவும்',
      edit: 'திருத்தவும்',
      view: 'காண்க',
      generatePDF: 'PDF உருவாக்கவும்',
      
      // Severity Levels
      low: 'குறைந்த',
      medium: 'நடுத்தர',
      high: 'உயர்ந்த',
      critical: 'முக்கியமான',
      
      // Alert Types
      locationUpdate: 'இடம் புதுப்பிப்பு',
      riskZoneEntry: 'ஆபத்து மண்டலத்தில் நுழைவு',
      checkIn: 'செக் இன்',
      emergency: 'அவசர',
      
      // Common
      loading: 'ஏற்றுகிறது...',
      error: 'பிழை',
      success: 'வெற்றி',
      confirm: 'உறுதிப்படுத்தவும்',
      close: 'மூடவும்',
      
      // PDF
      touristReport: 'சுற்றுலா பயணி அறிக்கை',
      generatedOn: 'உருவாக்கப்பட்டது',
      totalAlerts: 'மொத்த எச்சரிக்கைகள்',
      locationHistory: 'இட வரலாறு',
    }
  },
  mr: { translation: { dashboard: 'पर्यटक सुरक्षा डॅशबोर्ड', subtitle: 'रिअल-टाइम मॉनिटरिंग आणि व्यवस्थापन', totalTourists: 'एकूण पर्यटक', activeTourists: 'सक्रिय पर्यटक', unresolvedAlerts: 'न सुटलेल्या सूचना', riskZones: 'धोका क्षेत्रे', generatePDF: 'PDF तयार करा' } },
  te: { translation: { dashboard: 'పర్యాటక భద్రత డాష్‌బోర్డ్', subtitle: 'రియల్-టైమ్ మానిటరింగ్ మరియు నిర్వహణ', totalTourists: 'మొత్తం పర్యాటకులు', activeTourists: 'సక్రియ పర్యాటకులు', unresolvedAlerts: 'పరిష్కరించని హెచ్చరికలు', riskZones: 'ప్రమాద ప్రాంతాలు', generatePDF: 'PDF సృష్టించండి' } },
  kn: { translation: { dashboard: 'ಪರ್ಯಟಕ ಸುರಕ್ಷತಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', subtitle: 'ರಿಯಲ್-ಟೈಮ್ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು ನಿರ್ವಹಣೆ', totalTourists: 'ಒಟ್ಟು ಪ್ರವಾಸಿಗರು', activeTourists: 'ಸಕ್ರಿಯ ಪ್ರವಾಸಿಗರು', unresolvedAlerts: 'ಬಾಕಿ ಎಚ್ಚರಿಕೆಗಳು', riskZones: 'ಅಪಾಯ ಪ್ರದೇಶಗಳು', generatePDF: 'PDF ರಚಿಸಿ' } },
  gu: { translation: { dashboard: 'પર્યટક સલામતી ડેશબોર્ડ', subtitle: 'રીઅલ-ટાઈમ મોનીટરીંગ અને મેનેજમેન્ટ', totalTourists: 'કુલ પર્યટકો', activeTourists: 'સક્રિય પર્યટકો', unresolvedAlerts: 'અનિર્ણિત એલર્ટ', riskZones: 'જોખમ ઝોન', generatePDF: 'PDF બનાવો' } },
  pa: { translation: { dashboard: 'ਯਾਤਰੀ ਸੁਰੱਖਿਆ ਡੈਸ਼ਬੋਰਡ', subtitle: 'ਰੀਅਲ-ਟਾਈਮ ਨਿਗਰਾਨੀ ਅਤੇ ਪ੍ਰਬੰਧਨ', totalTourists: 'ਕੁੱਲ ਯਾਤਰੀ', activeTourists: 'ਸਰਗਰਮ ਯਾਤਰੀ', unresolvedAlerts: 'ਅਨਸੁਲਝੇ ਚੇਤਾਵਨੀ', riskZones: 'ਖਤਰਾ ਖੇਤਰ', generatePDF: 'PDF ਬਣਾਓ' } },
  ur: { translation: { dashboard: 'سیاحتی حفاظت ڈیش بورڈ', subtitle: 'ریئل ٹائم مانیٹرنگ اور مینجمنٹ', totalTourists: 'کل سیاح', activeTourists: 'فعال سیاح', unresolvedAlerts: 'غیر حل شدہ الرٹس', riskZones: 'خطرے کے علاقے', generatePDF: 'PDF بنائیں' } },
  or: { translation: { dashboard: 'ପର୍ଯ୍ୟଟକ ସୁରକ୍ଷା ଡ୍ୟାଶବୋର୍ଡ', subtitle: 'ରିଅଲ୍-ଟାଇମ ମନିଟରିଂ ଏବଂ ପରିଚାଳନା', totalTourists: 'ମୋଟ ପର୍ଯ୍ୟଟକ', activeTourists: 'ସକ୍ରିୟ ପର୍ଯ୍ୟଟକ', unresolvedAlerts: 'ଅନମୋଚିତ ସତର୍କତା', riskZones: 'ଝୁମ୍ପ ଅଞ୍ଚଳ', generatePDF: 'PDF ସୃଷ୍ଟି କରନ୍ତୁ' } },
  ml: { translation: { dashboard: 'സഞ്ചാരികളുടെ സുരക്ഷ ഡാഷ്ബോർഡ്', subtitle: 'റിയൽ-ടൈം നിരീക്ഷണവും മാനേജ്മെന്റും', totalTourists: 'ആകെ യാത്രക്കാരൻ', activeTourists: 'സജീവ യാത്രക്കാരൻ', unresolvedAlerts: 'പരിഹരിക്കാത്ത അലർട്ടുകൾ', riskZones: 'അപകട മേഖലകൾ', generatePDF: 'PDF സൃഷ്ടിക്കുക' } },
  as: { translation: { dashboard: 'পর্যটক সুৰক্ষা ডেশ্বব' , subtitle: 'ৰিয়েল-টাইম মনিটৰিং আৰু ব্যৱস্থাপনা', totalTourists: 'মুঠ পৰ্যটক', activeTourists: 'সক্ৰিয় পৰ্যটক', unresolvedAlerts: 'অমীমাংসিত সতৰ্কবাৰ্তা', riskZones: 'বিপদ অঞ্চল', generatePDF: 'PDF সৃষ্টি কৰক' } },
  esES: {
    translation: {
      // Navigation
      dashboard: 'Panel de Seguridad Turística',
      subtitle: 'Sistema de monitoreo y gestión en tiempo real',
      refresh: 'Actualizar',
      
      // Stats
      totalTourists: 'Total de Turistas',
      activeTourists: 'Turistas Activos',
      unresolvedAlerts: 'Alertas Sin Resolver',
      riskZones: 'Zonas de Riesgo',
      
      // Tourist Management
      searchTourists: 'Buscar turistas por nombre, email o ID',
      addTourist: 'Agregar Turista',
      editTourist: 'Editar Turista',
      deleteTourist: 'Eliminar Turista',
      touristDetails: 'Detalles del Turista',
      name: 'Nombre',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      coordinates: 'Coordenadas',
      status: 'Estado',
      lastUpdate: 'Última Actualización',
      emergencyContact: 'Contacto de Emergencia',
      
      // Status
      active: 'Activo',
      inactive: 'Inactivo',
      emergencyLabel: 'Emergencia',
      
      // Alerts
      recentAlerts: 'Alertas Recientes',
      alertType: 'Tipo de Alerta',
      severity: 'Gravedad',
      message: 'Mensaje',
      createdAt: 'Creado En',
      resolved: 'Resuelto',
      unresolved: 'Sin Resolver',
      
      // Risk Zones
      riskZonesTitle: 'Zonas de Riesgo',
      addRiskZone: 'Agregar Zona de Riesgo',
      editRiskZone: 'Editar Zona de Riesgo',
      deleteRiskZone: 'Eliminar Zona de Riesgo',
      zoneName: 'Nombre de la Zona',
      description: 'Descripción',
      radius: 'Radio (km)',
      
      // Map
      touristLocations: 'Ubicaciones de Turistas',
      legend: 'Leyenda',
      
      // Actions
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      view: 'Ver',
      generatePDF: 'Generar PDF',
      
      // Severity Levels
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto',
      critical: 'Crítico',
      
      // Alert Types
      locationUpdate: 'Actualización de Ubicación',
      riskZoneEntry: 'Entrada a Zona de Riesgo',
      checkIn: 'Registro',
      emergency: 'Emergencia',
      
      // Common
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      confirm: 'Confirmar',
      close: 'Cerrar',
      
      // PDF
      touristReport: 'Reporte de Turista',
      generatedOn: 'Generado el',
      totalAlerts: 'Total de Alertas',
      locationHistory: 'Historial de Ubicaciones',
    }
  },
  frFR: {
    translation: {
      // Navigation
      dashboard: 'Tableau de Bord de Sécurité Touristique',
      subtitle: 'Système de surveillance et de gestion en temps réel',
      refresh: 'Actualiser',
      
      // Stats
      totalTourists: 'Total des Touristes',
      activeTourists: 'Touristes Actifs',
      unresolvedAlerts: 'Alertes Non Résolues',
      riskZones: 'Zones à Risque',
      
      // Tourist Management
      searchTourists: 'Rechercher des touristes par nom, email ou ID',
      addTourist: 'Ajouter un Touriste',
      editTourist: 'Modifier le Touriste',
      deleteTourist: 'Supprimer le Touriste',
      touristDetails: 'Détails du Touriste',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      coordinates: 'Coordonnées',
      status: 'Statut',
      lastUpdate: 'Dernière Mise à Jour',
      emergencyContact: 'Contact d\'Urgence',
      
      // Status
      active: 'Actif',
      inactive: 'Inactif',
      emergencyLabel: 'Urgence',
      
      // Alerts
      recentAlerts: 'Alertes Récentes',
      alertType: 'Type d\'Alerte',
      severity: 'Gravité',
      message: 'Message',
      createdAt: 'Créé Le',
      resolved: 'Résolu',
      unresolved: 'Non Résolu',
      
      // Risk Zones
      riskZonesTitle: 'Zones à Risque',
      addRiskZone: 'Ajouter une Zone à Risque',
      editRiskZone: 'Modifier la Zone à Risque',
      deleteRiskZone: 'Supprimer la Zone à Risque',
      zoneName: 'Nom de la Zone',
      description: 'Description',
      radius: 'Rayon (km)',
      
      // Map
      touristLocations: 'Emplacements des Touristes',
      legend: 'Légende',
      
      // Actions
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      view: 'Voir',
      generatePDF: 'Générer PDF',
      
      // Severity Levels
      low: 'Faible',
      medium: 'Moyen',
      high: 'Élevé',
      critical: 'Critique',
      
      // Alert Types
      locationUpdate: 'Mise à Jour de Localisation',
      riskZoneEntry: 'Entrée en Zone à Risque',
      checkIn: 'Enregistrement',
      emergency: 'Urgence',
      
      // Common
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      confirm: 'Confirmer',
      close: 'Fermer',
      
      // PDF
      touristReport: 'Rapport de Touriste',
      generatedOn: 'Généré le',
      totalAlerts: 'Total des Alertes',
      locationHistory: 'Historique des Emplacements',
    }
  }
};

// Initialize i18n
if (typeof window !== 'undefined') {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;