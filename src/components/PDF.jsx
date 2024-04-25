import React from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import Reactlogo from "../Reactlogo.png";

function PDF() {
  const estilos = StyleSheet.create({
    page: { backgroundColor: "#e4e4e4", padding: 30 },
    titulo: { fontSize: 24, textAlign: "center", fontWeight: "bold" },
    section: { display: "flex", flexDirection: "row", margin: 10, padding: 10 },
    parrafo: {
      fontSize: 12,
      textAlign: "justify",
      lineHeight: 1.5,
      margin: 10,
    },
    numeroPaginaContainer: {
      position: "absolute",
      bottom: 20,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      fontSize: 12,
    },
    numeroPagina: { margin: 10 },
    image: { width: 100, height: 100 },
  });

  return (
    <Document>
        {/* pagina 1 */}
      <Page style={estilos.page}>
        <Text style={estilos.titulo}>Página 1</Text>
        <View style={estilos.section}>
          <Image src={Reactlogo} style={estilos.image} />
          <Text style={estilos.parrafo}>Contenido de la página 1...</Text>
        </View>
        <View style={estilos.numeroPaginaContainer}>
          <Text style={estilos.numeroPagina}>1 / 2</Text>
        </View>
      </Page>

      {/* pagina 2 */}
      <Page style={estilos.page}>
        <Text style={estilos.titulo}>Página 2</Text>
        <View style={estilos.section}>
          <Image src={Reactlogo} style={estilos.image} />
          <Text style={estilos.parrafo}>Contenido de la página 2...</Text>
        </View>
        <View style={estilos.numeroPaginaContainer}>
          <Text style={estilos.numeroPagina}>2 / 2</Text>
        </View>
      </Page>

      {/* ... y así sucesivamente para cada página */}
      
    </Document>
  );
}

export default PDF;
