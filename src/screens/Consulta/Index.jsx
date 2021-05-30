import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#007bffe7',
    },

    boxClima: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
        paddingLeft: 10,
    },

    boxInfo: {
        marginLeft: 70,
        flexDirection: 'column',
        alignItems: 'center',
    },

    nomeCidade: {
        color: '#fff',
        fontSize: 26,
        textShadowColor: 'rgba(120, 120, 120, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },

    temperatura: {
        fontSize: 62,
        fontWeight: '700',
        color: '#ffed26',
        textShadowColor: '#787878bf',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },

    imageClima: {
        width: 150,
        height: 150,
    },


    boxInfoTemperatura: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        width: 370,
        height: 90,
        borderRadius: 8,
    },

    boxInfoDesc: {
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40
    },

    tituloInfoTemp: {
        color: '#525252',
        fontWeight: 'bold',
        fontSize: 24,
    },

    tituloInfoValor: {
        marginTop: 8,
        fontWeight: 'bold',
        color: '#393939b1',
        textShadowColor: '#d3d3d3af',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15,
        fontSize: 24,
    },

    boxMore: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40,
        width: 370,
        height: 300,
        borderRadius: 8,
    },

    row: {
        flexDirection: 'row'
    },

    column: {
        flexDirection: 'column'
    },

    boxMoreInfo: {
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },

    titleMore: {
        fontSize: 24,
        color: '#525252',
        fontWeight: 'bold',
    },

    valorMore: {
        marginTop: 10,
        fontSize: 18,
        color: '#393939b1',
        fontWeight: 'bold',
    },

    fakeButton: {
        alignItems: 'center',
        backgroundColor: '#ffed26',
        marginTop: 40,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        marginLeft: 120,
        marginRight: 120,
    },

    textButton: {
        fontSize: 20,
        color: '#007bffe7',
    },
});

export default styles;