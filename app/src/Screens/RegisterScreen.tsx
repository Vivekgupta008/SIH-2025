// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// interface RegisterScreenProps {
//   navigation?: any; // TODO: Replace with proper navigation type
// }

// const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState<{
//     fullName?: string;
//     email?: string;
//     password?: string;
//     confirmPassword?: string;
//   }>({});

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateForm = (): boolean => {
//     const newErrors: {
//       fullName?: string;
//       email?: string;
//       password?: string;
//       confirmPassword?: string;
//     } = {};

//     if (!fullName.trim()) {
//       newErrors.fullName = 'Full name is required';
//     } else if (fullName.trim().length < 2) {
//       newErrors.fullName = 'Full name must be at least 2 characters';
//     }

//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!confirmPassword.trim()) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (password !== confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = () => {
//     if (validateForm()) {
//       // TODO: Implement actual registration logic here
//       Alert.alert('Success', 'Registration successful!', [
//         {
//           text: 'OK',
//           onPress: () => {
//             // Navigate to HomeScreen
//             navigation?.navigate('HomeScreen');
//           },
//         },
//       ]);
//     }
//   };

//   const handleLoginPress = () => {
//     navigation?.navigate('LoginScreen');
//   };

//   return (
//     <LinearGradient
//       colors={['#1E3A8A', '#0D9488']}
//       style={styles.container}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//     >
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardAvoidingView}
//       >
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.content}>
//             {/* Header */}
//             <View style={styles.header}>
//               <Text style={styles.title}>Create Account</Text>
//               <Text style={styles.subtitle}>Join Smart Tourist Safety</Text>
//             </View>

//             {/* Form */}
//             <View style={styles.form}>
//               {/* Full Name Field */}
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Full Name</Text>
//                 <TextInput
//                   style={[styles.input, errors.fullName && styles.inputError]}
//                   placeholder="Enter your full name"
//                   placeholderTextColor="rgba(255, 255, 255, 0.6)"
//                   value={fullName}
//                   onChangeText={setFullName}
//                   autoCapitalize="words"
//                   autoCorrect={false}
//                 />
//                 {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
//               </View>

//               {/* Email Field */}
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Email</Text>
//                 <TextInput
//                   style={[styles.input, errors.email && styles.inputError]}
//                   placeholder="Enter your email"
//                   placeholderTextColor="rgba(255, 255, 255, 0.6)"
//                   value={email}
//                   onChangeText={setEmail}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   autoCorrect={false}
//                 />
//                 {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
//               </View>

//               {/* Password Field */}
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Password</Text>
//                 <TextInput
//                   style={[styles.input, errors.password && styles.inputError]}
//                   placeholder="Enter your password"
//                   placeholderTextColor="rgba(255, 255, 255, 0.6)"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry
//                   autoCapitalize="none"
//                 />
//                 {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
//               </View>

//               {/* Confirm Password Field */}
//               <View style={styles.inputContainer}>
//                 <Text style={styles.label}>Confirm Password</Text>
//                 <TextInput
//                   style={[styles.input, errors.confirmPassword && styles.inputError]}
//                   placeholder="Confirm your password"
//                   placeholderTextColor="rgba(255, 255, 255, 0.6)"
//                   value={confirmPassword}
//                   onChangeText={setConfirmPassword}
//                   secureTextEntry
//                   autoCapitalize="none"
//                 />
//                 {errors.confirmPassword && (
//                   <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//                 )}
//               </View>

//               {/* Register Button */}
//               <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//                 <Text style={styles.registerButtonText}>Register</Text>
//               </TouchableOpacity>

//               {/* Login Link */}
//               <View style={styles.loginContainer}>
//                 <Text style={styles.loginText}>Already have an account? </Text>
//                 <TouchableOpacity onPress={handleLoginPress}>
//                   <Text style={styles.loginLink}>Login</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 8,
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     opacity: 0.9,
//   },
//   form: {
//     width: '100%',
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 8,
//   },
//   input: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     fontSize: 16,
//     color: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   inputError: {
//     borderColor: '#FF6B6B',
//     borderWidth: 2,
//   },
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     marginTop: 4,
//     fontWeight: '500',
//   },
//   registerButton: {
//     backgroundColor: '#0D9488',
//     borderRadius: 12,
//     paddingVertical: 16,
//     alignItems: 'center',
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   registerButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 24,
//   },
//   loginText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     opacity: 0.9,
//   },
//   loginLink: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
// });

// export default RegisterScreen;


// RegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient colors={["#3A0CA3", "#4361EE"]} style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.headerSubText}>Create Account</Text>
      </LinearGradient>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Email */}
        <Text style={styles.label}>Gmail</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* You can add an eye icon here */}
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signInButton}>
          <LinearGradient
            colors={["#3A0CA3", "#4361EE"]}
            style={styles.signInGradient}
          >
            <Text style={styles.signInText}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Already have account */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.signUpLink}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "35%",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  headerSubText: {
    fontSize: 26,
    color: "#fff",
    marginTop: 5,
    fontWeight: "600",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35,
  },
  label: {
    fontSize: 14,
    color: "#3A0CA3",
    fontWeight: "600",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 8,
  },
  signInButton: {
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 30,
    marginTop: 10,
  },
  signInGradient: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  signInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#aaa",
  },
  signUpLink: {
    color: "#4361EE",
    fontWeight: "bold",
  },
});
