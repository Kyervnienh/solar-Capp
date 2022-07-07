# Solar CAPP | Calculadora solar

## ¿Qué es Solar CAPP?

Solar CAPP es una aplicación web capaz de realizar un dimensionado solar autónomo e interconectado a la red utilizando el consumo eléctrico y la ubicación del lugar donde se pretende colocar esta instalación.

Para un sistema solar autónomo se realiza el calculo de los paneles solares, baterías, inversor y regulador de carga.

Para el sistema solar interconectado a la red se calcula el ahorro económico y energético, así como el tiempo de retorno de inversión en base al costo estimado de la instalación.

## ¿Cómo funciona Solar CAPP?

Solar CAPP no solo realiza el dimensionado, también proporciona información sobre las instalaciones solares fotovoltaicas.

Para realizar el calculo debemos ir a la sección "calculadora solar" y seleccionar el tipo de sistema que se desea implementar (autónomo o interconectado). Una vez seleccionado el tipo de sistema se debe seleccionar la ubicación en el mapa, para después introducir el consumo eléctrico.

Lo anterior aplica para los dos tipos de sistemas y a partir de aquí se encuentra la diferencia en los calculos:

### Sistema autónomo

En este punto debemos seleccionar un panel solar o introducir los datos de un panel solar diferente, en caso de introducir los datos de un panel solar diferente debemos seleccionar "personalizado", posteriormente se da click en "calcular los paneles solares y nos indicará la cantidad necesaria para nuestra instalación.

Lo siguiente es el calculo de las baterías de forma similar a los paneles solares con la diferencia que existe una casilla llamada "días de autonomía" la cual indica el número de días que la instalación puede proporcionar energía sin recibir radiación solar (debido a tormentas, huracanes, etc.) normalmente se realiza para 2 días, pero se puede modificar. Esto nos indicará la cantidad de baterías necesarias, así como el inversor y regulador de carga recomendados.

Para finalizar se muestra un resumen con los elementos calculados.

### Sistema interconectado a la red

Igual que en el sistema autónomo debemos seleccionar un panel solar o introducir los datos de un panel solar diferente.

En este tipo de calculo tenemos una interfaz donde podemos modificar la cantidad de paneles solares a utilizar, el consumo eléctrico, costo de la electricidad y el costo del sistema. Lo que nos indica es el consumo eléctrico y el costo de la electricidad esperado después de implementar el sistema, así como el ahorro económico y el tiempo de retorno de inversión.

## ¿Cómo se ve Solar CAPP en la web?

Puedes visualizar como se ve actualmente Solar CAPP visitando: [Solar CAPP](https://solar-capp.netlify.app)

## ¿Cómo puedo usar Solar CAPP localmente?

Para comenzar a usar Solar CAPP localmente:

* Clona el repositorio y una vez clonado, instala las dependencias necesarias ejecutando el siguiente comando:


```
npm install
```

Levanta el proyecto con el siguiente comando:
```
npm start
```

Y listo, deberías de poder visualizar la información.

## Features

[Solar CAPP](https://solar-capp.netlify.app) es desarrollada usando tecnologías como:

- :bulb: **REACTJS**: Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario.

- :art: **CSS**: Hojas de estilo en cascada.

- :iphone: **Responsive**: Diseñada para visualizarse en distintos tamaños de pantalla.

- :gear: **Best Practices**: Flujo de trabajo sólido para mantener el código limpio y estructurado.

- :earth_americas: **Leaflet**: Biblioteca de Javascript para la creación de mapas.

- :satellite: **NASA POWER**: API de la NASA que provee información sobre variables solares y metereologicas de la base de datos de la NASA.
