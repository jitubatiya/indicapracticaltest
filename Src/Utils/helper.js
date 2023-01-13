import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (data) => {
    try {
        await AsyncStorage.setItem("userData", JSON.stringify(data))
    } catch (error) {
    }
}
export const getUserData = async () => {
    try {
        const value = await AsyncStorage.getItem("userData");
        if (value !== null) {
            // We have data!!
            return JSON.parse(value)
        }
    } catch (error) {
        // Error retrieving data
    }
}