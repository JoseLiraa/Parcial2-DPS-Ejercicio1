import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Peliculas = () => {

  return (
    <>
        <View style={styles.contenedor}>
        <View >
              <View style={styles.primero}>
              <YoutubePlayer
            height={215}
            play={false}
            videoId={'HSzx-zryEgM'}
            />
               </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>Doctor Strange en el multiverso de la locura / Pelicula</Text>
                <Text style={styles.texto}>será la segunda película del Doctor Extraño  de Marvel Studios, interpretado por de Benedict Cumberbatch.</Text>
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
            videoId={'v1EkoQV4g5c'}
            />
               </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>Eternal / Pelicula</Text>
                <Text style={styles.texto}>Los Eternos son una raza de seres inmortales con poderes sobrehumanos que han vivido en secreto en la Tierra durante miles de años. Aunque nunca han intervenido, ahora una amenaza se cierne sobre la humanidad.</Text>
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
            videoId={'BD77EOU8N3o'}
            />
               </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>Shang-Chi y la leyenda de los Diez Anillos / Pelicula</Text>
                <Text style={styles.texto}>El maestro de artes marciales Shang-Chi se enfrenta al pasado que creía haber dejado atrás cuando se ve envuelto en la red de la misteriosa organización de los Diez Anillos.</Text>
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

export default Peliculas;
