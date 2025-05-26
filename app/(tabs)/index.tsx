import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('heritage');

  const greetings = ['নমস্কার', 'আসসালামু আলাইকুম', 'Hello', 'স্বাগতম'];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 120,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 25000,
          useNativeDriver: true,
        })
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();

    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const heritageDestinations = [
    {
      icon: '🕌',
      title: 'Sixty Dome Mosque',
      subtitle: 'UNESCO World Heritage Site',
      location: 'Bagerhat',
      description: '15th century architectural marvel',
      highlights: ['Historical Architecture', 'UNESCO Site', 'Islamic Heritage'],
      gradient: ['#8B4513', '#CD853F', '#F4A460'],
      pattern: '🏛️',
      year: '1459 AD',
    },
    {
      icon: '🏛️',
      title: 'Paharpur Vihara',
      subtitle: 'Ancient Buddhist Monastery',
      location: 'Naogaon',
      description: "World's largest Buddhist monastery",
      highlights: ['Buddhist Heritage', 'Archaeological Site', '8th Century'],
      gradient: ['#FF6B35', '#F7931E', '#FFD23F'],
      pattern: '☸️',
      year: '8th Century',
    },
    {
      icon: '🏰',
      title: 'Lalbagh Fort',
      subtitle: 'Mughal Architecture',
      location: 'Old Dhaka',
      description: 'Incomplete Mughal fort complex',
      highlights: ['Mughal Era', 'Historical Museum', 'Royal Gardens'],
      gradient: ['#8E44AD', '#9B59B6', '#BB8FCE'],
      pattern: '👑',
      year: '1678 AD',
    },
    {
      icon: '🏯',
      title: 'Ahsan Manzil',
      subtitle: 'Pink Palace of Dhaka',
      location: 'Old Dhaka',
      description: 'Official residence of Nawab family',
      highlights: ['Pink Palace', 'Nawabi Culture', 'Museum'],
      gradient: ['#FF69B4', '#FFB6C1', '#FFC0CB'],
      pattern: '🏛️',
      year: '1872 AD',
    },
    {
      icon: '🕌',
      title: 'Star Mosque',
      subtitle: 'Tara Masjid',
      location: 'Dhaka',
      description: 'Beautiful star motif decorations',
      highlights: ['Star Patterns', 'Artistic Tiles', 'Mughal Style'],
      gradient: ['#4169E1', '#6495ED', '#87CEEB'],
      pattern: '⭐',
      year: '18th Century',
    },
    {
      icon: '🏺',
      title: 'Mahasthangarh',
      subtitle: 'Ancient Pundranagar',
      location: 'Bogura',
      description: 'Oldest archaeological site',
      highlights: ['Ancient Ruins', '3rd Century BC', 'Archaeological Park'],
      gradient: ['#228B22', '#32CD32', '#90EE90'],
      pattern: '🏺',
      year: '3rd Century BC',
    },
  ];

  const naturalDestinations = [
    {
      icon: '🏖️',
      title: "Cox's Bazar",
      subtitle: "World's Longest Beach",
      location: 'Chittagong',
      description: '120km unbroken sandy coastline',
      highlights: ['Beach Resort', 'Sunset Views', 'Water Sports'],
      gradient: ['#FF6B6B', '#FF8E8E', '#FFB3B3'],
      pattern: '🌊',
      features: 'Natural Wonder',
    },
    {
      icon: '🏔️',
      title: 'Bandarban Hills',
      subtitle: 'Land of Hills & Tribes',
      location: 'Chittagong Hill Tracts',
      description: 'Indigenous communities & mountains',
      highlights: ['Nilgiri Hills', 'Boga Lake', 'Tribal Culture'],
      gradient: ['#4ECDC4', '#44A08D', '#096B72'],
      pattern: '⛰️',
      features: 'Adventure Tourism',
    },
    {
      icon: '🐅',
      title: 'Sundarbans',
      subtitle: 'Royal Bengal Tiger Reserve',
      location: 'Khulna',
      description: 'UNESCO World Heritage mangrove forest',
      highlights: ['Tiger Safari', 'Mangrove Forest', 'Wildlife'],
      gradient: ['#A8E6CF', '#7FCDCD', '#55A3FF'],
      pattern: '🌿',
      features: 'Wildlife Sanctuary',
    },
  ];

  const culturalElements = [
    { 
      icon: '🎭', 
      title: 'Pohela Boishakh', 
      description: 'Bengali New Year Celebration',
      season: 'April 14th',
      significance: 'National Festival'
    },
    { 
      icon: '🚣', 
      title: 'Nouka Baich', 
      description: 'Traditional Boat Racing',
      season: 'Monsoon',
      significance: 'River Culture'
    },
    { 
      icon: '🎨', 
      title: 'Nakshi Kantha', 
      description: 'Embroidered Storytelling Quilts',
      season: 'Year Round',
      significance: 'Folk Artistry'
    },
    { 
      icon: '🎵', 
      title: 'Baul Tradition', 
      description: 'Mystical Folk Music & Philosophy',
      season: 'Cultural Heritage',
      significance: 'UNESCO Recognition '
    },
    { 
      icon: '🏺', 
      title: 'Pottery Craft', 
      description: 'Traditional Clay Artistry',
      season: 'Year Round',
      significance: 'Ancient Craft'
    },
    { 
      icon: '🎪', 
      title: 'Jatra Theatre', 
      description: 'Traditional Folk Drama',
      season: 'Festival Season',
      significance: 'Performing Arts'
    },
  ];

  const cuisine = [
    { name: 'Hilsa Fish Curry', bengali: 'ইলিশ মাছের ঝোল', spice: '🌶️🌶️', type: 'National Fish' },
    { name: 'Kacchi Biriyani', bengali: 'কাচ্চি বিরিয়ানি', spice: '🌶️🌶️🌶️', type: 'Royal Dish' },
    { name: 'Pitha Collection', bengali: 'পিঠা সমগ্র', spice: '🍯', type: 'Winter Delicacy' },
    { name: 'Fuchka/Panipuri', bengali: 'ফুচকা', spice: '🌶️🌶️🌶️🌶️', type: 'Street Food' },
    { name: 'Shorshe Ilish', bengali: 'সর্ষে ইলিশ', spice: '🌶️🌶️', type: 'Traditional' },
    { name: 'Mishti Doi', bengali: 'মিষ্টি দই', spice: '🍯', type: 'Sweet Yogurt' },
  ];

  const statistics = [
    { number: '165M+', label: 'জনসংখ্যা\nPopulation', icon: '👥', color: '#FF6B6B' },
    { number: '700+', label: 'নদী\nRivers', icon: '🏞️', color: '#4ECDC4' },
    { number: '64', label: 'জেলা\nDistricts', icon: '🗺️', color: '#45B7D1' },
    { number: '1971', label: 'স্বাধীনতা\nIndependence', icon: '🇧🇩', color: '#96CEB4' },
  ];

  const categories = [
    { id: 'heritage', title: 'Heritage', icon: '🏛️', count: heritageDestinations.length },
    { id: 'natural', title: 'Natural', icon: '🌿', count: naturalDestinations.length },
    { id: 'culture', title: 'Culture', icon: '🎭', count: culturalElements.length },
  ];

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const renderDestinationCard = (dest, index, isHeritage = true) => (
    <Animated.View
      key={index}
      style={[
        styles.destinationCard,
        {
          transform: [{
            translateY: slideAnim.interpolate({
              inputRange: [0, 50],
              outputRange: [0, (index + 1) * 10],
            }),
          }],
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.85}>
        <BlurView intensity={35} style={styles.cardBlur}>
          <LinearGradient
            colors={dest.gradient}
            style={styles.destinationGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {/* Floating Pattern */}
            <Animated.View style={[styles.floatingPattern, { transform: [{ scale: pulseAnim }] }]}>
              <Text style={styles.patternText}>{dest.pattern}</Text>
            </Animated.View>
            
            {/* Card Header */}
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.destinationIcon}>{dest.icon}</Text>
              </View>
              <View style={styles.locationBadge}>
                <Text style={styles.locationText}>📍 {dest.location}</Text>
              </View>
            </View>
            
            {/* Card Content */}
            <View style={styles.cardContent}>
              <Text style={styles.destinationTitle}>{dest.title}</Text>
              <Text style={styles.destinationSubtitle}>{dest.subtitle}</Text>
              <Text style={styles.destinationDescription}>{dest.description}</Text>
              
              {isHeritage && dest.year && (
                <View style={styles.yearBadge}>
                  <Text style={styles.yearText}>🕰️ {dest.year}</Text>
                </View>
              )}
              
              {!isHeritage && dest.features && (
                <View style={styles.featureBadge}>
                  <Text style={styles.featureText}>✨ {dest.features}</Text>
                </View>
              )}
              
              <View style={styles.highlightsContainer}>
                {dest.highlights.map((highlight, idx) => (
                  <View key={idx} style={styles.highlightBadge}>
                    <Text style={styles.highlightText}>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            {/* Explore Button */}
            <View style={styles.exploreButton}>
              <Text style={styles.exploreText}>Explore →</Text>
            </View>
          </LinearGradient>
        </BlurView>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Enhanced Dynamic Background */}
      <LinearGradient
        colors={['#0a1a2a', '#1a2f4a', '#2a4a6a', '#1a3a5a', '#0a1a2a']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Animated Pattern Background */}
        <View style={styles.patternBackground}>
          {[...Array(25)].map((_, i) => (
            <Animated.Text
              key={i}
              style={[
                styles.patternElement,
                {
                  left: (i % 5) * (width / 5) + Math.random() * 50,
                  top: Math.floor(i / 5) * (height / 5) + Math.random() * 100,
                  transform: [{ rotate: spin }],
                  opacity: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.08],
                  }),
                },
              ]}
            >
              {['🌸', '🏺', '🕌', '🌾', '⭐'][i % 5]}
            </Animated.Text>
          ))}
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Enhanced Hero Section */}
        <Animated.View 
          style={[
            styles.heroSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
            },
          ]}
        >
          <BlurView intensity={30} style={styles.heroBlur}>
            <LinearGradient
              colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.15)', 'rgba(255,255,255,0.1)']}
              style={styles.heroGradient}
            >
              {/* Decorative Border */}
              <View style={styles.decorativeBorder}>
                <Text style={styles.borderPattern}>🏺✨🌸✨🏺✨🌸✨🏺</Text>
              </View>
              
              {/* Enhanced Flag */}
              <Animated.View style={[styles.flagContainer, { transform: [{ scale: pulseAnim }] }]}>
                <LinearGradient
                  colors={['#006A4E', '#F42A41']}
                  style={styles.flagGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <View style={styles.flagCircle}>
                    <Text style={styles.flagEmoji}>🇧🇩</Text>
                  </View>
                  {/* Flag glow effect */}
                  <View style={styles.flagGlow} />
                </LinearGradient>
              </Animated.View>
              
              <Animated.Text style={[styles.greetingText, { opacity: fadeAnim }]}>
                {greetings[currentGreeting]}
              </Animated.Text>
              
              <Text style={styles.heroTitle}>
                <Text style={styles.heroTitleBengali}>বাংলাদেশ</Text>{'\n'}
                <Text style={styles.heroTitleEnglish}>Bangladesh</Text>
              </Text>
              
              <Text style={styles.heroSubtitle}>
                "সোনার বাংলা" - Golden Bengal
              </Text>
              
              <Text style={styles.heroDescription}>
                Where Rivers Meet Heritage & Culture Blooms Eternal
              </Text>
              
              {/* Heritage Status */}
              <View style={styles.heritageStatus}>
                <Text style={styles.heritageText}>🏛️ 3 UNESCO World Heritage Sites</Text>
              </View>
            </LinearGradient>
          </BlurView>
        </Animated.View>

        {/* Enhanced Statistics Section */}
        <Animated.View style={[styles.statsSection, { opacity: fadeAnim }]}>
          <Text style={styles.sectionTitle}>Bangladesh at a Glance</Text>
          <View style={styles.statsGrid}>
            {statistics.map((stat, index) => (
              <BlurView key={index} intensity={25} style={styles.statCard}>
                <LinearGradient
                  colors={[stat.color + '40', stat.color + '20', stat.color + '10']}
                  style={styles.statGradient}
                >
                  <Text style={styles.statIcon}>{stat.icon}</Text>
                  <Text style={styles.statNumber}>{stat.number}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </LinearGradient>
              </BlurView>
            ))}
          </View>
        </Animated.View>

        {/* Category Navigation */}
        <Animated.View style={[styles.categorySection, { opacity: fadeAnim }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setSelectedCategory(category.id)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.categoryButtonActive
                ]}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[
                  styles.categoryTitle,
                  selectedCategory === category.id && styles.categoryTitleActive
                ]}>
                  {category.title}
                </Text>
                <Text style={styles.categoryCount}>{category.count}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Heritage Destinations */}
        {selectedCategory === 'heritage' && (
          <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
            <Text style={styles.sectionTitle}>Cultural Heritage Sites</Text>
            <Text style={styles.sectionSubtitle}>
              Discover Bangladesh's ancient treasures and architectural marvels
            </Text>
            <View style={styles.destinationsContainer}>
              {heritageDestinations.map((dest, index) => renderDestinationCard(dest, index, true))}
            </View>
          </Animated.View>
        )}

        {/* Natural Destinations */}
        {selectedCategory === 'natural' && (
          <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
            <Text style={styles.sectionTitle}>Natural Wonders</Text>
            <Text style={styles.sectionSubtitle}>
              Experience the breathtaking beauty of Bangladesh's landscapes
            </Text>
            <View style={styles.destinationsContainer}>
              {naturalDestinations.map((dest, index) => renderDestinationCard(dest, index, false))}
            </View>
          </Animated.View>
        )}

        {/* Culture Section */}
        {selectedCategory === 'culture' && (
          <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
            <Text style={styles.sectionTitle}>Living Heritage</Text>
            <Text style={styles.sectionSubtitle}>
              Immerse yourself in centuries-old traditions
            </Text>
            <View style={styles.cultureGrid}>
              {culturalElements.map((culture, index) => (
                <BlurView key={index} intensity={25} style={styles.cultureCard}>
                  <LinearGradient
                    colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
                    style={styles.cultureGradient}
                  >
                    <Text style={styles.cultureIcon}>{culture.icon}</Text>
                    <Text style={styles.cultureTitle}>{culture.title}</Text>
                    <Text style={styles.cultureDescription}>{culture.description}</Text>
                    <View style={styles.cultureInfo}>
                      <View style={styles.cultureSeason}>
                        <Text style={styles.cultureSeasonText}>{culture.season}</Text>
                      </View>
                      <View style={styles.cultureSignificance}>
                        <Text style={styles.cultureSignificanceText}>{culture.significance}</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </BlurView>
              ))}
            </View>
          </Animated.View>
        )}

        {/* Enhanced Cuisine Section */}
        <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
          <Text style={styles.sectionTitle}>Flavors of Bengal</Text>
          <Text style={styles.sectionSubtitle}>
            মুখে লাগে তাই খাই - We eat what pleases the palate
          </Text>
          <View style={styles.cuisineContainer}>
            {cuisine.map((dish, index) => (
              <BlurView key={index} intensity={20} style={styles.cuisineCard}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.08)']}
                  style={styles.cuisineGradient}
                >
                  <View style={styles.cuisineHeader}>
                    <View>
                      <Text style={styles.cuisineName}>{dish.name}</Text>
                      <Text style={styles.cuisineType}>{dish.type}</Text>
                    </View>
                    <Text style={styles.cuisineSpice}>{dish.spice}</Text>
                  </View>
                  <Text style={styles.cuisineBengali}>{dish.bengali}</Text>
                </LinearGradient>
              </BlurView>
            ))}
          </View>
        </Animated.View>

        {/* Enhanced CTA */}
        <Animated.View style={[styles.ctaSection, { opacity: fadeAnim }]}>
          <BlurView intensity={45} style={styles.ctaBlur}>
            <LinearGradient
              colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.15)']}
              style={styles.ctaGradient}
            >
              <Text style={styles.ctaPattern}>🌸✨🏺✨🌸</Text>
              <Text style={styles.ctaTitle}>আপনাকে স্বাগতাম</Text>
              <Text style={styles.ctaSubtitleEnglish}>Welcome to Bangladesh</Text>
              <Text style={styles.ctaDescription}>
                Experience the warmth of Bengali hospitality, explore ancient heritage sites, 
                savor authentic flavors, and witness living traditions in the land of six seasons 
                and endless stories.
              </Text>
              
              <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                <LinearGradient
                  colors={['#006A4E', '#F42A41', '#FFD700']}
                  style={styles.ctaButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.ctaButtonText}>শুরু করুন যাত্রা</Text>
                  <Text style={styles.ctaButtonSubtext}>Begin Your Journey</Text>
                  <View style={styles.ctaButtonIcon}>
                    <Text style={styles.ctaButtonEmoji}>🚀</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </LinearGradient>
          </BlurView>
        </Animated.View>

        {/* Enhanced Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerQuote}>
            "আমার সোনার বাংলা, আমি তোমায় ভালবাসি"
          </Text>
          <Text style={styles.footerQuoteEnglish}>
            "My Golden Bengal, I love you" - Rabindranath Tagore
          </Text>
          <Text style={styles.footerCopyright}>
            🇧🇩 Proudly showcasing Bangladesh's rich heritage
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1a2a',
  },
  patternBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  patternElement: {
    position: 'absolute',
    fontSize: 22,
  },
  scrollView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight + 20,
  },
  heroSection: {
    margin: 20,
    marginTop: 40,
    borderRadius: 35,
    overflow: 'hidden',
  },
  heroBlur: {
    borderRadius: 35,
    overflow: 'hidden',
  },
  heroGradient: {
    padding: 45,
    alignItems: 'center',
    minHeight: 400,
    justifyContent: 'center',
  },
  decorativeBorder: {
    position: 'absolute',
    top: 25,
    left: 20,
    right: 20,
  },
  borderPattern: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.6,
  },
  flagContainer: {
    marginBottom: 25,
    borderRadius: 70,
    overflow: 'hidden',
    elevation: 15,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  flagGradient: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  flagCircle: {
    position: 'absolute',
    right: 30,
    top: '50%',
    transform: [{ translateY: -25 }],
  },
  flagEmoji: {
    fontSize: 50,
  },
  flagGlow: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    top: -10,
    left: -10,
  },
  greetingText: {
    fontSize: 20,
    color: '#FFD700',
    fontWeight: '700',
    marginBottom: 15,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  heroTitleBengali: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  heroTitleEnglish: {
    fontSize: 32,
    fontWeight: '300',
    color: '#B0E0E6',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroSubtitle: {
    fontSize: 22,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  heroDescription: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 20,
  },
  heritageStatus: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  heritageText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: '600',
  },
  statsSection: {
    margin: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  statCard: {
    width: (width - 60) / 2,
    borderRadius: 25,
    overflow: 'hidden',
  },
  statGradient: {
    padding: 25,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'center',
  },
  statIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  statLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '500',
  },
  categorySection: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  categoryScroll: {
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    marginRight: 15,
    alignItems: 'center',
    minWidth: 100,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryButtonActive: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    borderColor: '#FFD700',
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '600',
    marginBottom: 3,
  },
  categoryTitleActive: {
    color: '#FFD700',
  },
  categoryCount: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  sectionSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 25,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  destinationsContainer: {
    gap: 25,
  },
  destinationCard: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  cardBlur: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  destinationGradient: {
    position: 'relative',
    minHeight: 250,
  },
  floatingPattern: {
    position: 'absolute',
    top: 20,
    right: 20,
    opacity: 0.4,
  },
  patternText: {
    fontSize: 28,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    paddingBottom: 15,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  destinationIcon: {
    fontSize: 30,
  },
  locationBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  cardContent: {
    padding: 25,
    paddingTop: 0,
  },
  destinationTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  destinationSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 12,
    fontWeight: '600',
  },
  destinationDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: 15,
    lineHeight: 22,
  },
  yearBadge: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  yearText: {
    color: '#FFD700',
    fontSize: 13,
    fontWeight: '600',
  },
  featureBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  featureText: {
    color: '#4CAF50',
    fontSize: 13,
    fontWeight: '600',
  },
  highlightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  highlightBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  highlightText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  exploreButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  exploreText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cultureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  cultureCard: {
    width: (width - 60) / 2,
    borderRadius: 25,
    overflow: 'hidden',
  },
  cultureGradient: {
    padding: 20,
    alignItems: 'center',
    minHeight: 180,
    justifyContent: 'center',
  },
  cultureIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  cultureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  cultureDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 18,
  },
  cultureInfo: {
    alignItems: 'center',
    gap: 8,
  },
  cultureSeason: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },
  cultureSeasonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  cultureSignificance: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  cultureSignificanceText: {
    fontSize: 11,
    color: '#FFD700',
    fontWeight: '500',
  },
  cuisineContainer: {
    gap: 18,
  },
  cuisineCard: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  cuisineGradient: {
    padding: 25,
  },
  cuisineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cuisineName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  cuisineType: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
  },
  cuisineSpice: {
    fontSize: 18,
  },
  cuisineBengali: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  ctaSection: {
    margin: 20,
    borderRadius: 35,
    overflow: 'hidden',
  },
  ctaBlur: {
    borderRadius: 35,
    overflow: 'hidden',
  },
  ctaGradient: {
    padding: 45,
    alignItems: 'center',
  },
  ctaPattern: {
    fontSize: 24,
    marginBottom: 25,
    opacity: 0.8,
  },
  ctaTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  ctaSubtitleEnglish: {
    fontSize: 22,
    color: '#B0E0E6',
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '300',
  },
  ctaDescription: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 35,
    lineHeight: 28,
  },
  ctaButton: {
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 20,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
  ctaButtonGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 50,
    position: 'relative',
  },
  ctaButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  ctaButtonSubtext: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '500',
  },
  ctaButtonIcon: {
    position: 'absolute',
    right: 25,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
  ctaButtonEmoji: {
    fontSize: 24,
  },
  footer: {
    padding: 40,
    alignItems: 'center',
  },
  footerQuote: {
    fontSize: 20,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 12,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  footerQuoteEnglish: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  footerCopyright: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
  },
});