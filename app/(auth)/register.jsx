import React , {useState} from "react"
import {Platform,KeyboardAvoidingView,View , Text , TextInput, Button, StyleSheet,Image,Pressable} from "react-native"
import { supabase } from "../../lib/supabase.js"
import { router } from "expo-router";


export default function(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username,setUsername] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () =>{

        setError("");
        setLoading(true);
        if(!email || !password || !username){
            setError("please fill both email, password and username");
            setLoading(false);
            return;
        }

        if (!email.includes("@")){
            setError("please enter valid email");
            setLoading(false);
            return;
        }
        if(password.length < 6){
            setError("password must be bigger than 6 characters");
            setLoading(false);
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options:{
                data:{
                    username,
                }
            }
        });

        if(error){
            setError(error.message);
            setLoading(false);
            return;
        }

        console.log(`registering user with email: ${email}`);

        //check for errors
        setLoading(false);
        router.replace("/map");
    }
    return(
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.container}>
                <View style={[styles.circle,{width: 385,height: 385,top: -120, right: -100, backgroundColor: "rgba(252,139,40,0.34)"}]}></View>
                <View style={[styles.circle,{width: 200, height: 200,top: 200, left: -80, backgroundColor: "rgba(252,139,40,0.34)"}]}></View>
                <View style={[styles.circle,{width: 600, height: 600,right: -400, bottom: -50, backgroundColor: "rgba(252,139,40,0.34)"}]}></View>
                <View style={[styles.circle,{width: 200, height: 200,left: -100, bottom: -50, backgroundColor: "rgba(252,139,40,0.34)"}]}></View>
                
                <Image
                style={{marginBottom:60,paddingBottom:10}}
                source={require("../../assets/images/strit_logo_inner_shadow.png")}/>
                
                <View style={styles.glass_background}>
                    <Text style={{fontSize: 27, color: "#fff",paddingBottom: 20,}}>Create An Account</Text>
                    <View style={styles.inputs}>
                        <Text style={styles.button_text_style}>username</Text>
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"

                            placeholder="Enter Username"
                            placeholderTextColor="rgba(255,255,255,0.6)"
                            
                            style={styles.input_style}
                        />
                    
            
                        <Text style={styles.button_text_style}>email</Text>
                    <TextInput
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"

                            placeholder="Enter Email"
                            placeholderTextColor="rgba(255,255,255,0.6)"
                            
                            style={styles.input_style}
                        />

                        <Text style={styles.button_text_style}>password</Text>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            autoCapitalize="none"

                            placeholder="Enter Password"
                            placeholderTextColor="rgba(255,255,255,0.6)"
                            
                            style={styles.input_style}
                        />

                    </View>
                    {error ? (
                        <Text style={{ color: "rgba(255, 0, 0, 1)", marginBottom: 10 }}>
                            {error}
                        </Text>
                    ) : null}
                    <Pressable onPress={handleRegister} style={styles.register_button} disabled={loading}>
                        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 16 }}>
                            {loading ? "Registering..." : "Register"}
                        </Text>
                    </Pressable>

                    <Text style={{color: "#fff",fontSize: 13,marginTop: 20,marginBottom: 10}}>Already Have An Account?</Text>
                    <Pressable
                    onPress={()=> {router.push("/login")}}
                    style={styles.login_button}
                    >
                        <Text style={{color: "#fff",fontWeight: 500,fontSize: 15}}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#FF7800",
    },
    glass_background:{
        backgroundColor: "rgba(255, 255, 255, 0.14)",
        borderRadius: 20,
        borderColor: "rgba(255,255,255,0.30)",
        borderWidth: 1,
        height: "60%",
        width: "85%",

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 24,
        elevation: 16,

        zIndex: 1,
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    circle:{
        position: "absolute",
        borderRadius:9999,
        zIndex: 0,
    },
    input_style:{
        backgroundColor:"rgba(255,255,255,0.18)",
        borderRadius: 12,
        borderColor: "rgba(255,255,255,0.3)",
        borderWidth: 1,
        padding: 10,
        width: "100%",
        placeholderTextColor: "rgba(255,255,255,0.6)",
        color: "#fff",
    },
    
    button_text_style:{
        color: "rgba(255,255,255,0.8)",
        fontSize: 17,
    },
    register_button:{
        backgroundColor: "rgba(252,139,40,0.34)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.45)",
        borderRadius: 12,
        padding: 10,
        paddingLeft:40,
        paddingRight: 40,
    },
    login_button:{
        backgroundColor: "rgba(252,139,40,0.34)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.45)",
        borderRadius: 12,
        padding: 10,
        paddingLeft:40,
        paddingRight: 40,
    },
    inputs:{
        gap: 10,
        marginBottom: 20,
        width: "100%"
    }
})