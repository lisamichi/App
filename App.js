
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import ColorWheel from './components/ColorWheel';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/interior.png')} style={styles.headerImage} resizeMode="cover" />
      <View style={styles.overlay}>
        <View style={styles.topBar}>
          <Image source={require('./assets/bluetooth.png')} style={styles.icon} />
          <Text style={styles.logo}>MR Fahrzeugveredelung</Text>
          <Image source={require('./assets/settings.png')} style={styles.icon} />
        </View>
        <View style={styles.zoneSelector}>
          <TouchableOpacity style={[styles.zoneButton, styles.activeZone]}><Text style={styles.zoneText}>1 ZONE</Text></TouchableOpacity>
          <TouchableOpacity style={styles.zoneButton}><Text style={styles.zoneText}>2 ZONES</Text></TouchableOpacity>
          <TouchableOpacity style={styles.zoneButton}><Text style={styles.zoneText}>DYNAMIC</Text></TouchableOpacity>
        </View>
        <ColorWheel />
        <Text style={styles.label}>Farb-Favoriten</Text>
        <ScrollView horizontal contentContainerStyle={styles.colorRow}>
          {['#f00', '#f60', '#ff0', '#0f0', '#0af', '#00f', '#fff'].map((color, index) => (
            <View key={index} style={[styles.colorCircle, { backgroundColor: color }]} />
          ))}
        </ScrollView>
        <Text style={styles.label}>Helligkeit</Text>
        <View style={styles.brightnessBar}>
          <View style={styles.brightnessLine}></View>
          <Image source={require('./assets/sun.png')} style={styles.sunIcon} />
        </View>
        <Text style={styles.language}>Deutsch ></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  headerImage: { width: '100%', height: 220 },
  overlay: { position: 'absolute', top: 0, width: '100%', alignItems: 'center' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, width: '90%' },
  icon: { width: 24, height: 24 },
  logo: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  zoneSelector: { flexDirection: 'row', marginTop: 220, marginBottom: 10 },
  zoneButton: { padding: 10, borderRadius: 20, marginHorizontal: 5, backgroundColor: '#222' },
  activeZone: { borderColor: '#00f', borderWidth: 2 },
  zoneText: { color: '#fff' },
  label: { color: '#fff', fontSize: 16, marginTop: 20 },
  colorRow: { flexDirection: 'row', paddingVertical: 10 },
  colorCircle: { width: 30, height: 30, borderRadius: 15, marginHorizontal: 5 },
  brightnessBar: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  brightnessLine: { height: 4, flex: 1, backgroundColor: '#fff' },
  sunIcon: { width: 20, height: 20, marginLeft: 5 },
  language: { color: '#fff', alignSelf: 'flex-end', margin: 20 }
});
