import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, SectionList, Alert } from 'react-native';
import styles from '../styles'
import doencas from '../doencas'
import Icon from 'react-native-vector-icons/FontAwesome';
//import SearchHeader from 'react-native-search-header';
import { SearchBar } from 'react-native-elements';

function removerAcentos(newStringComAcento) {
    var string = newStringComAcento.toLowerCase();
    var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        A: /[\xC0-\xC6]/g,
        e: /[\xE8-\xEB]/g,
        E: /[\xC8-\xCB]/g,
        i: /[\xEC-\xEF]/g,
        I: /[\xCC-\xCF]/g,
        o: /[\xF2-\xF6]/g,
        O: /[\xD2-\xD6]/g,
        u: /[\xF9-\xFC]/g,
        U: /[\xD9-\xDC]/g,
        c: /\xE7/g,
        C: /\xC7/g,
        n: /\xF1/g,
        N: /\xD1/g
    };

    for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace(expressaoRegular, letra);
    }

    return string;
}

let doencasPesquisa = JSON.parse(JSON.stringify(doencas));
doencasPesquisa.map(doenca => {

    doenca.nome = removerAcentos(doenca.nome);
    doenca.descricao = removerAcentos(doenca.descricao);
    doenca.sinonimia = removerAcentos(doenca.sinonimia);
    doenca.etiologia = removerAcentos(doenca.etiologia);
    doenca.modo_de_transmissao = removerAcentos(doenca.modo_de_transmissao);
    doenca.complicacoes = removerAcentos(doenca.complicacoes);
    doenca.diagnostico = removerAcentos(doenca.diagnostico);
    doenca.diagnostico_diferencial = removerAcentos(doenca.diagnostico_diferencial);
    doenca.tratamento = removerAcentos(doenca.tratamento);
    doenca.medidas_de_controle = removerAcentos(doenca.medidas_de_controle);

    return doenca;

})
let i = 0;
function doencaComPrimeiraLetra(d, l) {
    let v = []
    while (d[i].nome[0] == l) {
        v.push(d[i])
        i++;
        if (i == d.length) {
            return v;
        }
    }
    return v;
}

const allDoencas = [
    /*   { title: 'A', data: doencas.filter(x => x.nome[0] == 'A') },
       { title: 'C', data: doencas.filter(x => x.nome[0] == 'C') },
       { title: 'D', data: doencas.filter(x => x.nome[0] == 'D') },
       { title: 'E', data: doencas.filter(x => x.nome[0] == 'E') },
       { title: 'F', data: doencas.filter(x => x.nome[0] == 'F') },
       { title: 'G', data: doencas.filter(x => x.nome[0] == 'G') },
       { title: 'H', data: doencas.filter(x => x.nome[0] == 'H') },
       { title: 'I', data: doencas.filter(x => x.nome[0] == 'I') },
       { title: 'L', data: doencas.filter(x => x.nome[0] == 'L') },
       { title: 'M', data: doencas.filter(x => x.nome[0] == 'M') },
       { title: 'P', data: doencas.filter(x => x.nome[0] == 'P') },
       { title: 'R', data: doencas.filter(x => x.nome[0] == 'R') },
       { title: 'S', data: doencas.filter(x => x.nome[0] == 'S') },
       { title: 'T', data: doencas.filter(x => x.nome[0] == 'T') },
       { title: 'U', data: doencas.filter(x => x.nome[0] == 'U') },
       { title: 'V', data: doencas.filter(x => x.nome[0] == 'V') },*/
    { title: 'A', data: doencaComPrimeiraLetra(doencas, 'A') },
    { title: 'C', data: doencaComPrimeiraLetra(doencas, 'C') },
    { title: 'D', data: doencaComPrimeiraLetra(doencas, 'D') },
    { title: 'E', data: doencaComPrimeiraLetra(doencas, 'E') },
    { title: 'F', data: doencaComPrimeiraLetra(doencas, 'F') },
    { title: 'G', data: doencaComPrimeiraLetra(doencas, 'G') },
    { title: 'H', data: doencaComPrimeiraLetra(doencas, 'H') },
    { title: 'I', data: doencaComPrimeiraLetra(doencas, 'I') },
    { title: 'L', data: doencaComPrimeiraLetra(doencas, 'L') },
    { title: 'M', data: doencaComPrimeiraLetra(doencas, 'M') },
    { title: 'P', data: doencaComPrimeiraLetra(doencas, 'P') },
    { title: 'R', data: doencaComPrimeiraLetra(doencas, 'R') },
    { title: 'S', data: doencaComPrimeiraLetra(doencas, 'S') },
    { title: 'T', data: doencaComPrimeiraLetra(doencas, 'T') },
    { title: 'U', data: doencaComPrimeiraLetra(doencas, 'U') },
    { title: 'V', data: doencaComPrimeiraLetra(doencas, 'V') },


];

class Home extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        search: '',
        sections: allDoencas,
        tags: {},

    };

    GetSectionListItem = item => {
        //Function for click on an item
        this.props.navigation.navigate('Doenca', { item: item });
    };

    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />
        );
    };


    updateSearch = search => {
        this.setState({ search });

        if (search == '') {
            this.setState({ sections: allDoencas })
        } else {
            const topDoencas = [
                { title: 'Melhores Resultados', data: this.buscaTags(search) },
            ];
            this.setState({ sections: topDoencas })
        }

    };

    buscaTags = search => {
        const tags = removerAcentos(search).split(' ').filter(tag => tag != '');
        let pontos = this.state.tags
        tags.forEach(tag => {
            if (this.state.tags[tag] === undefined) {
                pontos[tag] = {}
                doencasPesquisa.forEach(doenca => {
                    pontos[tag][doenca.codigo] = 0;
                    if (doenca.nome.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 100;
                    if (doenca.descricao.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 10;
                    if (doenca.sinonimia.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 20;
                    if (doenca.etiologia.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 10;
                    if (doenca.modo_de_transmissao.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 5;
                    if (doenca.complicacoes.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 7;
                    if (doenca.diagnostico.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 12;
                    if (doenca.diagnostico_diferencial.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 12;
                    if (doenca.tratamento.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 10;
                    if (doenca.medidas_de_controle.indexOf(tag) >= 0)
                        pontos[tag][doenca.codigo] += 5;
                })

            }
        })
        let rank = [];
        doencasPesquisa.forEach(doenca => {
            let aux = { codigo: doenca.codigo, pontos: 0 }
            tags.forEach(tag => {
                aux.pontos += pontos[tag][doenca.codigo]
            })
            if (aux.pontos > 0)
                rank.push(aux);
        })

        rank.sort((a, b) => {
            return b.pontos - a.pontos
        })

        let retorno = []

        rank.forEach(p => {
            retorno.push(doencas.find(x => x.codigo == p.codigo))
        })

        this.setState({ tags: pontos })

        return retorno;
    }


    render() {
        return (
            <>
                <SearchBar
                    placeholder="Pesquise com palavras chave aqui..."
                    onChangeText={this.updateSearch}
                    lightTheme={true}
                    value={this.state.search}
                    containerStyle={{ backgroundColor: '#fff' }}
                    inputContainerStyle={{ backgroundColor: '#eee' }}
                    inputStyle={{ color: 'black' }}
                />
                <View style={styles.container}>
                    <SectionList
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        sections={this.state.sections}
                        renderSectionHeader={({ section }) => (
                            <Text style={styles2.SectionHeaderStyle}> {section.title} </Text>
                        )}
                        renderItem={({ item }) => (
                            // Single Comes here which will be repeatative for the FlatListItems
                            <TouchableOpacity onPress={this.GetSectionListItem.bind(this, item)}>
                                <Text style={styles2.SectionListItemStyle}>
                                    {item.nome}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </>
        );
    }
}

const styles2 = StyleSheet.create({
    SectionHeaderStyle: {
        backgroundColor: 'red',
        fontSize: 20,
        padding: 5,
        color: '#fff',
    },
    SectionListItemStyle: {
        fontSize: 15,
        padding: 15,
        color: '#000',
        backgroundColor: '#F5F5F5',
    },
});

export default Home;
