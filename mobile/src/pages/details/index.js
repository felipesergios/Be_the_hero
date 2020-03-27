import React from 'react'
import {View, FlatList,Text,Image,TouchableOpacity,Linking} from 'react-native'
import {Feather} from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import {useNavigation ,useRoute} from '@react-navigation/native'
import styles from './styles'
import * as MailComposer from 'expo-mail-composer'

export default function Incident(){
    const route = useRoute()
    const incident = route.params.incident
    const navigation = useNavigation()
    const msg = `Olá ${incident.name} estou entrando em contato por causa do caso ${incident.title} com o valor ${incident.value}`
    function navigateBack(){
        navigation.goBack()
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject:`Herói do caso : ${incident.title}`,
            recipients:[incident.email],
            body:msg
        })

    }
    function sendWpp(){
        Linking.openURL(`whatsapp://send?phone=${incident.wpp}&text=${msg}`)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg}/>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#E82041"/>
            </TouchableOpacity>
            </View>
        <View style={styles.incident}>

                <Text style={[styles.incidentProperty],{marginTop:0}}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
               <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',
            {style:'currency',currency:'BRL'}).format(incident.value)}</Text>
        
        </View> 

    <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Dia</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato</Text>
        <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWpp}>
            <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-Mail</Text>
            </TouchableOpacity>
        </View>
    </View>       
        </View>
    )
}