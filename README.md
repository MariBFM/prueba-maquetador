## Prueba Maquetador

# Marignacia Flores

Proyecto para prueba de maquetador basado en un diseño sobre una página web de destinos.

## Instalación

### Requisitos

- node v24.21.0

### Primeros pasos

```bash
npm install
```

Para ejecutar el proyecto en local:

```bash
npm start
```

Para ejecutar el proyecto en entorno producción:

```bash
npm run build
npm run start
```

Ejecutar el proyecto en SSR:

```bash
npm run serve:ssr:prueba-maquetador
```

## Librerías instaladas

### Swiper

[SwiperJS](https://swiperjs.com/) librería usada para crear componentes sliders fácilmente. Actualmente solo se usa en el componente c-topslider.

He buscado esta librería para ahorrar tiempo a la hora de crear un slider tan simple como el del c-topslider y que no traiga muchas funciones y que así no aumente el peso del proyecto.

### Angular Material

[Angular Material](https://material.angular.dev/) libraria usada para añadir componentes con estilos base como inputs para formularios, tablas...
En este caso es una librería que quería probar pero creo que no es la adecuada para el proyecto ya que tiene muchos componentes para lo poco que requiere el proyecto.
Aun así se prueba el tooltip en el componente c-routelist en la columna de filtros.

## Reflexión

Para este proyecto he querido usar tanto Tailwind como Sass y la metodología BEM. Ya que entre ellas no son del todo compatibles he intentado usar lo que mejor me conviene según mi manera de trabajar.

Las clases de Tailwind he querido usarlas solo en casos en las que no se tengan que repetir mucho y realmente faciliten la aplicación del estilo.

He procurado limitar el uso de Tailwind, ya que en maquetaciones un poco complejas enseguida puedes encontrarte con etiquetas HTML llenas de clases que acaban complicando la comprensión del código. Por eso a todos los componentes les he aplicado unas clases siguiendo más o menos la estructura que se usa en BEM y a través de sass añadir el resto de estilos.

Como el proyecto no es muy grande en el archivo de estilos styles.scss he juntado tanto la declaración de variables, estilos generales y estilos de elementos como botones.

Las variables las declaro tanto en el :root para poder usarlas con la función var() como dentro de @theme para poder usarlas en las clases Tailwind. Si solo las declaraba por @theme se pueden usar a través de la función var() pero Tailwind borra todas aquellas variables que no se utilicen en las clases, por eso las he declarado dos veces. Si hubiera tenido más tiempo me habría gustado haber encontrado una solución más limpia.
