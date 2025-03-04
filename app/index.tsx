import {View, Text, ScrollView} from 'react-native';
import Button from '../components/ui/button';


import {Link} from 'expo-router';


export default function Home(){
    return(
<ScrollView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 32 }}>

            {/*Hero Section*/}
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1F2937' }}>Hi, this is My Portfolio</Text>
                <Text style={{ color: '#4B5563', marginTop: 8 }}>Front End Developer is Me</Text>
<Button style={{ marginTop: 16 }} onPress={() => console.log('Button pressed!')}>

                    <Link href="/contact" style={{ color: 'white' }}>Hire Me</Link>
                </Button>
            </View>

            {/*About Section*/}
            <View style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#1F2937' }}>About Me</Text>
                <Text style={{ color: '#4B5563', marginTop: 8 }}>
                    I'm a passionate frontend developer with experience in React, React Native, and TypeScript.
                </Text>
            </View>

            {/* Projects Section */}
            <View style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#1F2937' }}>Projects</Text>
                <View style={{ marginTop: 4 }}>
                    <View style={{ padding: 16, backgroundColor: '#F3F4F6', borderRadius: 12, marginBottom: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#1F2937' }}>Project 1</Text>
                        <Text style={{ color: '#4B5563' }}>Description of the project.</Text>
                    </View>
                    <View style={{ padding: 16, backgroundColor: '#F3F4F6', borderRadius: 12 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#1F2937' }}>Project 2</Text>
                        <Text style={{ color: '#4B5563' }}>Description of the project.</Text>
                    </View>
                </View>
            </View>

            {/* Contact Section */}
            <View style={{ marginTop: 12, marginBottom: 8 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#1F2937' }}>Get in Touch</Text>
                <Text style={{ color: '#4B5563', marginTop: 8 }}>Email: your@email.com</Text>
                <Text style={{ color: '#4B5563' }}>LinkedIn: linkedin.com/in/yourprofile</Text>
                <Text style={{ color: '#4B5563' }}>GitHub: github.com/yourgithub</Text>
            </View>
        </ScrollView>
    )
}
