import { Image } from 'expo-image';
import { useState } from 'react';
import { Alert, Linking, Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const handleLearnMore = (topic: string, url: string) => {
    Alert.alert(
      `Learn about ${topic}`,
      `Would you like to open the documentation?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open', onPress: () => Linking.openURL(url) }
      ]
    );
  };

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F0F0F0', dark: '#1A1A1A' }}
      headerImage={
        <ThemedView style={styles.headerImageContainer}>
          <IconSymbol
            size={280}
            color="#4A90E2"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
          <ThemedText style={styles.headerSubtitle}>Developer Resources</ThemedText>
        </ThemedView>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <IconSymbol name="magnifyingglass" size={28} color="#4A90E2" />
        <ThemedText type="title" style={styles.titleText}>Explore & Learn</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.introContainer}>
        <ThemedText style={styles.introText}>
          Discover the powerful features and capabilities of this React Native Expo application. 
          Each section below contains essential information to help you build amazing mobile experiences.
        </ThemedText>
      </ThemedView>

      <Collapsible title="🗂️ File-based Routing" style={styles.collapsibleSection}>
        <ThemedView style={styles.sectionContent}>
          <ThemedText style={styles.sectionText}>
            This app uses Expo Router's file-based routing system with two main screens:
          </ThemedText>
          <ThemedView style={styles.fileList}>
            <ThemedText type="defaultSemiBold" style={styles.fileName}>
              📄 app/(tabs)/index.tsx
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.fileName}>
              📄 app/(tabs)/explore.tsx
            </ThemedText>
          </ThemedView>
          <ThemedText style={styles.sectionText}>
            The layout configuration is managed in{' '}
            <ThemedText type="defaultSemiBold" style={styles.highlight}>
              app/(tabs)/_layout.tsx
            </ThemedText>
            {' '}which sets up the tab navigation structure.
          </ThemedText>
          <ExternalLink 
            href="https://docs.expo.dev/router/introduction"
            style={styles.learnMoreLink}
          >
            <ThemedText type="link" style={styles.linkText}>
              📚 Learn more about Expo Router
            </ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      <Collapsible title="📱 Cross-Platform Support" style={styles.collapsibleSection}>
        <ThemedView style={styles.sectionContent}>
          <ThemedText style={styles.sectionText}>
            This project runs seamlessly across multiple platforms:
          </ThemedText>
          <ThemedView style={styles.platformList}>
            <ThemedText style={styles.platformItem}>🤖 Android</ThemedText>
            <ThemedText style={styles.platformItem}>🍎 iOS</ThemedText>
            <ThemedText style={styles.platformItem}>🌐 Web</ThemedText>
          </ThemedView>
          <ThemedView style={styles.tipContainer}>
            <ThemedText style={styles.tipText}>
              💡 <ThemedText type="defaultSemiBold">Pro Tip:</ThemedText> Press{' '}
              <ThemedText type="defaultSemiBold" style={styles.keyHighlight}>w</ThemedText>{' '}
              in your terminal to launch the web version instantly!
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </Collapsible>

      <Collapsible title="🖼️ Image Optimization" style={styles.collapsibleSection}>
        <ThemedView style={styles.sectionContent}>
          <ThemedText style={styles.sectionText}>
            Optimize your images for different screen densities using:
          </ThemedText>
          <ThemedView style={styles.densityList}>
            <ThemedText type="defaultSemiBold" style={styles.densityItem}>
              @2x - High DPI displays
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.densityItem}>
              @3x - Extra high DPI displays
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.imageContainer}>
            <Image 
              source={require('@/assets/images/react-logo.png')} 
              style={styles.exampleImage}
              contentFit="contain"
            />
          </ThemedView>
          <ExternalLink 
            href="https://reactnative.dev/docs/images"
            style={styles.learnMoreLink}
          >
            <ThemedText type="link" style={styles.linkText}>
              📚 Image handling best practices
            </ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      <Collapsible title="🔤 Custom Typography" style={styles.collapsibleSection}>
        <ThemedView style={styles.sectionContent}>
          <ThemedText style={styles.sectionText}>
            Custom fonts are loaded in{' '}
            <ThemedText type="defaultSemiBold" style={styles.highlight}>
              app/_layout.tsx
            </ThemedText>
          </ThemedText>
          <ThemedView style={styles.fontExample}>
            <ThemedText style={{ fontFamily: 'SpaceMono', fontSize: 16, textAlign: 'center' }}>
              This text uses the SpaceMono font family
            </ThemedText>
          </ThemedView>
          <ExternalLink 
            href="https://docs.expo.dev/versions/latest/sdk/font"
            style={styles.learnMoreLink}
          >
            <ThemedText type="link" style={styles.linkText}>
              📚 Font loading documentation
            </ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      <Collapsible title="🌓 Theme Support" style={styles.collapsibleSection}>
        <ThemedView style={styles.sectionContent}>
          <ThemedText style={styles.sectionText}>
            Built-in light and dark mode support with the{' '}
            <ThemedText type="defaultSemiBold" style={styles.highlight}>
              useColorScheme()
            </ThemedText>{' '}
            hook for dynamic UI adaptation.
          </ThemedText>
          <ThemedView style={styles.themeInfo}>
            <ThemedText style={styles.themeText}>
              🌞 Light Mode • 🌙 Dark Mode
            </ThemedText>
          </ThemedView>
          <ExternalLink 
            href="https://docs.expo.dev/develop/user-interface/color-themes/"
            style={styles.learnMoreLink}
          >
            <ThemedText type="link" style={styles.linkText}>
              📚 Color themes guide
            </ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      <Collapsible title="✨ Animations & Effects" style={styles.collapsibleSection}>
        <ThemedView style={styles.sectionContent}>
          <ThemedText style={styles.sectionText}>
            This template showcases powerful animation capabilities:
          </ThemedText>
          <ThemedView style={styles.animationList}>
            <ThemedText style={styles.animationItem}>
              👋 Wave animation in{' '}
              <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText>
            </ThemedText>
            <ThemedText style={styles.animationItem}>
              🔄 Powered by{' '}
              <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>
            </ThemedText>
            {Platform.select({
              ios: (
                <ThemedText style={styles.animationItem}>
                  📜 Parallax scrolling in{' '}
                  <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>
                </ThemedText>
              ),
            })}
          </ThemedView>
        </ThemedView>
      </Collapsible>

      <ThemedView style={styles.footerContainer}>
        <ThemedText style={styles.footerText}>
          Ready to build something amazing? Start exploring these features and create your next great app! 🚀
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    bottom: -60,
    left: -35,
    position: 'absolute',
  },
  headerSubtitle: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
    opacity: 0.7,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  titleText: {
    flex: 1,
  },
  introContainer: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  collapsibleSection: {
    marginBottom: 8,
  },
  sectionContent: {
    padding: 4,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  fileList: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  fileName: {
    fontSize: 14,
    marginBottom: 4,
  },
  highlight: {
    color: '#4A90E2',
  },
  learnMoreLink: {
    marginTop: 12,
  },
  linkText: {
    fontSize: 14,
  },
  platformList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  platformItem: {
    fontSize: 16,
    textAlign: 'center',
  },
  tipContainer: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  tipText: {
    fontSize: 14,
  },
  keyHighlight: {
    backgroundColor: 'rgba(74, 144, 226, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: 'monospace',
  },
  densityList: {
    marginVertical: 8,
  },
  densityItem: {
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  exampleImage: {
    width: 80,
    height: 80,
  },
  fontExample: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
  },
  themeInfo: {
    alignItems: 'center',
    marginVertical: 12,
  },
  themeText: {
    fontSize: 16,
  },
  animationList: {
    marginVertical: 8,
  },
  animationItem: {
    fontSize: 14,
    marginBottom: 8,
    paddingLeft: 8,
  },
  footerContainer: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});