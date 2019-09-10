import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, BackHandler, Modal } from 'react-native';
import styles from '../styles'
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import ImageViewer from 'react-native-image-zoom-viewer';


const images = [{
    // Simplest usage.
    url: 'https://www.rbsdirect.com.br/imagesrc/18909667.jpg?w=700',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}, {
    url: 'https://www.rbsdirect.com.br/imagesrc/18909667.jpg?w=700',

}]

class Doenca extends Component {

    doenca = this.props.navigation.getParam('item')

    static navigationOptions = ({ navigation }) => {
        x = navigation.getParam('item')
        return {
            title: x.nome,
        };
    };

    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
        modalImageVisible: false,
    };



    CONTENT = [
        {
            title: 'DESCRIÇÃO: ',
            content: this.doenca.descricao,
        }, {
            title: 'SINONÍMIA: ',
            content: this.doenca.sinonimia,
        }, {
            title: 'ETIOLOGIA: ',
            content: this.doenca.etiologia,
        }, {
            title: 'RESERVATÓRIO: ',
            content: this.doenca.reservatorio,
        }, {
            title: 'MODO DE TRANSMISSÃO: ',
            content: this.doenca.modo_de_transmissao,
        }, {
            title: 'PERÍODO DE INCUBAÇÃO: ',
            content: this.doenca.periodo_de_incubacao,
        }, {
            title: 'PERÍODO DE TRANSMISSIBILIDADE: ',
            content: this.doenca.periodo_de_transmissibilidade,
        }, {
            title: 'DIAGNÓSTICO: ',
            content: this.doenca.diagnostico,
        }, {
            title: 'DIAGNÓSTICO DIFERENCIAL: ',
            content: this.doenca.diagnostico_diferencial,
        }, {
            title: 'TRATAMENTO: ',
            content: this.doenca.tratamento,
        }, {
            title: 'NOTIFICAÇÃO: ',
            content: this.doenca.notificacao,
        }, {
            title: 'MEDIDAS DE CONTROLE: ',
            content: this.doenca.medidas_de_controle,
        },
    ];

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        let borderLine = 1
        if (isActive) {
            resumo = '';
            borderLine = 0.5
        }
        else {
            resumo = section.content;
            if (section.title.indexOf('NOTIFI') > -1) {
                if (section.content) {
                    resumo = 'Sim'
                }
                else {
                    resumo = 'Não'
                }
            }
        }

        return (
            <Animatable.View
                duration={400}
                style={{ borderBottomWidth: borderLine, borderBottomColor: '#1C1C1C', backgroundColor: '#FFAEB9', height: 40, paddingHorizontal: 10, justifyContent: 'center' }}
                transition="backgroundColor"
            >
                <Text style={styles.titleText} numberOfLines={1}>
                    {section.title}
                    <Text style={styles.text}>
                        {resumo}
                    </Text>


                </Text>
            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        texto = section.content
        if (section.title.indexOf('NOTIFI') > -1) {
            if (section.content)
                texto = 'Sim'
            else
                texto = 'Não'
        }
        return (
            <Animatable.View
                duration={400}
                style={{ borderBottomWidth: 1, borderBottomColor: '#1C1C1C', backgroundColor: 'rgb(255,232,235)', paddingHorizontal: 10, paddingVertical: 5 }}
                transition="backgroundColor"
            >
                <Animatable.Text animation={isActive ? 'fadeIn' : undefined}>
                    {texto}
                </Animatable.Text>
            </Animatable.View>
        );
    }

    closeModalImage = () => { this.setState({ modalImageVisible: false }); }

    render() {
        return (


            <View style={styles.container}>
                <Modal visible={this.state.modalImageVisible} transparent={false}
                    onRequestClose={this.closeModalImage}>
                    <View style={{ backgroundColor: 'black' }}>
                        <View style={{ backgroundColor: 'black', flexDirection: 'row', alignSelf: 'flex-end', padding: 20 }}>
                            <TouchableOpacity onPress={this.closeModalImage}>
                                <Text style={{ fontSize: 30, color: '#9C9C9C', fontWeight: 'bold' }} >X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ImageViewer imageUrls={images}
                        onSwipeDown={this.closeModalImage}
                        /*onMove={data => console.log(data)}*/
                        enableSwipeDown={true}
                    />

                </Modal>
                <ScrollView style={styles.scrollView}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#1C1C1C' }}>
                        <TouchableOpacity onPress={() => { this.setState({ modalImageVisible: true }); }}>
                            <Image
                                style={{ width: '100%', height: 250 }}
                                source={{ uri: 'https://www.cevs.rs.gov.br/upload/recortes/201901/25081317_17566_GD.jpg' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Accordion
                        activeSections={this.state.activeSections}
                        sections={this.CONTENT}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={this.statemultipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        duration={400}
                        onChange={this.setSections}
                    />

                </ScrollView>
            </View>
        );
    }
}


export default Doenca;
