"use client"

import { BlurView } from "expo-blur"
import { useEffect, useRef, useState } from "react"
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

const { width, height } = Dimensions.get("window")

// Enhanced color palette with sky blue theme
const COLORS = {
  primary: "#0EA5E9", // Sky Blue
  secondary: "#F59E0B", // Amber Gold
  accent: "#8B5CF6", // Purple
  background: "#F8FAFC", // Slate Gray
  white: "#FFFFFF",
  dark: "#0F172A", // Slate Dark
  lightSky: "#7DD3FC", // Light Sky Blue
  darkSky: "#0284C7", // Dark Sky Blue
  lightGray: "#E2E8F0", // Light Slate
  text: "#334155", // Slate
  success: "#10B981", // Emerald
  warning: "#F59E0B", // Orange
  cardBg: "#FFFFFF",
  shadow: "rgba(15, 23, 42, 0.1)",
  skyGradient: "#38BDF8", // Sky Blue Gradient
}

export default function EnhancedBangladeshApp() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(30)).current
  const scaleAnim = useRef(new Animated.Value(0.95)).current
  const headerAnim = useRef(new Animated.Value(0)).current
  const cardAnim = useRef(new Animated.Value(0)).current
  const [selectedCategory, setSelectedCategory] = useState("overview")
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  const quickFacts = [
    "🏛️ Capital: Dhaka (9.5M people)",
    "🗣️ Language: Bengali (Bangla)",
    "💰 Currency: Bangladeshi Taka",
    "🎉 Independence: March 26, 1971",
    "📏 Area: 147,570 km²",
    "👥 Population: 165+ million",
    "🌊 Rivers: 700+ waterways",
    "🏆 UNESCO Sites: 3 heritage locations",
    "🎓 Literacy Rate: 75.6%",
    "📱 Internet Users: 100+ million",
  ]

  useEffect(() => {
    Animated.stagger(200, [
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
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(cardAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start()

    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % quickFacts.length)
    }, 3500)

    return () => clearInterval(factInterval)
  }, [])

  // Comprehensive Bangladesh data
  const bangladeshData = {
    overview: {
      keyStats: [
        { icon: "🏛️", title: "Capital", value: "Dhaka", subtitle: "9.5M Population" },
        { icon: "📅", title: "Independence", value: "1971", subtitle: "March 26" },
        { icon: "🌍", title: "Population", value: "165M+", subtitle: "8th Largest" },
        { icon: "💰", title: "GDP", value: "$460B", subtitle: "2023 Est." },
        { icon: "🏭", title: "RMG Export", value: "2nd", subtitle: "Globally" },
        { icon: "🌊", title: "Rivers", value: "700+", subtitle: "Waterways" },
      ],
      location: {
        continent: "Asia",
        subregion: "South Asia",
        coordinates: "23.6850° N, 90.3563° E",
        borders: ["India (4,096 km)", "Myanmar (271 km)"],
        coastline: "580 km along Bay of Bengal",
        timeZone: "Bangladesh Standard Time (BST) UTC+6",
        climate: "Tropical monsoon climate",
        terrain: "Mostly flat alluvial plain; hilly in southeast",
      },
      government: {
        type: "Parliamentary Republic",
        head: "President Mohammed Shahabuddin",
        pm: "Sheikh Hasina (Prime Minister)",
        parliament: "Jatiya Sangsad (350 seats)",
        judiciary: "Supreme Court of Bangladesh",
        administrative: "8 Divisions, 64 Districts, 495 Upazilas",
      },
      economy: {
        gdp: "$460 billion (2023)",
        gdpPerCapita: "$2,824 (2023)",
        growth: "6.03% (2023)",
        exports: "$55.7 billion (2023)",
        imports: "$65.4 billion (2023)",
        mainExports: ["Ready-made garments (84%)", "Jute products", "Leather goods", "Frozen fish"],
        mainIndustries: ["Textiles", "Pharmaceuticals", "Steel", "Shipbuilding", "IT Services"],
      },
    },
    comprehensive: {
      demographics: {
        title: "Demographics & Society",
        icon: "👥",
        data: [
          { label: "Total Population", value: "165.16 million", detail: "8th most populous country" },
          { label: "Population Density", value: "1,106/km²", detail: "One of the highest globally" },
          { label: "Urban Population", value: "39.1%", detail: "Rapidly urbanizing" },
          { label: "Median Age", value: "27.6 years", detail: "Young population" },
          { label: "Life Expectancy", value: "73.2 years", detail: "Steadily improving" },
          { label: "Birth Rate", value: "18.1/1000", detail: "Declining trend" },
          { label: "Literacy Rate", value: "75.6%", detail: "Male: 78.1%, Female: 73.1%" },
          { label: "Gender Ratio", value: "100.2 males/100 females", detail: "Nearly balanced" },
        ],
      },
      education: {
        title: "Education System",
        icon: "🎓",
        data: [
          { label: "Primary Education", value: "98.8%", detail: "Net enrollment rate" },
          { label: "Secondary Education", value: "70.3%", detail: "Gross enrollment rate" },
          { label: "Higher Education", value: "20.6%", detail: "Gross enrollment rate" },
          { label: "Public Universities", value: "53", detail: "Government funded" },
          { label: "Private Universities", value: "108", detail: "Private sector" },
          { label: "Technical Institutes", value: "6,751", detail: "Vocational training" },
          { label: "Madrasas", value: "9,314", detail: "Islamic education" },
          { label: "Adult Literacy Programs", value: "Ongoing", detail: "Government initiative" },
        ],
      },
      technology: {
        title: "Technology & Digital",
        icon: "💻",
        data: [
          { label: "Internet Users", value: "118.2 million", detail: "71.5% penetration" },
          { label: "Mobile Subscribers", value: "186.7 million", detail: "113% penetration" },
          { label: "Smartphone Users", value: "95.3 million", detail: "Rapidly growing" },
          { label: "IT Export", value: "$1.3 billion", detail: "FY 2022-23" },
          { label: "IT Companies", value: "4,500+", detail: "Registered firms" },
          { label: "Freelancers", value: "650,000+", detail: "2nd largest globally" },
          { label: "Digital Payment", value: "$45 billion", detail: "Annual transactions" },
          { label: "5G Launch", value: "2021", detail: "First in South Asia" },
        ],
      },
      infrastructure: {
        title: "Infrastructure Development",
        icon: "🏗️",
        data: [
          { label: "Padma Bridge", value: "6.15 km", detail: "Longest bridge in Bangladesh" },
          { label: "Dhaka Metro Rail", value: "20.1 km", detail: "Mass Rapid Transit" },
          { label: "Rooppur Nuclear Plant", value: "2,400 MW", detail: "Under construction" },
          { label: "Payra Port", value: "Deep Sea Port", detail: "3rd largest port" },
          { label: "Karnaphuli Tunnel", value: "3.32 km", detail: "First underwater tunnel" },
          { label: "Power Generation", value: "25,514 MW", detail: "Installed capacity" },
          { label: "Road Network", value: "372,000 km", detail: "Total road length" },
          { label: "Railway Network", value: "2,460 km", detail: "Broad gauge tracks" },
        ],
      },
      healthcare: {
        title: "Healthcare System",
        icon: "🏥",
        data: [
          { label: "Life Expectancy", value: "73.2 years", detail: "Male: 71.6, Female: 74.9" },
          { label: "Infant Mortality", value: "28/1000", detail: "Significant improvement" },
          { label: "Maternal Mortality", value: "173/100,000", detail: "70% reduction since 2000" },
          { label: "Doctors", value: "1:1,847", detail: "Doctor to population ratio" },
          { label: "Hospital Beds", value: "0.8/1000", detail: "Per 1000 population" },
          { label: "Vaccination Coverage", value: "97%", detail: "Routine immunization" },
          { label: "Health Budget", value: "1.02% of GDP", detail: "Government allocation" },
          { label: "Medical Colleges", value: "37 Government", detail: "68 Private colleges" },
        ],
      },
      environment: {
        title: "Environment & Climate",
        icon: "🌱",
        data: [
          { label: "Forest Coverage", value: "17.05%", detail: "Of total land area" },
          { label: "Mangrove Forest", value: "6,017 km²", detail: "Sundarbans area" },
          { label: "Protected Areas", value: "47", detail: "National parks & reserves" },
          { label: "Wetlands", value: "7-8 million hectares", detail: "Including haors & beels" },
          { label: "Annual Rainfall", value: "2,320 mm", detail: "Monsoon dependent" },
          { label: "Temperature Range", value: "12°C to 35°C", detail: "Seasonal variation" },
          { label: "Cyclone Risk", value: "High", detail: "Bay of Bengal location" },
          { label: "Sea Level Rise", value: "3mm/year", detail: "Climate change impact" },
        ],
      },
      agriculture: {
        title: "Agriculture & Food",
        icon: "🌾",
        data: [
          { label: "Agricultural Land", value: "59.6%", detail: "Of total land area" },
          { label: "Rice Production", value: "36.3 million tons", detail: "Main staple crop" },
          { label: "Wheat Production", value: "1.1 million tons", detail: "Secondary crop" },
          { label: "Fish Production", value: "4.6 million tons", detail: "World's 3rd largest" },
          { label: "Jute Production", value: "1.5 million tons", detail: "Golden fiber" },
          { label: "Tea Production", value: "96.4 million kg", detail: "Sylhet region" },
          { label: "Rural Population", value: "60.9%", detail: "Agriculture dependent" },
          { label: "Food Security Index", value: "84.4", detail: "Out of 113 countries" },
        ],
      },
      transportation: {
        title: "Transportation Network",
        icon: "🚗",
        data: [
          { label: "Total Roads", value: "372,000 km", detail: "Paved: 25%, Unpaved: 75%" },
          { label: "National Highways", value: "3,813 km", detail: "Major road network" },
          { label: "Railway Lines", value: "2,460 km", detail: "Broad gauge system" },
          { label: "Airports", value: "18", detail: "3 international, 15 domestic" },
          { label: "Seaports", value: "3 major", detail: "Chittagong, Mongla, Payra" },
          { label: "River Ports", value: "500+", detail: "Inland water transport" },
          { label: "Registered Vehicles", value: "3.7 million", detail: "All categories" },
          { label: "Public Transport", value: "Bus, CNG, Rickshaw", detail: "Urban mobility" },
        ],
      },
      energy: {
        title: "Energy Sector",
        icon: "⚡",
        data: [
          { label: "Power Generation", value: "25,514 MW", detail: "Installed capacity" },
          { label: "Electricity Access", value: "96%", detail: "Population coverage" },
          { label: "Natural Gas", value: "26.9 TCF", detail: "Proven reserves" },
          { label: "Coal Reserves", value: "3.3 billion tons", detail: "Proven deposits" },
          { label: "Renewable Energy", value: "3.69%", detail: "Of total generation" },
          { label: "Solar Capacity", value: "663 MW", detail: "Installed solar power" },
          { label: "Per Capita Consumption", value: "510 kWh", detail: "Annual electricity use" },
          { label: "Energy Import", value: "$6.8 billion", detail: "Annual import bill" },
        ],
      },
    },
    regions: [
      {
        name: "Dhaka Division",
        capital: "Dhaka",
        area: "20,594 km²",
        population: "36.05 million",
        districts: 13,
        highlights: ["National Capital", "Economic Hub", "Buriganga River", "Sonargaon"],
        economy: "Finance, IT, Manufacturing, Trade",
        color: COLORS.primary,
      },
      {
        name: "Chittagong Division",
        capital: "Chittagong",
        area: "33,771 km²",
        population: "28.42 million",
        districts: 11,
        highlights: ["Major Port City", "Hill Tracts", "Cox's Bazar Beach", "Tea Gardens"],
        economy: "Port Operations, Tourism, Tea, Textiles",
        color: COLORS.secondary,
      },
      {
        name: "Rajshahi Division",
        capital: "Rajshahi",
        area: "18,197 km²",
        population: "18.48 million",
        districts: 8,
        highlights: ["Silk City", "Mango Capital", "Paharpur Vihara", "Padma River"],
        economy: "Agriculture, Silk Production, Education",
        color: COLORS.accent,
      },
      {
        name: "Khulna Division",
        capital: "Khulna",
        area: "22,285 km²",
        population: "15.56 million",
        districts: 10,
        highlights: ["Sundarbans Gateway", "Shrimp Capital", "Sixty Dome Mosque"],
        economy: "Shrimp Farming, Shipbuilding, Jute",
        color: COLORS.success,
      },
      {
        name: "Sylhet Division",
        capital: "Sylhet",
        area: "12,636 km²",
        population: "9.91 million",
        districts: 4,
        highlights: ["Tea Capital", "Haor Wetlands", "Natural Gas", "Spiritual Tourism"],
        economy: "Tea Production, Natural Gas, Remittances",
        color: COLORS.lightSky,
      },
      {
        name: "Barisal Division",
        capital: "Barisal",
        area: "13,225 km²",
        population: "8.33 million",
        districts: 6,
        highlights: ["Venice of Bengal", "Floating Guava Market", "River Networks"],
        economy: "Agriculture, Fishing, River Transport",
        color: COLORS.warning,
      },
      {
        name: "Rangpur Division",
        capital: "Rangpur",
        area: "16,317 km²",
        population: "15.67 million",
        districts: 8,
        highlights: ["Agricultural Hub", "Tobacco Production", "Teesta River"],
        economy: "Agriculture, Tobacco, Textiles",
        color: COLORS.accent,
      },
      {
        name: "Mymensingh Division",
        capital: "Mymensingh",
        area: "10,485 km²",
        population: "11.37 million",
        districts: 4,
        highlights: ["Agricultural University", "Brahmaputra River", "Haor Areas"],
        economy: "Agriculture, Education, Fisheries",
        color: COLORS.darkSky,
      },
    ],
    sports: {
      national: "Kabaddi",
      popular: [
        {
          name: "Cricket",
          status: "Most Popular",
          icon: "🏏",
          achievements: [
            "ICC Cricket World Cup 2011 - Semi-finalists",
            "ICC Champions Trophy 2017 - Semi-finalists",
            "Asia Cup 2012, 2016, 2018 - Finalists",
            "Test Status since 2000",
            "T20 World Cup 2021 - Super 12",
          ],
          stars: ["Shakib Al Hasan", "Tamim Iqbal", "Mushfiqur Rahim", "Mustafizur Rahman"],
          venues: ["Sher-e-Bangla National Stadium", "Zahur Ahmed Chowdhury Stadium"],
          color: COLORS.primary,
        },
        {
          name: "Football",
          status: "Growing Popularity",
          icon: "⚽",
          achievements: [
            "SAFF Championship 2003 - Winners",
            "AFC Challenge Cup 2006 - Runners-up",
            "South Asian Games - Multiple medals",
          ],
          stars: ["Jamal Bhuyan", "Mamunul Islam", "Topu Barman"],
          leagues: ["Bangladesh Premier League", "Independence Cup"],
          color: COLORS.success,
        },
        {
          name: "Kabaddi",
          status: "National Sport",
          icon: "🤼",
          achievements: [
            "Asian Games - Multiple medals",
            "South Asian Games - Gold medals",
            "World Kabaddi Championship participants",
          ],
          significance: "Traditional rural sport, national identity",
          color: COLORS.secondary,
        },
      ],
      olympics: {
        firstParticipation: "1984 Los Angeles",
        totalParticipations: 10,
        sports: ["Athletics", "Swimming", "Shooting", "Archery", "Wrestling"],
        bestPerformance: "Shooting (closest to medal)",
      },
    },
    culture: {
      languages: {
        official: "Bengali (Bangla)",
        speakers: "98% of population",
        script: "Bengali script (derived from Brahmi)",
        dialects: ["Chittagonian", "Sylheti", "Rangpuri", "Noakhailla"],
        minorities: ["Chakma", "Marma", "Garo", "Santal", "Urdu"],
      },
      festivals: [
        {
          name: "Pohela Boishakh",
          type: "Secular",
          date: "April 14",
          icon: "🎭",
          significance: "Bengali New Year",
          celebrations: ["Mangal Shobhajatra", "Traditional foods", "Cultural programs"],
          unesco: "Mangal Shobhajatra - Intangible Cultural Heritage",
          color: COLORS.secondary,
        },
        {
          name: "Eid ul-Fitr",
          type: "Religious (Islamic)",
          icon: "🌙",
          significance: "End of Ramadan",
          celebrations: ["Family gatherings", "Special prayers", "Feast", "Charity"],
          color: COLORS.primary,
        },
        {
          name: "Durga Puja",
          type: "Religious (Hindu)",
          icon: "🪔",
          significance: "Worship of Goddess Durga",
          celebrations: ["Pandal decorations", "Cultural programs", "Immersion processions"],
          color: COLORS.accent,
        },
        {
          name: "Victory Day",
          type: "National",
          date: "December 16",
          icon: "🇧🇩",
          significance: "1971 Independence War victory",
          celebrations: ["Military parade", "Wreath laying", "Cultural programs"],
          color: COLORS.success,
        },
      ],
      arts: {
        music: [
          "Rabindra Sangeet (Tagore songs)",
          "Nazrul Geeti (Nazrul songs)",
          "Baul folk music",
          "Classical Bengali music",
          "Modern Bengali songs",
        ],
        dance: [
          "Classical Bharatanatyam",
          "Folk dances (Jari, Sari, Bhatiali)",
          "Manipuri dance",
          "Contemporary Bengali dance",
        ],
        crafts: [
          "Nakshi Kantha (embroidered quilts)",
          "Jamdani weaving",
          "Pottery and ceramics",
          "Brass and copper work",
          "Bamboo and cane crafts",
        ],
      },
      literature: {
        nobelPrize: "Rabindranath Tagore (1913) - First non-European Nobel in Literature",
        nationalPoet: "Kazi Nazrul Islam",
        modernWriters: ["Humayun Ahmed", "Shahidul Zahir", "Selina Hossain"],
        genres: ["Poetry", "Novels", "Short stories", "Drama"],
      },
    },
    history: {
      ancient: [
        {
          period: "Ancient Bengal (3rd century BC - 12th century AD)",
          highlights: [
            "Mauryan Empire rule",
            "Gupta Empire golden age",
            "Pala Dynasty (Buddhist period)",
            "Sena Dynasty (Hindu revival)",
          ],
        },
      ],
      medieval: [
        {
          period: "Islamic Period (1204-1757)",
          highlights: [
            "Delhi Sultanate rule",
            "Bengal Sultanate independence",
            "Mughal Empire integration",
            "Islamic architecture development",
          ],
        },
      ],
      colonial: [
        {
          period: "British Colonial Period (1757-1947)",
          highlights: [
            "Battle of Plassey (1757)",
            "Bengal Renaissance",
            "Partition of Bengal (1905)",
            "Independence movement",
          ],
        },
      ],
      modern: [
        {
          period: "Pakistan Period (1947-1971)",
          highlights: [
            "East Pakistan creation",
            "Language Movement (1952)",
            "Six Point Movement (1966)",
            "Liberation War (1971)",
          ],
        },
        {
          period: "Independent Bangladesh (1971-present)",
          highlights: [
            "Independence (December 16, 1971)",
            "Sheikh Mujibur Rahman leadership",
            "Democratic transitions",
            "Economic development",
          ],
        },
      ],
    },
    achievements: {
      international: [
        {
          category: "Peace & Diplomacy",
          icon: "🕊️",
          achievements: [
            "UN Peacekeeping - Largest contributor",
            "Climate Leadership - Vulnerable Forum leadership",
            "Rohingya Crisis - Humanitarian response",
            "Non-Aligned Movement active member",
          ],
          color: COLORS.primary,
        },
        {
          category: "Economic Development",
          icon: "📈",
          achievements: [
            "GDP Growth - Consistent 6%+ for decade",
            "Poverty Reduction - From 44% to 20% (2000-2020)",
            "RMG Industry - 2nd largest exporter globally",
            "Digital Bangladesh - IT sector growth",
            "Pharmaceutical Industry - Export to 150+ countries",
          ],
          color: COLORS.success,
        },
        {
          category: "Social Development",
          icon: "👥",
          achievements: [
            "Millennium Development Goals - Achieved most targets",
            "Gender Parity - Education enrollment",
            "Maternal Mortality - 70% reduction",
            "Life Expectancy - Increased to 73 years",
            "Literacy Rate - Improved to 75%",
          ],
          color: COLORS.secondary,
        },
        {
          category: "Infrastructure",
          icon: "🏗️",
          achievements: [
            "Padma Bridge - Longest bridge in Bangladesh",
            "Metro Rail - Dhaka Mass Rapid Transit",
            "Digital Connectivity - 100+ million internet users",
            "Power Generation - 25,000+ MW capacity",
          ],
          color: COLORS.accent,
        },
      ],
      recognition: [
        "UNESCO World Heritage Sites - 3 sites",
        "UNESCO Intangible Cultural Heritage - Multiple",
        "Climate Vulnerable Forum - Founding member",
        "Commonwealth member since 1972",
        "OIC member since 1974",
        "SAARC founding member",
      ],
    },
  }

  const categories = [
    { id: "overview", title: "Overview", icon: "🏛️", color: COLORS.primary },
    { id: "comprehensive", title: "Detailed Info", icon: "📊", color: COLORS.lightSky },
    { id: "regions", title: "Regions", icon: "🗺️", color: COLORS.secondary },
    { id: "sports", title: "Sports", icon: "🏏", color: COLORS.success },
    { id: "culture", title: "Culture", icon: "🎭", color: COLORS.accent },
    { id: "history", title: "History", icon: "📚", color: COLORS.warning },
    { id: "achievements", title: "Achievements", icon: "🏆", color: COLORS.darkSky },
  ]

  const renderOverviewSection = () => (
    <View style={styles.sectionContainer}>
      {/* Key Statistics Grid */}
      <Animated.View style={[styles.statsGrid, { opacity: cardAnim }]}>
        {bangladeshData.overview.keyStats.map((stat, index) => (
          <Animated.View
            key={index}
            style={[
              styles.statCard,
              {
                transform: [
                  {
                    translateY: cardAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.statIconContainer}>
              <Text style={styles.statIcon}>{stat.icon}</Text>
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statTitle}>{stat.title}</Text>
            <Text style={styles.statSubtitle}>{stat.subtitle}</Text>
          </Animated.View>
        ))}
      </Animated.View>

      {/* Location & Geography */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🌍</Text>
          </View>
          <Text style={styles.cardTitle}>Location & Geography</Text>
        </View>
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
        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>
            🌊 Bangladesh is located in South Asia, bordered by India and Myanmar, with the Bay of Bengal to the south.
          </Text>
        </View>
      </Animated.View>

      {/* Government Structure */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🏛️</Text>
          </View>
          <Text style={styles.cardTitle}>Government Structure</Text>
        </View>
        <View style={styles.govList}>
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
      </Animated.View>

      {/* Economy Overview */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>💰</Text>
          </View>
          <Text style={styles.cardTitle}>Economic Overview</Text>
        </View>
        <View style={styles.economyStats}>
          <View style={styles.economyStatItem}>
            <Text style={styles.economyStatValue}>{bangladeshData.overview.economy.gdp}</Text>
            <Text style={styles.economyStatLabel}>GDP (2023)</Text>
          </View>
          <View style={styles.economyStatItem}>
            <Text style={styles.economyStatValue}>{bangladeshData.overview.economy.growth}</Text>
            <Text style={styles.economyStatLabel}>Growth Rate</Text>
          </View>
          <View style={styles.economyStatItem}>
            <Text style={styles.economyStatValue}>{bangladeshData.overview.economy.exports}</Text>
            <Text style={styles.economyStatLabel}>Exports</Text>
          </View>
        </View>
        <Text style={styles.sectionSubtitle}>Main Industries:</Text>
        <View style={styles.industriesList}>
          {bangladeshData.overview.economy.mainIndustries.map((industry, index) => (
            <View key={index} style={styles.industryTag}>
              <Text style={styles.industryText}>{industry}</Text>
            </View>
          ))}
        </View>
      </Animated.View>
    </View>
  )

  const renderComprehensiveSection = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionDescription}>
          📊 Comprehensive information about Bangladesh covering demographics, education, technology, infrastructure,
          healthcare, environment, agriculture, transportation, and energy sectors.
        </Text>
      </View>

      {Object.entries(bangladeshData.comprehensive).map(([key, section]) => (
        <Animated.View
          key={key}
          style={[
            styles.comprehensiveCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.comprehensiveHeader}>
            <View style={styles.comprehensiveIconContainer}>
              <Text style={styles.comprehensiveIcon}>{section.icon}</Text>
            </View>
            <Text style={styles.comprehensiveTitle}>{section.title}</Text>
          </View>

          <View style={styles.comprehensiveContent}>
            {section.data.map((item, index) => (
              <View key={index} style={styles.comprehensiveItem}>
                <View style={styles.comprehensiveItemHeader}>
                  <Text style={styles.comprehensiveLabel}>{item.label}</Text>
                  <Text style={styles.comprehensiveValue}>{item.value}</Text>
                </View>
                <Text style={styles.comprehensiveDetail}>{item.detail}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      ))}
    </View>
  )

  const renderRegionsSection = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionDescription}>
          🗺️ Bangladesh is divided into 8 administrative divisions, each with unique characteristics and contributions.
        </Text>
      </View>
      {bangladeshData.regions.map((region, index) => (
        <Animated.View
          key={index}
          style={[
            styles.regionCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={[styles.regionHeader, { backgroundColor: region.color + "15" }]}>
            <View style={[styles.regionIconContainer, { backgroundColor: region.color }]}>
              <Text style={styles.regionIcon}>🏛️</Text>
            </View>
            <View style={styles.regionInfo}>
              <Text style={styles.regionName}>{region.name}</Text>
              <Text style={styles.regionCapital}>Capital: {region.capital}</Text>
            </View>
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
          <View style={styles.regionContent}>
            <Text style={styles.regionEconomy}>💼 {region.economy}</Text>
            <View style={styles.highlightsList}>
              {region.highlights.map((highlight, idx) => (
                <View key={idx} style={styles.highlightItem}>
                  <Text style={styles.highlightDot}>•</Text>
                  <Text style={styles.highlightText}>{highlight}</Text>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>
      ))}
    </View>
  )

  const renderSportsSection = () => (
    <View style={styles.sectionContainer}>
      {/* National Sport Highlight */}
      <Animated.View style={[styles.nationalSportCard, { opacity: cardAnim }]}>
        <View style={styles.nationalSportHeader}>
          <Text style={styles.nationalSportIcon}>🤼</Text>
          <View>
            <Text style={styles.nationalSportTitle}>National Sport</Text>
            <Text style={styles.nationalSportName}>Kabaddi</Text>
          </View>
        </View>
        <Text style={styles.nationalSportDescription}>
          Traditional rural sport representing Bangladesh's cultural heritage and national identity.
        </Text>
      </Animated.View>

      {/* Popular Sports */}
      {bangladeshData.sports.popular.map((sport, index) => (
        <Animated.View
          key={index}
          style={[
            styles.sportCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={[styles.sportHeader, { backgroundColor: sport.color + "15" }]}>
            <View style={[styles.sportIconContainer, { backgroundColor: sport.color }]}>
              <Text style={styles.sportIcon}>{sport.icon}</Text>
            </View>
            <View style={styles.sportInfo}>
              <Text style={styles.sportName}>{sport.name}</Text>
              <Text style={styles.sportStatus}>{sport.status}</Text>
            </View>
          </View>

          <View style={styles.sportContent}>
            <Text style={styles.sportSubtitle}>🏆 Major Achievements:</Text>
            {sport.achievements.map((achievement, idx) => (
              <Text key={idx} style={styles.achievementItem}>
                • {achievement}
              </Text>
            ))}

            {sport.stars && (
              <>
                <Text style={styles.sportSubtitle}>⭐ Notable Players:</Text>
                <View style={styles.starsList}>
                  {sport.stars.map((star, idx) => (
                    <View key={idx} style={styles.starTag}>
                      <Text style={styles.starText}>{star}</Text>
                    </View>
                  ))}
                </View>
              </>
            )}
          </View>
        </Animated.View>
      ))}

      {/* Olympic Participation */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🥇</Text>
          </View>
          <Text style={styles.cardTitle}>Olympic Participation</Text>
        </View>
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
        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>🏃‍♂️ Sports: {bangladeshData.sports.olympics.sports.join(", ")}</Text>
        </View>
      </Animated.View>
    </View>
  )

  const renderCultureSection = () => (
    <View style={styles.sectionContainer}>
      {/* Languages */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🗣️</Text>
          </View>
          <Text style={styles.cardTitle}>Languages</Text>
        </View>
        <View style={styles.languageSection}>
          <Text style={styles.officialLang}>Official: {bangladeshData.culture.languages.official}</Text>
          <Text style={styles.languageDetail}>Spoken by {bangladeshData.culture.languages.speakers}</Text>
        </View>
        <Text style={styles.sectionSubtitle}>Regional Dialects:</Text>
        <View style={styles.dialectsList}>
          {bangladeshData.culture.languages.dialects.map((dialect, index) => (
            <View key={index} style={styles.dialectTag}>
              <Text style={styles.dialectText}>{dialect}</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {/* Festivals */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🎉</Text>
          </View>
          <Text style={styles.cardTitle}>Major Festivals</Text>
        </View>
        {bangladeshData.culture.festivals.map((festival, index) => (
          <View key={index} style={styles.festivalItem}>
            <View style={[styles.festivalHeader, { backgroundColor: festival.color + "15" }]}>
              <View style={[styles.festivalIconContainer, { backgroundColor: festival.color }]}>
                <Text style={styles.festivalIcon}>{festival.icon}</Text>
              </View>
              <View style={styles.festivalInfo}>
                <Text style={styles.festivalName}>{festival.name}</Text>
                <Text style={styles.festivalType}>{festival.type}</Text>
                {festival.date && <Text style={styles.festivalDate}>📅 {festival.date}</Text>}
              </View>
            </View>
            <Text style={styles.festivalSignificance}>{festival.significance}</Text>
            {festival.unesco && (
              <View style={styles.unescoTag}>
                <Text style={styles.unescoText}>🏛️ {festival.unesco}</Text>
              </View>
            )}
          </View>
        ))}
      </Animated.View>

      {/* Literature & Arts */}
      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>📚</Text>
          </View>
          <Text style={styles.cardTitle}>Literature & Arts</Text>
        </View>
        <View style={styles.nobelSection}>
          <Text style={styles.nobelTitle}>🏆 Nobel Prize in Literature</Text>
          <Text style={styles.nobelWinner}>{bangladeshData.culture.literature.nobelPrize}</Text>
        </View>
        <Text style={styles.sectionSubtitle}>Traditional Crafts:</Text>
        <View style={styles.craftsList}>
          {bangladeshData.culture.arts.crafts.map((craft, index) => (
            <Text key={index} style={styles.craftItem}>
              🎨 {craft}
            </Text>
          ))}
        </View>
      </Animated.View>
    </View>
  )

  const renderHistorySection = () => (
    <View style={styles.sectionContainer}>
      {Object.entries(bangladeshData.history).map(([period, events]) => (
        <Animated.View
          key={period}
          style={[
            styles.historyCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.historyHeader}>
            <Text style={styles.historyPeriod}>{period.charAt(0).toUpperCase() + period.slice(1)} Period</Text>
          </View>
          {events.map((era, index) => (
            <View key={index} style={styles.eraSection}>
              <Text style={styles.eraTitle}>{era.period}</Text>
              <View style={styles.highlightsList}>
                {era.highlights.map((highlight, idx) => (
                  <View key={idx} style={styles.highlightItem}>
                    <Text style={styles.highlightDot}>•</Text>
                    <Text style={styles.historyHighlight}>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </Animated.View>
      ))}
    </View>
  )

  const renderAchievementsSection = () => (
    <View style={styles.sectionContainer}>
      {bangladeshData.achievements.international.map((category, index) => (
        <Animated.View
          key={index}
          style={[
            styles.achievementCard,
            {
              opacity: cardAnim,
              transform: [
                {
                  translateY: cardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={[styles.achievementHeader, { backgroundColor: category.color + "15" }]}>
            <View style={[styles.achievementIconContainer, { backgroundColor: category.color }]}>
              <Text style={styles.achievementIcon}>{category.icon}</Text>
            </View>
            <Text style={styles.achievementCategory}>{category.category}</Text>
          </View>
          <View style={styles.achievementContent}>
            {category.achievements.map((achievement, idx) => (
              <View key={idx} style={styles.achievementItem}>
                <Text style={styles.achievementDot}>🏆</Text>
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      ))}

      <Animated.View style={[styles.modernCard, { opacity: cardAnim }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>🌟</Text>
          </View>
          <Text style={styles.cardTitle}>International Recognition</Text>
        </View>
        <View style={styles.recognitionList}>
          {bangladeshData.achievements.recognition.map((recognition, index) => (
            <View key={index} style={styles.recognitionItem}>
              <Text style={styles.recognitionDot}>🌟</Text>
              <Text style={styles.recognitionText}>{recognition}</Text>
            </View>
          ))}
        </View>
      </Animated.View>
    </View>
  )

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Enhanced Professional Header */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerAnim,
              transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
            },
          ]}
        >
          <BlurView intensity={20} style={styles.headerBlur}>
            <View style={styles.headerContent}>
              <View style={styles.flagSection}>
                <View style={styles.flagContainer}>
                  <Text style={styles.flagEmoji}>🇧🇩</Text>
                </View>
                <View style={styles.headerTextContainer}>
                  <Text style={styles.countryName}>Bangladesh</Text>
                  <Text style={styles.countrySubtitle}>People's Republic of Bangladesh</Text>
                  <Text style={styles.motto}>"জয় বাংলা" - Victory to Bengal</Text>
                </View>
              </View>

              <View style={styles.quickFactContainer}>
                <View style={styles.factHeader}>
                  <Text style={styles.quickFactLabel}>💡 Did You Know?</Text>
                </View>
                <Animated.Text style={[styles.quickFact, { opacity: fadeAnim }]}>
                  {quickFacts[currentFactIndex]}
                </Animated.Text>
              </View>
            </View>
          </BlurView>
        </Animated.View>

        {/* Enhanced Category Navigation */}
        <Animated.View style={[styles.categorySection, { opacity: fadeAnim }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setSelectedCategory(category.id)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && [
                    styles.categoryButtonActive,
                    { backgroundColor: category.color },
                  ],
                ]}
              >
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryIcon}>{category.icon}</Text>
                  <Text style={[styles.categoryTitle, selectedCategory === category.id && styles.categoryTitleActive]}>
                    {category.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Content Sections */}
        <Animated.View style={[styles.contentSection, { opacity: fadeAnim }]}>
          {selectedCategory === "overview" && renderOverviewSection()}
          {selectedCategory === "comprehensive" && renderComprehensiveSection()}
          {selectedCategory === "regions" && renderRegionsSection()}
          {selectedCategory === "sports" && renderSportsSection()}
          {selectedCategory === "culture" && renderCultureSection()}
          {selectedCategory === "history" && renderHistorySection()}
          {selectedCategory === "achievements" && renderAchievementsSection()}
        </Animated.View>

        {/* Enhanced Footer */}
        <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
          <View style={styles.footerContent}>
            <Text style={styles.footerTitle}>🇧🇩 Comprehensive Guide to Bangladesh</Text>
            <Text style={styles.footerSubtext}>Land of Rivers, Heritage & Resilience</Text>
            <View style={styles.footerStats}>
              <Text style={styles.footerStat}>165M+ People</Text>
              <Text style={styles.footerStat}>•</Text>
              <Text style={styles.footerStat}>700+ Rivers</Text>
              <Text style={styles.footerStat}>•</Text>
              <Text style={styles.footerStat}>Rich Heritage</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === "ios" ? 60 : StatusBar.currentHeight + 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerBlur: {
    borderRadius: 20,
    overflow: "hidden",
  },
  headerContent: {
    padding: 25,
  },
  flagSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  flagContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    elevation: 8,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  flagEmoji: {
    fontSize: 45,
  },
  headerTextContainer: {
    flex: 1,
  },
  countryName: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 8,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  countrySubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 8,
    fontWeight: "500",
  },
  motto: {
    fontSize: 14,
    color: COLORS.secondary,
    fontStyle: "italic",
    fontWeight: "600",
  },
  quickFactContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  factHeader: {
    marginBottom: 10,
  },
  quickFactLabel: {
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: "700",
  },
  quickFact: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "500",
    lineHeight: 22,
  },
  categorySection: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  categoryScroll: {
    paddingVertical: 5,
  },
  categoryButton: {
    backgroundColor: COLORS.white,
    marginRight: 15,
    borderRadius: 25,
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  categoryButtonActive: {
    elevation: 8,
    shadowOpacity: 0.25,
  },
  categoryContent: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    minWidth: 100,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 13,
    color: COLORS.text,
    fontWeight: "600",
  },
  categoryTitleActive: {
    color: COLORS.white,
  },
  contentSection: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  sectionContainer: {
    gap: 20,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
    textAlign: "center",
    fontStyle: "italic",
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 15,
    marginBottom: 10,
  },

  // Enhanced Card Styles
  modernCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardIcon: {
    fontSize: 24,
    color: COLORS.white,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
  },

  // Comprehensive Section Styles
  comprehensiveCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  comprehensiveHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.lightSky + "15",
  },
  comprehensiveIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightSky,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  comprehensiveIcon: {
    fontSize: 24,
    color: COLORS.white,
  },
  comprehensiveTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
  },
  comprehensiveContent: {
    padding: 20,
    gap: 15,
  },
  comprehensiveItem: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.lightSky,
  },
  comprehensiveItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  comprehensiveLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.dark,
    flex: 1,
  },
  comprehensiveValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginLeft: 10,
  },
  comprehensiveDetail: {
    fontSize: 13,
    color: COLORS.text,
    fontStyle: "italic",
    lineHeight: 18,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  statCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    width: (width - 60) / 2,
    alignItems: "center",
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary + "15",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  statIcon: {
    fontSize: 24,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 5,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.dark,
    marginBottom: 3,
    textAlign: "center",
  },
  statSubtitle: {
    fontSize: 12,
    color: COLORS.accent,
    textAlign: "center",
  },

  // Info Grid
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoItem: {
    width: "48%",
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 13,
    color: COLORS.accent,
    fontWeight: "600",
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 15,
    color: COLORS.dark,
    fontWeight: "600",
  },

  // Government List
  govList: {
    gap: 15,
  },
  govItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,
    borderRadius: 10,
  },
  govLabel: {
    fontSize: 14,
    color: COLORS.accent,
    fontWeight: "600",
  },
  govValue: {
    fontSize: 14,
    color: COLORS.dark,
    fontWeight: "600",
    flex: 1,
    textAlign: "right",
  },

  // Economy Stats
  economyStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 15,
  },
  economyStatItem: {
    alignItems: "center",
  },
  economyStatValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 5,
  },
  economyStatLabel: {
    fontSize: 12,
    color: COLORS.accent,
    textAlign: "center",
    fontWeight: "500",
  },

  // Industries List
  industriesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  industryTag: {
    backgroundColor: COLORS.primary + "15",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary + "30",
  },
  industryText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "600",
  },

  // Highlight Box
  highlightBox: {
    backgroundColor: COLORS.secondary + "15",
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  highlightText: {
    fontSize: 14,
    color: COLORS.dark,
    lineHeight: 20,
    fontWeight: "500",
  },

  // Region Cards
  regionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  regionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  regionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  regionIcon: {
    fontSize: 24,
    color: COLORS.white,
  },
  regionInfo: {
    flex: 1,
  },
  regionName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 5,
  },
  regionCapital: {
    fontSize: 14,
    color: COLORS.accent,
    fontWeight: "600",
  },
  regionStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: COLORS.background,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  regionStat: {
    alignItems: "center",
  },
  regionStatValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 3,
  },
  regionStatLabel: {
    fontSize: 11,
    color: COLORS.accent,
    fontWeight: "500",
  },
  regionContent: {
    padding: 20,
    paddingTop: 0,
  },
  regionEconomy: {
    fontSize: 14,
    color: COLORS.text,
    fontStyle: "italic",
    marginBottom: 15,
    fontWeight: "500",
  },

  // Highlights List
  highlightsList: {
    gap: 8,
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  highlightDot: {
    fontSize: 16,
    color: COLORS.primary,
    marginRight: 10,
    marginTop: 2,
  },

  // National Sport Card
  nationalSportCard: {
    backgroundColor: COLORS.secondary + "15",
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: COLORS.secondary + "30",
  },
  nationalSportHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  nationalSportIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  nationalSportTitle: {
    fontSize: 16,
    color: COLORS.accent,
    fontWeight: "600",
  },
  nationalSportName: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  nationalSportDescription: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    fontStyle: "italic",
  },

  // Sport Cards
  sportCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  sportHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  sportIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  sportIcon: {
    fontSize: 24,
    color: COLORS.white,
  },
  sportInfo: {
    flex: 1,
  },
  sportName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 5,
  },
  sportStatus: {
    fontSize: 13,
    color: COLORS.accent,
    fontWeight: "600",
  },
  sportContent: {
    padding: 20,
    paddingTop: 0,
  },
  sportSubtitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 15,
    marginBottom: 10,
  },
  achievementItem: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 6,
    lineHeight: 18,
    paddingLeft: 10,
  },
  starsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 5,
  },
  starTag: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  starText: {
    fontSize: 12,
    color: COLORS.dark,
    fontWeight: "600",
  },

  // Olympic Stats
  olympicStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 15,
  },
  olympicStat: {
    alignItems: "center",
  },
  olympicValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 5,
  },
  olympicLabel: {
    fontSize: 12,
    color: COLORS.accent,
    textAlign: "center",
    fontWeight: "500",
  },

  // Language Section
  languageSection: {
    backgroundColor: COLORS.background,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  officialLang: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 5,
  },
  languageDetail: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: "500",
  },
  dialectsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },
  dialectTag: {
    backgroundColor: COLORS.accent + "15",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.accent + "30",
  },
  dialectText: {
    fontSize: 12,
    color: COLORS.accent,
    fontWeight: "600",
  },

  // Festival Items
  festivalItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  festivalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  festivalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  festivalIcon: {
    fontSize: 20,
    color: COLORS.white,
  },
  festivalInfo: {
    flex: 1,
  },
  festivalName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 3,
  },
  festivalType: {
    fontSize: 12,
    color: COLORS.accent,
    fontWeight: "600",
  },
  festivalDate: {
    fontSize: 12,
    color: COLORS.secondary,
    fontWeight: "600",
    marginTop: 3,
  },
  festivalSignificance: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 18,
    marginBottom: 8,
  },
  unescoTag: {
    backgroundColor: COLORS.secondary + "15",
    padding: 8,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.secondary,
  },
  unescoText: {
    fontSize: 12,
    color: COLORS.secondary,
    fontWeight: "600",
  },

  // Nobel Section
  nobelSection: {
    backgroundColor: COLORS.secondary + "15",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.secondary + "30",
  },
  nobelTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 8,
  },
  nobelWinner: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 18,
    fontWeight: "500",
  },
  craftsList: {
    gap: 6,
    marginTop: 10,
  },
  craftItem: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 3,
    paddingLeft: 5,
  },

  // History Cards
  historyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  historyHeader: {
    backgroundColor: COLORS.primary + "15",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  historyPeriod: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },
  eraSection: {
    marginBottom: 15,
  },
  eraTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.secondary,
    marginBottom: 10,
  },
  historyHighlight: {
    fontSize: 13,
    color: COLORS.text,
    lineHeight: 18,
    flex: 1,
  },

  // Achievement Cards
  achievementCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  achievementHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  achievementIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  achievementIcon: {
    fontSize: 24,
    color: COLORS.white,
  },
  achievementCategory: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
  },
  achievementContent: {
    padding: 20,
    paddingTop: 0,
  },
  achievementItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  achievementDot: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  achievementText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    flex: 1,
    fontWeight: "500",
  },

  // Recognition List
  recognitionList: {
    gap: 10,
    marginTop: 10,
  },
  recognitionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  recognitionDot: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  recognitionText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 18,
    flex: 1,
    fontWeight: "500",
  },

  // Enhanced Footer
  footer: {
    backgroundColor: COLORS.primary,
    marginTop: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerContent: {
    alignItems: "center",
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 10,
    textAlign: "center",
  },
  footerSubtext: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },
  footerStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  footerStat: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
  },
})
