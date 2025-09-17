import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../Components/theme';

interface PanicButtonScreenProps {
  navigation?: any;
}

const PanicButtonScreen: React.FC<PanicButtonScreenProps> = () => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primary]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.sosButton}
          onPress={() =>
            Alert.alert(
              'SOS Sent',
              'Live location sent to nearest police unit & contacts'
            )
          }
        >
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>Use only in emergencies</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sosButton: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12,
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  sosText: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 3,
  },
  disclaimer: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 18,
    fontStyle: 'italic',
  },
});

export default PanicButtonScreen;


