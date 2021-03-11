import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, ScrollView, Text } from 'react-native'
import CustomListItem from '../Components/CustomListItem'





const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                    <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})
