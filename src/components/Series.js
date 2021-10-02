import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Series = () => {

    return (
        <>
            <View style={styles.contenedor}>
            <View >
                  <View style={styles.primero}>
                  <YoutubePlayer
                height={215}
                play={false}
                videoId={'fYlZDTru55g'}
                />
                   </View>
                  <View style={styles.listaItemTexto}>
                    <Text style={styles.subtitulo}>The Good Doctor / Serie</Text>
                    <Text style={styles.texto}>Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso. Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 25 Marzo 2022</Text>
                  </View>
                </View>
                <Text style={styles.linea}>
                  --------------------------------------------------
                </Text>
    
                <View >
                  <View>
                  <YoutubePlayer
                height={215}
                play={false}
                videoId={'oVzVdvGIC7U'}
                />
                   </View>
                  <View style={styles.listaItemTexto}>
                    <Text style={styles.subtitulo}>Peaky Blinders / Serie</Text>
                    <Text style={styles.texto}>Gran Bretaña vive la posguerra. Los soldados regresan, se acuñan nuevas revoluciones y nacen bandas criminales en una nación agitada. En Birmingham, una pandilla de gánsters callejeros asciende hasta convertirse en los reyes de la clase obrera.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 5 Noviembre 2021</Text>
                  </View>
                </View>
                <Text style={styles.linea}>
                  --------------------------------------------------
                </Text>
    
                <View >
                  <View>
                  <YoutubePlayer
                height={215}
                play={false}
                videoId={'b9EkMc79ZSU'}
                />
                   </View>
                  <View style={styles.listaItemTexto}>
                    <Text style={styles.subtitulo}>Stranger Things / Serie</Text>
                    <Text style={styles.texto}>Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.</Text>
                    <Text style={styles.fecha}>Fecha de estreno: 7 Febrero 2022</Text>
                  </View>
                </View>
                <Text style={styles.linea}>
                  --------------------------------------------------
                </Text>
    
    
            </View>
        </>
      );
    };
    
    const styles = StyleSheet.create({
     
      linea: {
        marginVertical: 10,
        flex: 1,
        alignItems: "center",
        color: "#34495e",
        padding: 0,
      },
      contenedor: {
        marginHorizontal: 5,
      },
      texto: {
        textAlign: "justify",
        fontSize: 18,
      },
      fecha: {
        textAlign: "justify",
        fontSize: 18,
        fontWeight: "bold",
      },
      subtitulo: {
        fontWeight: "bold",
        color: "black",
        fontSize: 22,
        justifyContent: "center",
        marginRight:10,
      },
      litaItem: {
        flexBasis: "49%",
      },
      listaItemTexto: {
        flexBasis: "40%",
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
      },
      primero:{
          marginTop:10,
      }
    });

    export default Series;