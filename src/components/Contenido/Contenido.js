import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import WikipediaSearch from '../Wiki/WikipediaSearch'

const theme = {
    background: '#E5DCAE',
    headerBgColor: '#DBC952',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#B09906',
    botFontColor: '#fff',
    userBubbleColor: '#B09906',
    userFontColor: '#fff',
    
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider  theme={theme}>
                <ChatBot 
                    steps={[
                        {
                            id: "1",
                            message: "Hola, Soy Sol tu asisten ChatBot ¿Comó te llamas?",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Por Favor introduce un nombre correcto';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}, mucho gusto",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "¿En que puedo Ayudarte? ¿Que te gustaria conocer?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                { label: "Salon 1", trigger: "6A"},
                                { label: "Salon 2", trigger: "6B"},
                                { label:"Paquetes", trigger: "6C"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Perfecto te intersa conocer sobre nuestro Salon 1 ",
                            trigger: "seleccionSalon1"
                        },
                        {
                            id: "6B",
                            message: "Perfecto te interas conocer sobre el Salon 2",
                            trigger:"seleccionSalon2"
                        },
                        {
                            id:"6C",
                            message:"Los qpaquetes que manejamos son los siguientes: Basico,Oro,Platino,Vip",

                        },
                        {
                            id: "seleccionSalon1",
                            options: [
                                { label: "Paquetes", trigger: "7A"},
                                { label: "Promociones", trigger: "7B"},
                                {label: "Instalaciones" , trigger:"7C"},
                            ]
                        },
                        {
                            id: "seleccionSalon2",
                            options: [
                                { label: "Paquetes", trigger: "8A"},
                                { label: "Promociones", trigger: "8B"},
                                {label: "Instalaciones" , trigger:"8C"}
                            ]
                        },
                        {
                            id: "7A",
                            message: "Contamos con los siguientes paquetes",
                            trigger: "seleccionPaquetesSalon1"
                        },
                        {
                            id: "7B",
                            message: "Por el momento no contamos con promociones",
                            
                        },
                        {
                            id:"7C",
                            message:"Intalaciones"
                        },
                        {
                            id: "8A",
                            message: "Contamos con los siguientes paquetes",
                            trigger: "seleccionPaquetesSalon2"
                        },
                        {
                            id: "8B",
                            message: "Por el momento no contamos con promociones ",
                            
                        },
                        {
                            id:"8C",
                            message:"Intalaciones",
                        },
                        {
                            id: "seleccionPaquetesSalon1",
                            options: [
                                { label: "Basico", trigger: "9"},
                                { label: "Oro", trigger: "10"},
                                { label: "Platino", trigger: "11"},
                                { label: "VIP", trigger: "12"},
                            ]
                        },
                        {
                            id: "seleccionPaquetesSalon2",
                            options: [
                                { label: "Basico", trigger: "9A"},
                                { label: "Oro", trigger: "10A"},
                                { label: "Platino", trigger: "11A"},
                                { label: "VIP", trigger: "12A"},
                            ]
                        },
                        {
                            id: "9",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "10",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "11",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "12",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "9A",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "10A",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "11A",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "12A",
                            component: <WikipediaSearch />,
                            message: "Mantelería,Mobiliario (Silas Tiffany, Mesas Imperiales),D.J.(Sonido , Luces Rítmicas),Limpieza de Sanitarios, Servicio de gas en cocina ",
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "En que mas te puedo ayudar",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {label: "Menu", trigger: "5"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}