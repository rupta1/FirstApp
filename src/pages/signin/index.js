import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const styles = SignInStyles;

export function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Login</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Enter Your Email" style={styles.input} />
        <Text style={styles.title}>Password</Text>
        <TextInput placeholder="Password" style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}
         style={styles.buttonRegister}>
          <Text style={styles.registerButtonText}>
            Not having Account? Create one.
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
