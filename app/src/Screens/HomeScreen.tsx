// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
// import LinearGradient from 'react-native-linear-gradient';
// import { colors } from '../Components/theme';

// const { width } = Dimensions.get('window');
// const cardWidth = (width - 60) / 2; // 2 cards per row with padding

// interface HomeScreenProps {
//   navigation?: any; // TODO: Replace with proper navigation type
// }

// interface CardProps {
//   title: string;
//   icon: string;
//   onPress: () => void;
//   backgroundColor?: string;
// }

// const Card: React.FC<CardProps> = ({ title, icon, onPress, backgroundColor = '#FFFFFF' }) => (
//   <TouchableOpacity
//     style={[styles.card, { backgroundColor }]}
//     onPress={onPress}
//     activeOpacity={0.8}
//   >
//     <Text style={styles.cardTitle}>{title}</Text>
//   </TouchableOpacity>
// );

// const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
//   const handleLogout = () => {
//     // TODO: Implement logout logic
//     navigation?.navigate('WelcomeScreen');
//   };

//   const handleTouristID = () => {
//     navigation?.navigate('TouristIDScreen');
//   };

//   const handleSafetyScore = () => {
//     navigation?.navigate('SafetyScoreScreen');
//   };

//   const handleGeoFencing = () => {
//     navigation?.navigate('GeoFencingAlertsScreen');
//   };

//   const handlePanicButton = () => {
//     navigation?.navigate('PanicButtonScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Wave Header */}
//         <View style={styles.waveHeader}>
//           <View style={styles.waveHeaderContent}>
//             <View style={styles.headerTop}>
//               <View style={styles.headerLeft}>
//                 <View style={styles.avatar}>
//                   <Text style={styles.avatarText}>T</Text>
//                 </View>
//                 <View>
//                   <Text style={styles.greeting}>Welcome back,</Text>
//                   <Text style={styles.welcomeText}>Tourist</Text>
//                 </View>
//               </View>
//               <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//                 <Text style={styles.logoutButtonText}>Logout</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.appInfo}>
//               <Text style={styles.appTagline}>Your safe travel companion</Text>
//               <Text style={styles.appTitle}>One app for all your travels</Text>
//               <Text style={styles.appSub}>ID, safety, geo-fencing and more</Text>
//             </View>
//           </View>
//           <Svg
//             width={width}
//             height={60}
//             viewBox={`0 0 ${width} 60`}
//             style={styles.waveSvg}
//           >
//             <Path
//               d={`M0,0 L0,30 Q ${width / 2},60 ${width},30 L ${width},0 Z`}
//               fill={colors.primary}
//             />
//           </Svg>
//         </View>

//         {/* Overview Card under header */}
//         <View style={styles.heroSection}>
//           <View style={styles.heroCard}>
//             <View style={styles.heroLeft}>
//               <Text style={styles.heroLabel}>Current Trip</Text>
//               <Text style={styles.heroTitle}>Goa, India</Text>
//               <Text style={styles.heroDates}>Dec 15 - Dec 25, 2025</Text>
//               <View style={styles.heroBadges}>
//                 <View style={[styles.badge, { backgroundColor: 'rgba(5, 150, 105, 0.15)', borderColor: 'rgba(5, 150, 105, 0.35)' }]}>
//                   <Text style={[styles.badgeText, { color: '#065F46' }]}>Score 82</Text>
//                 </View>
//                 <View style={[styles.badge, { backgroundColor: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.35)' }]}>
//                   <Text style={[styles.badgeText, { color: '#92400E' }]}>2 Alerts</Text>
//                 </View>
//               </View>
//               <TouchableOpacity style={styles.ctaPrimary} onPress={handleSafetyScore}>
//                 <Text style={styles.ctaPrimaryText}>View Safety Insights</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.heroRight}>
//               <View style={styles.heroCircleOuter}>
//                 <View style={styles.heroCircleInner}>
//                   <Text style={styles.heroScore}>82</Text>
//                 </View>
//               </View>
//               <Text style={styles.heroScoreLabel}>Safety</Text>
//             </View>
//           </View>
//         </View>

//         {/* Cards Grid */}
//         <View style={styles.cardsContainer}>
//           <View style={styles.cardRow}>
//             <Card
//               title="Tourist ID"
//               icon=""
//               onPress={handleTouristID}
//               backgroundColor={colors.surfaceMuted}
//             />
//             <Card
//               title="Safety Score"
//               icon=""
//               onPress={handleSafetyScore}
//               backgroundColor={colors.surfaceMuted}
//             />
//           </View>
          
//           <View style={styles.cardRow}>
//             <Card
//               title="Geo-Fencing Alerts"
//               icon=""
//               onPress={handleGeoFencing}
//               backgroundColor={colors.surfaceMuted}
//             />
//             <Card
//               title="Panic Button"
//               icon=""
//               onPress={handlePanicButton}
//               backgroundColor={colors.surfaceMuted}
//             />
//           </View>
//         </View>

//         {/* Upcoming Trip */}
//         <View style={styles.section}>
//           <View style={styles.cardWideRow}>
//             <View style={styles.cardWideHalf}>
//               <Text style={styles.sectionTitle}>Upcoming Trip</Text>
//               <Text style={styles.tripTitle}>Dubai, UAE</Text>
//               <Text style={styles.tripSubtitle}>Jan 12 - Jan 19, 2026</Text>
//             </View>
//             <View style={styles.cardWideHalf}>
//               <Text style={styles.sectionTitle}>Quick Actions</Text>
//               <TouchableOpacity style={styles.quickBtn} onPress={handleTouristID}>
//                 <Text style={styles.quickBtnText}>Show Tourist ID</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.quickBtnSecondary} onPress={handleGeoFencing}>
//                 <Text style={styles.quickBtnSecondaryText}>View Geo-Fences</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//         {/* Previous Trips */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Previous Trips</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.tripCard}>
//               <Text style={styles.tripCardTitle}>Jaipur, India</Text>
//               <Text style={styles.tripCardDates}>Oct 02 - Oct 09, 2025</Text>
//               <View style={styles.tripScorePill}><Text style={styles.tripScorePillText}>Score 78</Text></View>
//             </View>
//             <View style={styles.tripCard}>
//               <Text style={styles.tripCardTitle}>Singapore</Text>
//               <Text style={styles.tripCardDates}>Aug 15 - Aug 20, 2025</Text>
//               <View style={styles.tripScorePill}><Text style={styles.tripScorePillText}>Score 85</Text></View>
//             </View>
//             <View style={styles.tripCard}>
//               <Text style={styles.tripCardTitle}>Kerala, India</Text>
//               <Text style={styles.tripCardDates}>May 05 - May 12, 2025</Text>
//               <View style={styles.tripScorePill}><Text style={styles.tripScorePillText}>Score 81</Text></View>
//             </View>
//           </ScrollView>
//         </View>

//         {/* Recent Alerts */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Recent Alerts</Text>
//           <View style={styles.alertItem}>
//             <View style={[styles.alertDot, { backgroundColor: '#F59E0B' }]} />
//             <View style={{ flex: 1 }}>
//               <Text style={styles.alertTitle}>High tide warning near Baga Beach</Text>
//               <Text style={styles.alertMeta}>2h ago • Geo-fence</Text>
//             </View>
//             <Text style={styles.alertPill}>Caution</Text>
//           </View>
//           <View style={styles.alertItem}>
//             <View style={[styles.alertDot, { backgroundColor: '#EF4444' }]} />
//             <View style={{ flex: 1 }}>
//               <Text style={styles.alertTitle}>Crowd density high in Calangute</Text>
//               <Text style={styles.alertMeta}>6h ago • AI Analysis</Text>
//             </View>
//             <Text style={[styles.alertPill, { backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#7F1D1D', borderColor: 'rgba(239, 68, 68, 0.35)' }]}>High</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   header: {
//     display: 'none',
//   },
//   waveHeader: {
//     backgroundColor: colors.primary,
//     paddingTop: 20,
//     paddingBottom: 40,
//     paddingHorizontal: 20,
//   },
//   waveHeaderContent: {
//     paddingTop: 12,
//     paddingBottom: 16,
//   },
//   headerTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   appInfo: {
//     alignItems: 'center',
//   },
//   appTagline: {
//     color: '#E0E7FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   appTitle: {
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: '800',
//     marginTop: 6,
//     textAlign: 'center',
//   },
//   appSub: {
//     color: '#E0E7FF',
//     marginTop: 4,
//     fontSize: 12,
//     textAlign: 'center',
//   },
//   waveSvg: {
//     position: 'absolute',
//     bottom: -1,
//     left: 0,
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   avatar: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: '#EEF2FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   avatarText: {
//     color: colors.primary,
//     fontWeight: '800',
//     fontSize: 18,
//   },
//   greeting: {
//     color: '#E0E7FF',
//     marginBottom: 2,
//     fontSize: 12,
//   },
//   welcomeText: {
//     fontSize: 18,
//     fontWeight: '800',
//     color: '#FFFFFF',
//   },
//   logoutButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.3)',
//   },
//   logoutButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '700',
//   },
//   cardsContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   heroSection: {
//     paddingHorizontal: 20,
//     marginBottom: 16,
//   },
//   heroCard: {
//     backgroundColor: colors.surface,
//     borderRadius: 16,
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: colors.border,
//   },
//   heroLeft: {
//     flex: 1,
//   },
//   heroLabel: {
//     color: colors.textSecondary,
//   },
//   heroTitle: {
//     color: colors.textPrimary,
//     fontSize: 20,
//     fontWeight: '800',
//     marginTop: 6,
//   },
//   heroDates: {
//     color: colors.textSecondary,
//     marginTop: 2,
//   },
//   heroBadges: {
//     flexDirection: 'row',
//     gap: 8,
//     marginTop: 10,
//   },
//   badge: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 999,
//     borderWidth: 1,
//   },
//   badgeText: {
//     fontWeight: '700',
//   },
//   ctaPrimary: {
//     marginTop: 12,
//     backgroundColor: colors.primary,
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     alignSelf: 'flex-start',
//     borderRadius: 10,
//   },
//   ctaPrimaryText: {
//     color: '#FFFFFF',
//     fontWeight: '700',
//   },
//   heroRight: {
//     alignItems: 'center',
//     marginLeft: 16,
//   },
//   heroCircleOuter: {
//     width: 86,
//     height: 86,
//     borderRadius: 43,
//     borderWidth: 6,
//     borderColor: 'rgba(255, 255, 255, 0.35)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heroCircleInner: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: '#EEF2FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heroScore: {
//     color: colors.textPrimary,
//     fontSize: 22,
//     fontWeight: '800',
//   },
//   heroScoreLabel: {
//     color: colors.textSecondary,
//     marginTop: 6,
//     fontWeight: '700',
//   },
//   cardWideRow: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   cardWideHalf: {
//     flex: 1,
//     backgroundColor: colors.surface,
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   quickBtn: {
//     backgroundColor: colors.primary,
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 10,
//     alignSelf: 'flex-start',
//     marginTop: 6,
//   },
//   quickBtnText: {
//     color: '#FFFFFF',
//     fontWeight: '700',
//   },
//   quickBtnSecondary: {
//     backgroundColor: colors.surfaceMuted,
//     borderWidth: 1,
//     borderColor: colors.border,
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 10,
//     alignSelf: 'flex-start',
//     marginTop: 8,
//   },
//   quickBtnSecondaryText: {
//     color: colors.textPrimary,
//     fontWeight: '700',
//   },
//   section: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   cardWide: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   sectionTitle: {
//     color: '#111827',
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
//   overviewRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   overviewItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   overviewLabel: {
//     color: '#6B7280',
//     marginBottom: 6,
//   },
//   overviewValue: {
//     color: '#0F172A',
//     fontSize: 18,
//     fontWeight: '800',
//   },
//   tripTitle: {
//     color: '#0F172A',
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   tripSubtitle: {
//     color: '#6B7280',
//     marginTop: 4,
//   },
//   tripList: {
//     backgroundColor: 'transparent',
//   },
//   tripCard: {
//     width: 200,
//     backgroundColor: colors.surface,
//     borderRadius: 16,
//     padding: 16,
//     marginRight: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   tripCardTitle: {
//     color: '#111827',
//     fontWeight: '800',
//     fontSize: 16,
//   },
//   tripCardDates: {
//     color: '#6B7280',
//     marginTop: 6,
//   },
//   tripScorePill: {
//     alignSelf: 'flex-start',
//     backgroundColor: 'rgba(5, 150, 105, 0.15)',
//     borderColor: 'rgba(5, 150, 105, 0.35)',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 999,
//     marginTop: 10,
//   },
//   tripScorePillText: {
//     color: '#065F46',
//     fontWeight: '700',
//   },
//   tripItem: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   tripItemTitle: {
//     color: '#111827',
//     fontWeight: '700',
//     marginBottom: 4,
//   },
//   tripItemMeta: {
//     color: '#6B7280',
//   },
//   alertItem: {
//     backgroundColor: colors.surface,
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   alertDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   alertTitle: {
//     color: '#111827',
//     fontWeight: '700',
//     marginBottom: 4,
//   },
//   alertMeta: {
//     color: '#6B7280',
//   },
//   alertPill: {
//     backgroundColor: 'rgba(245, 158, 11, 0.15)',
//     borderColor: 'rgba(245, 158, 11, 0.35)',
//     borderWidth: 1,
//     color: '#92400E',
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 999,
//     fontWeight: '700',
//   },
//   cardRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     width: cardWidth,
//     height: 120,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'rgba(226, 232, 240, 0.8)',
//   },
//   cardTitle: {
//     color: '#0F172A',
//     fontSize: 14,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
// });

// export default HomeScreen;



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../Components/theme';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 2 cards per row with gap

interface HomeScreenProps {
  navigation?: any; // TODO: Replace with proper navigation type
}

interface CardProps {
  title: string;
  icon: string;
  onPress: () => void;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, onPress, backgroundColor = '#FFFFFF' }) => (
  <TouchableOpacity
    style={[styles.card, { backgroundColor }]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleLogout = () => {
    navigation?.navigate('WelcomeScreen');
  };

  const handleTouristID = () => {
    navigation?.navigate('TouristIDScreen');
  };

  const handleSafetyScore = () => {
    navigation?.navigate('SafetyScoreScreen');
  };

  const handleGeoFencing = () => {
    navigation?.navigate('GeoFencingAlertsScreen');
  };

  const handlePanicButton = () => {
    navigation?.navigate('PanicButtonScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Wave Header with Gradient */}
        <LinearGradient
          colors={[colors.primary, colors.primary]}
          style={styles.waveHeader}
        >
          <View style={styles.waveHeaderContent}>
            <View style={styles.headerTop}>
              <View style={styles.headerLeft}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>T</Text>
                </View>
                <View>
                  <Text style={styles.greeting}>Welcome back,</Text>
                  <Text style={styles.welcomeText}>Tourist</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.appInfo}>
              <Text style={styles.appTagline}>Your safe travel companion</Text>
              <Text style={styles.appTitle}>One app for all your travels</Text>
              <Text style={styles.appSub}>ID, safety, geo-fencing and more</Text>
            </View>
          </View>
        </LinearGradient>
        <Svg width={width} height={80} viewBox={`0 0 ${width} 60`} style={styles.waveSvg}>
          <Path
            d={`M0,30 Q ${width / 2},60 ${width},30 L ${width},0 L 0,0 Z`}
            fill={colors.primary}
          />
        </Svg>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroCard}>
            <View style={styles.heroLeft}>
              <Text style={styles.heroLabel}>Current Trip</Text>
              <Text style={styles.heroTitle}>Goa, India</Text>
              <Text style={styles.heroDates}>Dec 15 - Dec 25, 2025</Text>
              <View style={styles.heroBadges}>
                <View style={[styles.badge, { backgroundColor: '#E0F7FA', borderColor: '#00ACC1' }]}>
                  <Text style={[styles.badgeText, { color: '#006064' }]}>Score 82</Text>
                </View>

                <View style={[styles.badge, { backgroundColor: '#FFF8E1', borderColor: '#FBC02D' }]}>
                  <Text style={[styles.badgeText, { color: '#795548' }]}>2 Alerts</Text>
                </View>

              </View>
              <TouchableOpacity style={styles.ctaPrimary} onPress={handleSafetyScore}>
                <Text style={styles.ctaPrimaryText}>View Safety Insights</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.heroRight}>
              <View style={styles.heroCircleOuter}>
                <View style={styles.heroCircleInner}>
                  <Text style={styles.heroScore}>82</Text>
                </View>
              </View>
              <Text style={styles.heroScoreLabel}>Safety</Text>
            </View>
          </View>
        </View>

        {/* Cards Grid */}
        <View style={styles.cardsContainer}>
          <View style={styles.cardRow}>
            <Card
              title="Tourist ID"
              icon=""
              onPress={handleTouristID}
              backgroundColor={colors.surfaceMuted}
            />
            <Card
              title="Safety Score"
              icon=""
              onPress={handleSafetyScore}
              backgroundColor={colors.surfaceMuted}
            />
          </View>
          <View style={styles.cardRow}>
            <Card
              title="Geo-Fencing Alerts"
              icon=""
              onPress={handleGeoFencing}
              backgroundColor={colors.surfaceMuted}
            />
            <Card
              title="Panic Button"
              icon=""
              onPress={handlePanicButton}
              backgroundColor={colors.surfaceMuted}
            />
          </View>
        </View>

        {/* Upcoming Trip */}
        <View style={styles.section}>
          <View style={styles.cardWideRow}>
            <View style={styles.cardWideHalf}>
              <Text style={styles.sectionTitle}>Upcoming Trip</Text>
              <Text style={styles.tripTitle}>Dubai, UAE</Text>
              <Text style={styles.tripSubtitle}>Jan 12 - Jan 19, 2026</Text>
            </View>
            <View style={styles.cardWideHalf}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <TouchableOpacity style={styles.quickBtn} onPress={handleTouristID}>
                <Text style={styles.quickBtnText}>Show Tourist ID</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickBtnSecondary} onPress={handleGeoFencing}>
                <Text style={styles.quickBtnSecondaryText}>View Geo-Fences</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Previous Trips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Previous Trips</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tripCard}>
              <Text style={styles.tripCardTitle}>Jaipur, India</Text>
              <Text style={styles.tripCardDates}>Oct 02 - Oct 09, 2025</Text>
              <View style={styles.tripScorePill}><Text style={styles.tripScorePillText}>Score 78</Text></View>
            </View>
            <View style={styles.tripCard}>
              <Text style={styles.tripCardTitle}>Singapore</Text>
              <Text style={styles.tripCardDates}>Aug 15 - Aug 20, 2025</Text>
              <View style={styles.tripScorePill}><Text style={styles.tripScorePillText}>Score 85</Text></View>
            </View>
            <View style={styles.tripCard}>
              <Text style={styles.tripCardTitle}>Kerala, India</Text>
              <Text style={styles.tripCardDates}>May 05 - May 12, 2025</Text>
              <View style={styles.tripScorePill}><Text style={styles.tripScorePillText}>Score 81</Text></View>
            </View>
          </ScrollView>
        </View>

        {/* Recent Alerts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Alerts</Text>
          <View style={styles.alertItem}>
            <View style={[styles.alertDot, { backgroundColor: '#F59E0B' }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.alertTitle}>High tide warning near Baga Beach</Text>
              <Text style={styles.alertMeta}>2h ago • Geo-fence</Text>
            </View>
            <Text style={styles.alertPill}>Caution</Text>
          </View>
          <View style={styles.alertItem}>
            <View style={[styles.alertDot, { backgroundColor: '#EF4444' }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.alertTitle}>Crowd density high in Calangute</Text>
              <Text style={styles.alertMeta}>6h ago • AI Analysis</Text>
            </View>
            <Text style={[styles.alertPill, { backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#7F1D1D', borderColor: 'rgba(239, 68, 68, 0.35)' }]}>High</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  waveHeader: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  waveHeaderContent: {
    paddingTop: 32,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  appInfo: {
    alignItems: 'center',
    marginTop: 40,
    // zIndex:100,
  },
  appTagline: {
    color: '#E0E7FF',
    fontSize: 14,
    fontWeight: '500',
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 6,
    textAlign: 'center',
  },
  appSub: {
    color: '#E0E7FF',
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  waveSvg: {
    marginTop: -20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 18,
  },
  greeting: {
    color: '#E0E7FF',
    marginBottom: 2,
    fontSize: 12,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heroSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  heroCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  heroLeft: {
    flex: 1,
  },
  heroLabel: {
    color: colors.textSecondary,
  },
  heroTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 6,
  },
  heroDates: {
    color: colors.textSecondary,
    marginTop: 2,
  },
  heroBadges: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  badgeText: {
    fontWeight: '700',
  },
  ctaPrimary: {
    marginTop: 12,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  ctaPrimaryText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  heroRight: {
    alignItems: 'center',
    marginLeft: 16,
  },
  heroCircleOuter: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 6,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCircleInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroScore: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
  heroScoreLabel: {
    color: colors.textSecondary,
    marginTop: 6,
    fontWeight: '700',
  },
  cardWideRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cardWideHalf: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  quickBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  quickBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  quickBtnSecondary: {
    backgroundColor: colors.surfaceMuted,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  quickBtnSecondaryText: {
    color: colors.textPrimary,
    fontWeight: '700',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  tripTitle: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '700',
  },
  tripSubtitle: {
    color: '#6B7280',
    marginTop: 4,
  },
  tripCard: {
    width: 200,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  tripCardTitle: {
    color: '#111827',
    fontWeight: '800',
    fontSize: 16,
  },
  tripCardDates: {
    color: '#6B7280',
    marginTop: 6,
  },
  tripScorePill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(5, 150, 105, 0.15)',
    borderColor: 'rgba(5, 150, 105, 0.35)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginTop: 10,
  },
  tripScorePillText: {
    color: '#065F46',
    fontWeight: '700',
  },
  alertItem: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  alertTitle: {
    color: '#111827',
    fontWeight: '700',
    marginBottom: 4,
  },
  alertMeta: {
    color: '#6B7280',
  },
  alertPill: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderColor: 'rgba(245, 158, 11, 0.35)',
    borderWidth: 1,
    color: '#92400E',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '700',
    fontSize: 12,
  },
  cardRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  card: {
    width: cardWidth,
    height: 120,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTitle: {
    color: '#111827',
    fontWeight: '800',
    fontSize: 15,
  },
});

export default HomeScreen;
