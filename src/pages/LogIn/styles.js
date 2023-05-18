import { StyleSheet } from "react-native";
export const LogInStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    formPopup: {
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
      transform: [{ translateY: 1100 }],
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
    },
    showPopup: {
      transform: [{ translateX: 0 }],
    },
    closeBtn: {
      position: 'absolute',
      top: 0,
      right: 10,
      zIndex: 1,
    },
    closeBtnText: {
    fontSize: 35,
    color: "#000000",
    fontWeight: "100",
    textDecorationLine: 'none',
    },
    formWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 24,
      marginBottom: 16,
    },
   
    loginForm: {
      marginTop: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    inputLabel: {
      height: 32,
      fontWeight: 'bold',
      position: 'absolute',
      padding: 8,
      paddingTop:4,
      borderRightWidth: 4,
      borderRightColor: '#E0E3E5',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      textTransform: 'capitalize',
      color: '#D0D0D0',
    },
    input: {
      height: 52,
      width: 300,
      borderRadius: 8,
      borderWidth: 1.5,
      borderColor: '#E0E3E5',
      paddingLeft: 48,
      paddingRight: 8,
      fontSize: 16,
    },
    inputFocused:{
        borderBottomColor: '#0078d4',
    },
    CheckLabelcontainer: {
        flexDirection: 'row',
        marginLeft:-20,
        marginTop:-10,
      },
      label: {
        marginTop:17,
        marginLeft: -10,
      },
    loginButton: {
      height: 48,
      width: 300,
      borderRadius: 6,
      backgroundColor: '#0078d4',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    loginButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    FrgRegCpntainer:{
        flexDirection: 'row',
        marginBottom:20,
    },
    regLink: {
      marginBottom: 0,
    },
    regLinkText: {
      color: '#929699',
    },
    frgPsw: {
      marginLeft: 120,
      marginBottom: 0,
    },
    frgPswText: {
      color: '#929699',
    },
    separator: {
      width: 300,
      height: 1,
      backgroundColor: '#929699',
      marginBottom: 16,
    },
    orTextSepContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    orText: {
      position: 'absolute',
      paddingLeft: 20,
      paddingRight: 20,
      bottom:7,
      backgroundColor:'#ffffff',
      fontSize: 18,
      fontWeight: '400',
      color: '#000000',
    },
    loginBtn: {
      padding: 8,
      fontSize: 16,
      borderRadius: 5,
      backgroundColor: '#333',
      color: '#fff',
      marginBottom: 8,
      alignSelf: 'center',
    },
    loginBtnText: {
      color: '#fff',
    },
  });
  