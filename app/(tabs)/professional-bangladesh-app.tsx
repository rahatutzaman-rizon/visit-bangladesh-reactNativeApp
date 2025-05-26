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

// Professional color palette - Navy Blue, Gold, White, Gray
const COLORS = {
  primary: '#1E3A8A',        // Navy Blue
  secondary: '#F59E0B',      // Professional Gold
  accent: '#6B7280',         // Professional Gray
  background: '#F8FAFC',     // Light Gray Background
  white: '#FFFFFF',
  dark: '#1F2937',           // Dark Gray
  lightBlue: '#3B82F6',      // Light Blue
  darkBlue: '#1E40AF',       // Dark Blue
  lightGray: '#E5E7EB',      // Light Gray
  text: '#374151',           // Text Gray
  success: '#10B981',        // Success Green (minimal use)
  warning: '#F59E0B',        // Warning Orange
};

export default function ProfessionalBangladeshApp() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const [selectedCategory, setSelectedCategory] = useState('overview');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const quickFacts = [
    'Capital: Dhaka (Population: 9.5 million)',
    'Official Language: Bengali (Bangla)',
    'Currency: Bangladeshi Taka (BDT)',
    'Independence: March 26, 1971',
    'Area: 147,570 km² (56,980 sq mi)',
    'Population: 165+ million (8th largest)',
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % quickFacts.length);
    }, 4000);

    return () => clearInterval(factInterval);
  }, []);

  // Comprehensive data structure
  const bangladeshData = {
    overview: {
      location: {
        continent: 'Asia',
        subregion: 'South Asia',
        coordinates: '23.6850° N, 90.3563° E',
        borders: ['India (4,096 km)', 'Myanmar (271 km)'],
        coastline: '580 km along Bay of Bengal',
        timeZone: 'Bangladesh Standard Time (BST) UTC+6',
        climate: 'Tropical monsoon climate',
        terrain: 'Mostly flat alluvial plain; hilly in southeast',
      },
      government: {
        type: 'Parliamentary Republic',
        head: 'President Mohammed Shahabuddin',
        pm: 'Sheikh Hasina (Prime Minister)',
        parliament: 'Jatiya Sangsad (350 seats)',
        judiciary: 'Supreme Court of Bangladesh',
        administrative: '8 Divisions, 64 Districts, 495 Upazilas',
      },
      economy: {
        gdp: '$460 billion (2023)',
        gdpPerCapita: '$2,824 (2023)',
        growth: '6.03% (2023)',
        exports: '$55.7 billion (2023)',
        imports: '$65.4 billion (2023)',
        mainExports: ['Ready-made garments (84%)', 'Jute products', 'Leather goods', 'Frozen fish'],
        mainIndustries: ['Textiles', 'Pharmaceuticals', 'Steel', 'Shipbuilding', 'IT Services'],
      }
    },
    regions: [
      {
        name: 'Dhaka Division',
        capital: 'Dhaka',
        area: '20,594 km²',
        population: '36.05 million',
        districts: 13,
        highlights: ['National Capital', 'Economic Hub', 'Buriganga River', 'Sonargaon'],
        economy: 'Finance, IT, Manufacturing, Trade',
      },
      {
        name: 'Chittagong Division',
        capital: 'Chittagong',
        area: '33,771 km²',
        population: '28.42 million',
        districts: 11,
        highlights: ['Major Port City', 'Hill Tracts', 'Cox\'s Bazar Beach', 'Tea Gardens'],
        economy: 'Port Operations, Tourism, Tea, Textiles',
      },
      {
        name: 'Rajshahi Division',
        capital: 'Rajshahi',
        area: '18,197 km²',
        population: '18.48 million',
        districts: 8,
        highlights: ['Silk City', 'Mango Capital', 'Paharpur Vihara', 'Padma River'],
        economy: 'Agriculture, Silk Production, Education',
      },
      {
        name: 'Khulna Division',
        capital: 'Khulna',
        area: '22,285 km²',
        population: '15.56 million',
        districts: 10,
        highlights: ['Sundarbans Gateway', 'Shrimp Capital', 'Sixty Dome Mosque'],
        economy: 'Shrimp Farming, Shipbuilding, Jute',
      },
      {
        name: 'Sylhet Division',
        capital: 'Sylhet',
        area: '12,636 km²',
        population: '9.91 million',
        districts: 4,
        highlights: ['Tea Capital', 'Haor Wetlands', 'Natural Gas', 'Spiritual Tourism'],
        economy: 'Tea Production, Natural Gas, Remittances',
      },
      {
        name: 'Barisal Division',
        capital: 'Barisal',
        area: '13,225 km²',
        population: '8.33 million',
        districts: 6,
        highlights: ['Venice of Bengal', 'Floating Guava Market', 'River Networks'],
        economy: 'Agriculture, Fishing, River Transport',
      },
      {
        name: 'Rangpur Division',
        capital: 'Rangpur',
        area: '16,317 km²',
        population: '15.67 million',
        districts: 8,
        highlights: ['Agricultural Hub', 'Tobacco Production', 'Teesta River'],
        economy: 'Agriculture, Tobacco, Textiles',
      },
      {
        name: 'Mymensingh Division',
        capital: 'Mymensingh',
        area: '10,485 km²',
        population: '11.37 million',
        districts: 4,
        highlights: ['Agricultural University', 'Brahmaputra River', 'Haor Areas'],
        economy: 'Agriculture, Education, Fisheries',
      },
    ],
    sports: {
      national: 'Kabaddi',
      popular: [
        {
          name: 'Cricket',
          status: 'Most Popular',
          achievements: [
            'ICC Cricket World Cup 2011 - World cup hosts',
            'ICC Champions Trophy 2017 - Semi-finalists',
            'Asia Cup 2012, 2016, 2018 - Finalists',
            'Test Status since 2000',
            'T20 World Cup 2021 - Super 12',
          ],
          stars: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mustafizur Rahman'],
          venues: ['Sher-e-Bangla National Stadium', 'Zahur Ahmed Chowdhury Stadium'],
        },
        {
          name: 'Football',
          status: 'Growing Popularity',
          achievements: [
            'SAFF Championship 2003 - Winners',
            'AFC Challenge Cup 2006 - Runners-up',
            'South Asian Games - Multiple medals',
          ],
          stars: ['Jamal Bhuyan', 'Mamunul Islam', 'Topu Barman'],
          leagues: ['Bangladesh Premier League', 'Independence Cup'],
        },
        {
          name: 'Kabaddi',
          status: 'National Sport',
          achievements: [
            'Asian Games - Multiple medals',
            'South Asian Games - Gold medals',
            'World Kabaddi Championship participants',
          ],
          significance: 'Traditional rural sport, national identity',
        },
        {
          name: 'Hockey',
          status: 'Traditional Sport',
          achievements: [
            'Asian Games participants',
            'South Asian Games medals',
            'Olympic Games 1980, 1984, 1988',
          ],
          legacy: 'Strong hockey tradition since 1950s',
        },
      ],
      olympics: {
        firstParticipation: '1984 Los Angeles',
        totalParticipations: 10,
        sports: ['Athletics', 'Swimming', 'Shooting', 'Archery', 'Wrestling'],
        bestPerformance: 'Shooting (closest to medal)',
      },
    },
    culture: {
      languages: {
        official: 'Bengali (Bangla)',
        speakers: '98% of population',
        script: 'Bengali script (derived from Brahmi)',
        dialects: ['Chittagonian', 'Sylheti', 'Rangpuri', 'Noakhailla'],
        minorities: ['Chakma', 'Marma', 'Garo', 'Santal', 'Urdu'],
      },
      festivals: [
        {
          name: 'Pohela Boishakh',
          type: 'Secular',
          date: 'April 14',
          significance: 'Bengali New Year',
          celebrations: ['Mangal Shobhajatra', 'Traditional foods', 'Cultural programs'],
          unesco: 'Mangal Shobhajatra - Intangible Cultural Heritage',
        },
        {
          name: 'Eid ul-Fitr',
          type: 'Religious (Islamic)',
          significance: 'End of Ramadan',
          celebrations: ['Family gatherings', 'Special prayers', 'Feast', 'Charity'],
        },
        {
          name: 'Durga Puja',
          type: 'Religious (Hindu)',
          significance: 'Worship of Goddess Durga',
          celebrations: ['Pandal decorations', 'Cultural programs', 'Immersion processions'],
        },
        {
          name: 'Victory Day',
          type: 'National',
          date: 'December 16',
          significance: '1971 Independence War victory',
          celebrations: ['Military parade', 'Wreath laying', 'Cultural programs'],
        },
      ],
      arts: {
        music: [
          'Rabindra Sangeet (Tagore songs)',
          'Nazrul Geeti (Nazrul songs)',
          'Baul folk music',
          'Classical Bengali music',
          'Modern Bengali songs',
        ],
        dance: [
          'Classical Bharatanatyam',
          'Folk dances (Jari, Sari, Bhatiali)',
          'Manipuri dance',
          'Contemporary Bengali dance',
        ],
        crafts: [
          'Nakshi Kantha (embroidered quilts)',
          'Jamdani weaving',
          'Pottery and ceramics',
          'Brass and copper work',
          'Bamboo and cane crafts',
        ],
      },
      literature: {
        nobelPrize: 'Rabindranath Tagore (1913) - First non-European Nobel in Literature',
        nationalPoet: 'Kazi Nazrul Islam',
        modernWriters: ['Humayun Ahmed', 'Shahidul Zahir', 'Selina Hossain'],
        genres: ['Poetry', 'Novels', 'Short stories', 'Drama'],
      },
    },
    history: {
      ancient: [
        {
          period: 'Ancient Bengal (3rd century BC - 12th century AD)',
          highlights: [
            'Mauryan Empire rule',
            'Gupta Empire golden age',
            'Pala Dynasty (Buddhist period)',
            'Sena Dynasty (Hindu revival)',
          ],
        },
      ],
      medieval: [
        {
          period: 'Islamic Period (1204-1757)',
          highlights: [
            'Delhi Sultanate rule',
            'Bengal Sultanate independence',
            'Mughal Empire integration',
            'Islamic architecture development',
          ],
        },
      ],
      colonial: [
        {
          period: 'British Colonial Period (1757-1947)',
          highlights: [
            'Battle of Plassey (1757)',
            'Bengal Renaissance',
            'Partition of Bengal (1905)',
            'Independence movement',
          ],
        },
      ],
      modern: [
        {
          period: 'Pakistan Period (1947-1971)',
          highlights: [
            'East Pakistan creation',
            'Language Movement (1952)',
            'Six Point Movement (1966)',
            'Liberation War (1971)',
          ],
        },
        {
          period: 'Independent Bangladesh (1971-present)',
          highlights: [
            'Independence (December 16, 1971)',
            'Sheikh Mujibur Rahman leadership',
            'Democratic transitions',
            'Economic development',
          ],
        },
      ],
    },
    achievements: {
      international: [
        {
          category: 'Peace & Diplomacy',
          achievements: [
            'UN Peacekeeping - Largest contributor',
            'Climate Leadership - Vulnerable Forum leadership',
            'Rohingya Crisis - Humanitarian response',
            'Non-Aligned Movement active member',
          ],
        },
        {
          category: 'Economic Development',
          achievements: [
            'GDP Growth - Consistent 6%+ for decade',
            'Poverty Reduction - From 44% to 20% (2000-2020)',
            'RMG Industry - 2nd largest exporter globally',
            'Digital Bangladesh - IT sector growth',
            'Pharmaceutical Industry - Export to 150+ countries',
          ],
        },
        {
          category: 'Social Development',
          achievements: [
            'Millennium Development Goals - Achieved most targets',
            'Gender Parity - Education enrollment',
            'Maternal Mortality - 70% reduction',
            'Life Expectancy - Increased to 73 years',
            'Literacy Rate - Improved to 75%',
          ],
        },
        {
          category: 'Infrastructure',
          achievements: [
            'Padma Bridge - Longest bridge in Bangladesh',
            'Metro Rail - Dhaka Mass Rapid Transit',
            'Digital Connectivity - 100+ million internet users',
            'Power Generation - 25,000+ MW capacity',
          ],
        },
      ],
      recognition: [
        'UNESCO World Heritage Sites - 3 sites',
        'UNESCO Intangible Cultural Heritage - Multiple',
        'Climate Vulnerable Forum - Founding member',
        'Commonwealth member since 1972',
        'OIC member since 1974',
        'SAARC founding member',
      ],
    },
  };

  const categories = [
    { id: 'overview', title: 'Overview', icon: '🏛️' },
    { id: 'regions', title: 'Regions', icon: '🗺️' },
    { id: 'sports', title: 'Sports', icon: '🏏' },
    { id: 'culture', title: 'Culture', icon: '🎭' },
    { id: 'history', title: 'History', icon: '📚' },
    { id: 'achievements', title: 'Achievements', icon: '🏆' },
  ];

  const renderOverviewSection = () => (
    <View style={styles.sectionContainer}>
      {/* Location & Geography */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Location & Geography</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Continent</Text>
            <Text style={styles.infoValue}>{bangladeshData.overview.location.continent}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Coordinates</Text>
            <Text style={styles.infoValue}>{bangladeshData.overview.location.coordinates}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Coastline</Text>
            <Text style={styles.infoValue}>{bangladeshData.overview.location.coastline}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Climate</Text>
            <Text style={styles.infoValue}>{bangladeshData.overview.location.climate}</Text>
          </View>
        </View>
        <Text style={styles.cardDescription}>
          Bangladesh is located in South Asia, bordered by India and Myanmar, with the Bay of Bengal to the south.
        </Text>
      </View>

      {/* Government */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Government Structure</Text>
        <View style={styles.govGrid}>
          <View style={styles.govItem}>
            <Text style={styles.govLabel}>System</Text>
            <Text style={styles.govValue}>{bangladeshData.overview.government.type}</Text>
          </View>
          <View style={styles.govItem}>
            <Text style={styles.govLabel}>President</Text>
            <Text style={styles.govValue}>{bangladeshData.overview.government.head}</Text>
          </View>
          <View style={styles.govItem}>
            <Text style={styles.govLabel}>Prime Minister</Text>
            <Text style={styles.govValue}>{bangladeshData.overview.government.pm}</Text>
          </View>
          <View style={styles.govItem}>
            <Text style={styles.govLabel}>Parliament</Text>
            <Text style={styles.govValue}>{bangladeshData.overview.government.parliament}</Text>
          </View>
        </View>
      </View>

      {/* Economy */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Economic Overview</Text>
        <View style={styles.economyStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{bangladeshData.overview.economy.gdp}</Text>
            <Text style={styles.statLabel}>GDP (2023)</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{bangladeshData.overview.economy.growth}</Text>
            <Text style={styles.statLabel}>Growth Rate</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{bangladeshData.overview.economy.exports}</Text>
            <Text style={styles.statLabel}>Exports</Text>
          </View>
        </View>
        <Text style={styles.cardSubtitle}>Main Industries:</Text>
        <View style={styles.industriesList}>
          {bangladeshData.overview.economy.mainIndustries.map((industry, index) => (
            <View key={index} style={styles.industryTag}>
              <Text style={styles.industryText}>{industry}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderRegionsSection = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>
        Bangladesh is divided into 8 administrative divisions, each with unique characteristics and contributions.
      </Text>
      {bangladeshData.regions.map((region, index) => (
        <View key={index} style={styles.regionCard}>
          <View style={styles.regionHeader}>
            <Text style={styles.regionName}>{region.name}</Text>
            <Text style={styles.regionCapital}>Capital: {region.capital}</Text>
          </View>
          <View style={styles.regionStats}>
            <View style={styles.regionStat}>
              <Text style={styles.regionStatValue}>{region.area}</Text>
              <Text style={styles.regionStatLabel}>Area</Text>
            </View>
            <View style={styles.regionStat}>
              <Text style={styles.regionStatValue}>{region.population}</Text>
              <Text style={styles.regionStatLabel}>Population</Text>
            </View>
            <View style={styles.regionStat}>
              <Text style={styles.regionStatValue}>{region.districts}</Text>
              <Text style={styles.regionStatLabel}>Districts</Text>
            </View>
          </View>
          <Text style={styles.regionEconomy}>Economy: {region.economy}</Text>
          <View style={styles.highlightsList}>
            {region.highlights.map((highlight, idx) => (
              <View key={idx} style={styles.highlightItem}>
                <Text style={styles.highlightText}>• {highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );

  const renderSportsSection = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>National Sport</Text>
        <Text style={styles.nationalSport}>🏃‍♂️ Kabaddi</Text>
        <Text style={styles.cardDescription}>
          Kabaddi is the national sport of Bangladesh, representing the country's rural heritage and traditional values.
        </Text>
      </View>

      {bangladeshData.sports.popular.map((sport, index) => (
        <View key={index} style={styles.sportCard}>
          <View style={styles.sportHeader}>
            <Text style={styles.sportName}>{sport.name}</Text>
            <Text style={styles.sportStatus}>{sport.status}</Text>
          </View>
          
          <Text style={styles.sportSubtitle}>Major Achievements:</Text>
          {sport.achievements.map((achievement, idx) => (
            <Text key={idx} style={styles.achievementItem}>• {achievement}</Text>
          ))}
          
          {sport.stars && (
            <>
              <Text style={styles.sportSubtitle}>Notable Players:</Text>
              <View style={styles.starsList}>
                {sport.stars.map((star, idx) => (
                  <View key={idx} style={styles.starTag}>
                    <Text style={styles.starText}>{star}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
          
          {sport.venues && (
            <>
              <Text style={styles.sportSubtitle}>Major Venues:</Text>
              {sport.venues.map((venue, idx) => (
                <Text key={idx} style={styles.venueItem}>🏟️ {venue}</Text>
              ))}
            </>
          )}
        </View>
      ))}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Olympic Participation</Text>
        <View style={styles.olympicStats}>
          <View style={styles.olympicStat}>
            <Text style={styles.olympicValue}>{bangladeshData.sports.olympics.firstParticipation}</Text>
            <Text style={styles.olympicLabel}>First Participation</Text>
          </View>
          <View style={styles.olympicStat}>
            <Text style={styles.olympicValue}>{bangladeshData.sports.olympics.totalParticipations}</Text>
            <Text style={styles.olympicLabel}>Total Participations</Text>
          </View>
        </View>
        <Text style={styles.cardDescription}>
          Sports: {bangladeshData.sports.olympics.sports.join(', ')}
        </Text>
      </View>
    </View>
  );

  const renderCultureSection = () => (
    <View style={styles.sectionContainer}>
      {/* Languages */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Languages</Text>
        <Text style={styles.officialLang}>
          Official: {bangladeshData.culture.languages.official}
        </Text>
        <Text style={styles.cardDescription}>
          Spoken by {bangladeshData.culture.languages.speakers} of the population
        </Text>
        <Text style={styles.cardSubtitle}>Regional Dialects:</Text>
        <View style={styles.dialectsList}>
          {bangladeshData.culture.languages.dialects.map((dialect, index) => (
            <View key={index} style={styles.dialectTag}>
              <Text style={styles.dialectText}>{dialect}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Festivals */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Major Festivals</Text>
        {bangladeshData.culture.festivals.map((festival, index) => (
          <View key={index} style={styles.festivalItem}>
            <View style={styles.festivalHeader}>
              <Text style={styles.festivalName}>{festival.name}</Text>
              <Text style={styles.festivalType}>{festival.type}</Text>
            </View>
            {festival.date && (
              <Text style={styles.festivalDate}>📅 {festival.date}</Text>
            )}
            <Text style={styles.festivalSignificance}>{festival.significance}</Text>
            {festival.unesco && (
              <Text style={styles.unescoTag}>🏛️ {festival.unesco}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Arts & Literature */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Arts & Literature</Text>
        <View style={styles.nobelSection}>
          <Text style={styles.nobelTitle}>🏆 Nobel Prize in Literature</Text>
          <Text style={styles.nobelWinner}>{bangladeshData.culture.literature.nobelPrize}</Text>
        </View>
        <Text style={styles.cardSubtitle}>Traditional Crafts:</Text>
        <View style={styles.craftsList}>
          {bangladeshData.culture.arts.crafts.map((craft, index) => (
            <Text key={index} style={styles.craftItem}>🎨 {craft}</Text>
          ))}
        </View>
      </View>
    </View>
  );

  const renderHistorySection = () => (
    <View style={styles.sectionContainer}>
      {Object.entries(bangladeshData.history).map(([period, events]) => (
        <View key={period} style={styles.historyCard}>
          <Text style={styles.historyPeriod}>
            {period.charAt(0).toUpperCase() + period.slice(1)} Period
          </Text>
          {events.map((era, index) => (
            <View key={index} style={styles.eraSection}>
              <Text style={styles.eraTitle}>{era.period}</Text>
              <View style={styles.highlightsList}>
                {era.highlights.map((highlight, idx) => (
                  <Text key={idx} style={styles.historyHighlight}>• {highlight}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  const renderAchievementsSection = () => (
    <View style={styles.sectionContainer}>
      {bangladeshData.achievements.international.map((category, index) => (
        <View key={index} style={styles.achievementCard}>
          <Text style={styles.achievementCategory}>{category.category}</Text>
          {category.achievements.map((achievement, idx) => (
            <View key={idx} style={styles.achievementItem}>
              <Text style={styles.achievementText}>🏆 {achievement}</Text>
            </View>
          ))}
        </View>
      ))}
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>International Recognition</Text>
        {bangladeshData.achievements.recognition.map((recognition, index) => (
          <Text key={index} style={styles.recognitionItem}>🌟 {recognition}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Professional Header */}
        <Animated.View 
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.headerContent}>
            <View style={styles.flagSection}>
              <Text style={styles.flagEmoji}>🇧🇩</Text>
              <View style={styles.headerText}>
                <Text style={styles.countryName}>Bangladesh</Text>
                <Text style={styles.countrySubtitle}>People's Republic of Bangladesh</Text>
                <Text style={styles.motto}>"জয় বাংলা" - Victory to Bengal</Text>
              </View>
            </View>
            
            <View style={styles.quickFactContainer}>
              <Text style={styles.quickFactLabel}>Quick Fact:</Text>
              <Animated.Text style={[styles.quickFact, { opacity: fadeAnim }]}>
                {quickFacts[currentFactIndex]}
              </Animated.Text>
            </View>
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
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Content Sections */}
        <Animated.View style={[styles.contentSection, { opacity: fadeAnim }]}>
          {selectedCategory === 'overview' && renderOverviewSection()}
          {selectedCategory === 'regions' && renderRegionsSection()}
          {selectedCategory === 'sports' && renderSportsSection()}
          {selectedCategory === 'culture' && renderCultureSection()}
          {selectedCategory === 'history' && renderHistorySection()}
          {selectedCategory === 'achievements' && renderAchievementsSection()}
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Comprehensive Guide to Bangladesh
          </Text>
          <Text style={styles.footerSubtext}>
            Land of Rivers, Heritage & Resilience
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight + 10,
  },
  header: {
    backgroundColor: COLORS.white,
    margin: 15,
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContent: {
    alignItems: 'center',
  },
  flagSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flagEmoji: {
    fontSize: 50,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  countryName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  countrySubtitle: {
    fontSize: 16,
    color: COLORS.accent,
    marginBottom: 5,
  },
  motto: {
    fontSize: 14,
    color: COLORS.secondary,
    fontStyle: 'italic',
  },
  quickFactContainer: {
    backgroundColor: COLORS.lightGray,
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  quickFactLabel: {
    fontSize: 12,
    color: COLORS.accent,
    fontWeight: '600',
    marginBottom: 5,
  },
  quickFact: {
    fontSize: 14,
    color: COLORS.dark,
    fontWeight: '500',
  },
  categorySection: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  categoryScroll: {
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 90,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.primary,
    elevation: 4,
  },
  categoryIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
  },
  categoryTitleActive: {
    color: COLORS.white,
  },
  contentSection: {
    margin: 15,
  },
  sectionContainer: {
    gap: 20,
  },
  sectionDescription: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.dark,
    marginTop: 15,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    marginTop: 10,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoItem: {
    width: '48%',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.accent,
    fontWeight: '600',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 14,
    color: COLORS.dark,
    fontWeight: '500',
  },
  govGrid: {
    gap: 12,
    marginBottom: 15,
  },
  govItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  govLabel: {
    fontSize: 14,
    color: COLORS.accent,
    fontWeight: '600',
  },
  govValue: {
    fontSize: 14,
    color: COLORS.dark,
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  economyStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.accent,
    textAlign: 'center',
  },
  industriesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  industryTag: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  industryText: {
    fontSize: 12,
    color: COLORS.dark,
    fontWeight: '500',
  },
  regionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 18,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  regionHeader: {
    marginBottom: 15,
  },
  regionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  regionCapital: {
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  regionStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
  },
  regionStat: {
    alignItems: 'center',
  },
  regionStatValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 3,
  },
  regionStatLabel: {
    fontSize: 11,
    color: COLORS.accent,
  },
  regionEconomy: {
    fontSize: 14,
    color: COLORS.text,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  highlightsList: {
    gap: 5,
  },
  highlightItem: {
    marginBottom: 3,
  },
  highlightText: {
    fontSize: 13,
    color: COLORS.text,
  },
  nationalSport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  sportCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 18,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sportName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  sportStatus: {
    fontSize: 12,
    color: COLORS.secondary,
    fontWeight: '600',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  sportSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.dark,
    marginTop: 15,
    marginBottom: 8,
  },
  achievementItem: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 5,
    lineHeight: 18,
  },
  starsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  starTag: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  starText: {
    fontSize: 12,
    color: COLORS.dark,
    fontWeight: '500',
  },
  venueItem: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 3,
  },
  olympicStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  olympicStat: {
    alignItems: 'center',
  },
  olympicValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 5,
  },
  olympicLabel: {
    fontSize: 12,
    color: COLORS.accent,
    textAlign: 'center',
  },
  officialLang: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 10,
  },
  dialectsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  dialectTag: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  dialectText: {
    fontSize: 12,
    color: COLORS.dark,
    fontWeight: '500',
  },
  festivalItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  festivalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  festivalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  festivalType: {
    fontSize: 12,
    color: COLORS.secondary,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  festivalDate: {
    fontSize: 13,
    color: COLORS.accent,
    marginBottom: 5,
  },
  festivalSignificance: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 18,
    marginBottom: 5,
  },
  unescoTag: {
    fontSize: 12,
    color: COLORS.secondary,
    fontStyle: 'italic',
  },
  nobelSection: {
    backgroundColor: COLORS.lightGray,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  nobelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  nobelWinner: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 18,
  },
  craftsList: {
    gap: 5,
    marginTop: 10,
  },
  craftItem: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 3,
  },
  historyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 18,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  historyPeriod: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  eraSection: {
    marginBottom: 20,
  },
  eraTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.secondary,
    marginBottom: 10,
  },
  historyHighlight: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 5,
    lineHeight: 18,
  },
  achievementCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 18,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  achievementCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
  },
  achievementItem: {
    marginBottom: 10,
  },
  achievementText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
  recognitionItem: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 8,
    lineHeight: 18,
  },
  footer: {
    backgroundColor: COLORS.white,
    padding: 30,
    alignItems: 'center',
    margin: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: 14,
    color: COLORS.accent,
    fontStyle: 'italic',
  },
});
