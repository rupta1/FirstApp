import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { WelcomeStyles } from "./styles";

export function Welcome() {
  const styles = WelcomeStyles;
  const handleWhatsApp = () => {
    Linking.openURL(
      "https://wa.me/918101848147?text=Hi%20Printo%20Port%20Blair%2C%20I%20want%20to%20print%20documents."
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animatable.View animation="fadeInDown" duration={900}>
          <Text style={styles.brand}>PRINTO - PORT BLAIR</Text>
          <Text style={styles.subtitle}>Your Local Print Partner</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={styles.heroCard}
        >
          <Text style={styles.heroTitle}>HOME DELIVERY PRINTING</Text>
          <Text style={styles.heroText}>
            Projects, Assignments, and All Documents
          </Text>
          <View style={styles.priceRow}>
            <View style={styles.priceCard}>
              <Text style={styles.priceLabel}>Black & White</Text>
              <Text style={styles.priceValue}>₹7</Text>
              <Text style={styles.priceUnit}>per page</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.priceLabel}>Color Print</Text>
              <Text style={styles.priceValue}>₹10</Text>
              <Text style={styles.priceUnit}>per page</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          duration={2400}
          style={styles.offerBanner}
        >
          <Text style={styles.offerTitle}>STUDENT SPECIAL</Text>
          <Text style={styles.offerText}>₹5/page (B&W) • ₹10/page (Color)</Text>
          <Text style={styles.offerNote}>Limited time offer</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={400}
          style={styles.serviceCard}
        >
          <Text style={styles.sectionTitle}>Super Fast Service</Text>
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Free delivery within 8 km from Aberdeen Bazar
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>
              Beyond that ₹40 + delivery charge
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>Cash on delivery available</Text>
          </View>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={600}
          style={styles.ctaCard}
        >
          <Text style={styles.ctaTitle}>WhatsApp your PDFs now!</Text>
          <Text style={styles.ctaSubtitle}>
            Tap below for instant pickup and print confirmation.
          </Text>
          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={handleWhatsApp}
            activeOpacity={0.85}
          >
            <View style={styles.whatsappIcon}>
              <Text style={styles.whatsappIconText}>WA</Text>
            </View>
            <Text style={styles.whatsappText}>Chat on WhatsApp</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={800}>
          <Text style={styles.contactTitle}>Contact</Text>
          <Text style={styles.contactText}>+91 8101848147</Text>
          <Text style={styles.contactText}>businessbulbin@gmail.com</Text>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}
