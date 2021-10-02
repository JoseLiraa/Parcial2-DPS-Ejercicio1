import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe'


const Pcomedia = () =>{

    const [modalVisibleHabitacionUno,  setModalVisibleHabitacionUno] = useState(false);
    const [modalVisibleHabitacionDos,  setModalVisibleHabitacionDos] = useState(false);
    const [modalVisibleHabitacionTres,  setModalVisibleHabitacionTres] = useState(false);
    const [modalVisibleHabitacionCuatro,  setModalVisibleHabitacionCuatro] = useState(false);
    const [modalVisibleHabitacionCinco,  setModalVisibleHabitacionCinco] = useState(false);
    const [modalVisibleHabitacionSeis,  setModalVisibleHabitacionSeis] = useState(false);

    return(
        <>
         <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionUno}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer
            height={215}
            play={true}
            videoId={'akwGjUeU6YA'}
            />
              <Button
                title="Cerrar"
                onPress={() => {
                    setModalVisibleHabitacionUno(!modalVisibleHabitacionUno);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionDos}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer
            height={215}
            play={true}
            videoId={'ZU3Xban0Y6A'}
            />
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionDos(!modalVisibleHabitacionDos);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionTres}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer
            height={215}
            play={true}
            videoId={'2Cwaneq2w-4'}
            />
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionTres(!modalVisibleHabitacionTres);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionCuatro}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer
            height={215}
            play={true}
            videoId={'kleG7XCqOb4'}
            />
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionCuatro(!modalVisibleHabitacionCuatro);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionCinco}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer
            height={215}
            play={true}
            videoId={'WEtW1CISJ1k'}
            />
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionCinco(!modalVisibleHabitacionCinco);
                }}
              ></Button>
            </View>
          </View>
        </Modal>


        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionSeis}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer
            height={215}
            play={true}
            videoId={'5YEVQDr2f3Q'}
            />
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionSeis(!modalVisibleHabitacionSeis);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

         <View style={styles.contenedor}>
          <Text style={styles.titulo}>Comedia</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionUno(!modalVisibleHabitacionUno);
                }}
              >
                <Image
                  style={styles.ciudad}
                  source={require("../img/comedia1.jpg")}
                />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionDos(!modalVisibleHabitacionDos);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("../img/comedia2.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionTres(!modalVisibleHabitacionTres);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("../img/comedia3.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionCuatro(!modalVisibleHabitacionCuatro);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("../img/comedia4.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionCinco(!modalVisibleHabitacionCinco);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("../img/comedia5.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionSeis(!modalVisibleHabitacionSeis);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("../img/comedia6.jpg")}
              />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>

    </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
      marginHorizontal: 5,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 10,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#34495e",
        color: "white",
        padding: 5,
      },
    ciudad: {
      width: 150,
      height: 180,
      marginRight: 10,
    },
    vistaModal: {
        backgroundColor: "#34495eaa",
        flex: 1,
      },
      Modal: {
        backgroundColor: "#fff",
        justifyContent:'center',
        padding: 15,
        borderRadius: 30,
        marginLeft:10,
        marginRight:10,
        marginTop:300,
      },
      texto: {
        textAlign:'justify'
      },
      subtitulo: {
        fontWeight: "bold",
        color:'black',
        fontSize: 14,
        justifyContent: "center",
      },

  });

export default Pcomedia;