import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Scomedia = () => {
  const [modalVisibleHabitacionUno, setModalVisibleHabitacionUno] =
    useState(false);
  const [modalVisibleHabitacionDos, setModalVisibleHabitacionDos] =
    useState(false);
  const [modalVisibleHabitacionTres, setModalVisibleHabitacionTres] =
    useState(false);
  const [modalVisibleHabitacionCuatro, setModalVisibleHabitacionCuatro] =
    useState(false);
  const [modalVisibleHabitacionCinco, setModalVisibleHabitacionCinco] =
    useState(false);
  const [modalVisibleHabitacionSeis, setModalVisibleHabitacionSeis] =
    useState(false);

  return (
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
            <YoutubePlayer height={215} play={true} videoId={"Q6OBgMxRons"} />
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
            <YoutubePlayer height={215} play={true} videoId={"X0lRjbrH-L8"} />
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
            <YoutubePlayer height={215} play={true} videoId={"rCj-Fb1OmXg"} />
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
            <YoutubePlayer height={215} play={true} videoId={"b1za7d3KvHw"} />
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
            <YoutubePlayer height={215} play={true} videoId={"ir1QWMOdR2o"} />
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
            <YoutubePlayer height={215} play={true} videoId={"9QxRbzFk3zk"} />
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
          <View>
            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleHabitacionUno(!modalVisibleHabitacionUno);
                  }}
                >
                  <Image
                    style={styles.mejores}
                    source={require("../img/scomedia1.jpg")}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>Friends</Text>
                <Text style={styles.texto}>10 Temporadas</Text>
              </View>
            </View>
            <Text style={styles.linea}>
              --------------------------------------------------
            </Text>

            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleHabitacionDos(!modalVisibleHabitacionDos);
                  }}
                >
                  <Image
                    style={styles.mejores}
                    source={require("../img/scomedia2.jpg")}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>Modern Family</Text>
                <Text style={styles.texto}>11 Temporadas</Text>
              </View>
            </View>
            <Text style={styles.linea}>
              --------------------------------------------------
            </Text>

            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleHabitacionTres(!modalVisibleHabitacionTres);
                  }}
                >
                  <Image
                    style={styles.mejores}
                    source={require("../img/scomedia3.jpg")}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>The Big Bang Theory</Text>
                <Text style={styles.texto}>12 Temporadas</Text>
              </View>
            </View>
            <Text style={styles.linea}>
              --------------------------------------------------
            </Text>

            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleHabitacionCuatro(!modalVisibleHabitacionCuatro);
                  }}
                >
                  <Image
                    style={styles.mejores}
                    source={require("../img/scomedia4.jpg")}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>That 70s Show</Text>
                <Text style={styles.texto}>8 Temporadas</Text>
              </View>
            </View>
            <Text style={styles.linea}>
              --------------------------------------------------
            </Text>

            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleHabitacionCinco(!modalVisibleHabitacionCinco);
                  }}
                >
                  <Image
                    style={styles.mejores}
                    source={require("../img/scomedia5.jpg")}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>40 y 20</Text>
                <Text style={styles.texto}>6 Temporadas</Text>
              </View>
            </View>
            <Text style={styles.linea}>
              --------------------------------------------------
            </Text>

            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleHabitacionSeis(!modalVisibleHabitacionSeis);
                  }}
                >
                  <Image
                    style={styles.mejores}
                    source={require("../img/scomedia6.jpg")}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.listaItemTexto}>
                <Text style={styles.subtitulo}>The Good Place</Text>
                <Text style={styles.texto}>4 Temporada</Text>
              </View>
            </View>
          </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 300,
  },
  texto: {
    textAlign: "justify",
    fontSize: 18,
  },
  subtitulo: {
    fontWeight: "bold",
    color: "black",
    fontSize: 22,
    justifyContent: "center",
    marginRight:10,
  },
  mejores: {
    width: 150,
    height: 200,
    marginVertical: 5,
  },
  litaItem: {
    flexBasis: "49%",
  },
  listaItemTexto: {
    flexBasis: "40%",
    marginTop: 50,
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Scomedia;
