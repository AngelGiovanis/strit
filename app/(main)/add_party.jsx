import React, { useState }  from "react";
import { View , Pressable , Text , StyleSheet , TextInput} from 'react-native';

export default function AddParty(){
    const [description,setDescription] = useState("");
    return(
        <View style={styles.container}>
                
            <Text>Page for adding parties</Text>

            <TextInput 
            placeholder="Input Title"
            style={styles.input_boxes}
            value={description}
            onChange={setDescription}
            maxLength={100}
            />
            <Text style={{color: "#fff"}}>
                {description.length}/100
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
        backgroundColor: "rgba(0,0,0,0.6)",

    },
    input_boxes:{
        color: "#fff"
    },
});
