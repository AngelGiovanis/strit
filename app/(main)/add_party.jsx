import React, { useState }  from "react";
import { View , Pressable , Text , StyleSheet , TextInput} from 'react-native'

export default function addParty(){
    return(
        <View>
            <Text>Page for adding parties</Text>
            <TextInput/>
            <TextInput/>
            <TextInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    input_boxes:{

    },

});
