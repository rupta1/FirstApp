import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { LogInStyles } from "./styles";

export function LogIn(){
  const styles = LogInStyles;//StyleSheet Loading
  const animation = new Animated.Value(0); // Initial animation value
  const [showPopup, setShowPopup] = useState(false);//show popup
  const [inputFocused, setInputFocused] = useState(false);//Input border color change on focus
  const [inputPassFocused, setInputPassFocused] = useState(false);//Input Password border color change on focus
  const [checked, setChecked] = useState(false);//const checkbox checked

  useEffect(() => { //Animation for showing popup
    if (showPopup) {// check if popup is shown
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    }
  }, [showPopup]);
  const handleOpenPopup = () => {
    setShowPopup(true);//show popup true
  };

  const handleClosePopup = () => {
    setShowPopup(false);//show popup false

  };
  const handleInputFocus = () => {
    setInputFocused(true);//set focus on input
  };

  const handleInputBlur = () => {
    setInputFocused(false);//unset focus on input
  };

  const handleInputPassFocus = () => {
    setInputPassFocused(true);//set focus on input pass
  };

  const handleInputPassBlur = () => {
    setInputPassFocused(false);//unset focus on input pass
  };

  const handleCheckboxToggle = () => {//for checkbox toggle
    setChecked(!checked);
  };

// Use the Animated value in your component's style
const animatedStyle = {
  transform: [
    {
        scale: showPopup
        ? animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          })
        : 1,
    },
  ],
};
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.background} />
      <Animated.View style={[styles.formPopup, showPopup && styles.showPopup && animatedStyle]}>
        <TouchableOpacity style={styles.closeBtn} onPress={handleClosePopup}>
          <Text style={styles.closeBtnText}>X</Text>
        </TouchableOpacity>
        <View style={styles.formWrapper}>
          <Text style={styles.heading}>Login</Text>
          <View style={styles.loginForm}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}><FontAwesome name="user-circle" size={22} /></Text>
              <TextInput 
              style={[styles.input, inputFocused && styles.inputFocused]} 
              placeholder="Username or Email"
              onFocus={handleInputFocus }
              onBlur={handleInputBlur}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}><FontAwesome name="key" size={22} /></Text>
              <TextInput 
              style={[styles.input, inputPassFocused && styles.inputFocused]} 
              placeholder="Password" 
              onFocus={handleInputPassFocus}
              onBlur={handleInputPassBlur}
              secureTextEntry={true} 
              />
            </View>
            <View style={styles.CheckLabelcontainer}>
                <CheckBox
                    checked={checked}
                    onPress={handleCheckboxToggle}
                    checkedColor="#3f51b5"
                    activeOpacity={0.6}
                />
                <Text style={styles.label}>Remember me</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.FrgRegCpntainer}>
                <TouchableOpacity style={styles.regLink}>
                    <Text style={styles.regLinkText}>Register now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.frgPsw}>
                    <Text style={styles.frgPswText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orTextSepContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>OR</Text>
            </View>
          </View>
        </View>
      </Animated.View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleOpenPopup}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};