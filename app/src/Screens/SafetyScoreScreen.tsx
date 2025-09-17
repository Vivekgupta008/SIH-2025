import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { colors } from '../Components/theme';

interface SafetyScoreScreenProps {
  navigation?: any;
}

const SafetyScoreScreen: React.FC<SafetyScoreScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const baseBreakdown = [
    { label: 'Location Risk', value: 70, color: '#60A5FA' },
    { label: 'Time of Day', value: 85, color: '#34D399' },
    { label: 'Crowd Density', value: 62, color: '#F59E0B' },
    { label: 'Personal Profile', value: 90, color: '#A78BFA' },
    { label: 'Emergency Readiness', value: 76, color: '#F472B6' },
  ];
  const [breakdown, setBreakdown] = useState(baseBreakdown.map(b => ({ ...b, animated: 0 })) as Array<{label: string; value: number; color: string; animated?: number}>);

  useEffect(() => {
    const t = setTimeout(() => {
      // mock fetch completes
      setScore(82);
      // animate bars
      let step = 0;
      const interval = setInterval(() => {
        step += 5;
        setBreakdown(prev => prev.map((b, i) => {
          const target = baseBreakdown[i].value;
          const next = Math.min(step, target);
          return { ...b, animated: next };
        }));
        if (step >= 100) clearInterval(interval);
      }, 16);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Safety Score</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={styles.loaderWrap}>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <Text style={styles.loaderText}>Calculating safety insights…</Text>
          </View>
        ) : null}
        {/* Score Ring (mock) */}
        {!loading && (
        <View style={styles.scoreContainer}>
          <View style={styles.scoreOuter}>
            <View style={styles.scoreInner}>
              <Text style={styles.scoreText}>{score}</Text>
              <Text style={styles.scoreLabel}>/ 100</Text>
            </View>
          </View>
          <Text style={styles.scoreCaption}>Overall Safety</Text>
        </View>
        )}

        {/* Breakdown */}
        {!loading && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Risk Breakdown</Text>
          {breakdown.map((item) => (
            <View key={item.label} style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>{item.label}</Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${item.animated ?? 0}%`, backgroundColor: item.color }]} />
              </View>
              <Text style={styles.breakdownValue}>{item.animated ?? 0}</Text>
            </View>
          ))}
        </View>
        )}

        {/* Tips */}
        {!loading && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Safety Tips</Text>
          <Text style={styles.tip}>• Share your live location with a trusted contact.</Text>
          <Text style={styles.tip}>• Avoid poorly lit areas after dark.</Text>
          <Text style={styles.tip}>• Keep emergency numbers on speed dial.</Text>
          <Text style={styles.tip}>• Stay within approved geo-fenced zones.</Text>
        </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  backButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  scroll: {
    flex: 1,
  },
  loaderWrap: {
    alignItems: 'center',
    marginTop: 80,
  },
  loaderText: {
    color: colors.textSecondary,
    marginTop: 12,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreOuter: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  scoreInner: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: colors.textPrimary,
    fontSize: 42,
    fontWeight: '800',
  },
  scoreLabel: {
    color: colors.textSecondary,
    marginTop: 4,
  },
  scoreCaption: {
    color: colors.textPrimary,
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  breakdownRow: {
    marginBottom: 12,
  },
  breakdownLabel: {
    color: colors.textSecondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  progressTrack: {
    height: 10,
    backgroundColor: colors.border,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    borderRadius: 999,
  },
  breakdownValue: {
    marginTop: 6,
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  tip: {
    color: colors.textSecondary,
    marginBottom: 8,
  },
});

export default SafetyScoreScreen;


