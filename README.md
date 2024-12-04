Agencia de Viajes - Página Web

Este proyecto es una página web de una agencia de viajes que permite mostrar destinos turísticos y paquetes de viaje. Además, incluye una sección de actividades del hotel que pueden ser visualizadas en una cuadrícula, con efectos de hover para una mejor interacción del usuario.

Estructura del Proyecto
La página web está compuesta por tres archivos principales:

index.html: Contiene la estructura básica de la página, incluyendo el encabezado, las secciones de destinos, paquetes, actividades y el pie de página.

styles.css: Archivo de estilo que define la apariencia visual de la página, incluyendo la disposición de las secciones, los efectos de hover y el diseño responsivo.

script.js: Contiene la lógica de JavaScript que permite la interactividad en la página, como la navegación entre destinos y paquetes, y los efectos de hover para las actividades.

Descripción
Página Principal (index.html)
La página contiene las siguientes secciones:

Encabezado (Header):
Logo de la agencia de viajes.
Barra de navegación con enlaces a "Inicio", "Destinos", "Paquetes" y "Contacto".
Sección de Contenido:
Lateral izquierdo (Destinos): Muestra información sobre un destino turístico, incluyendo una imagen, el nombre del destino y una breve descripción. Los usuarios pueden navegar entre los destinos utilizando botones de flecha.
Lateral derecho (Paquetes): Muestra un paquete de viaje con su imagen, tipo, precio y recomendaciones. Los usuarios también pueden navegar entre los paquetes utilizando flechas.
Sección de Actividades del Hotel:
Presenta una lista de actividades disponibles en el hotel, como Spa, Gimnasio, y otras. Cada actividad se muestra con una imagen y descripción. Además, se añaden efectos de hover que cambian el color de fondo al pasar el cursor sobre ellas.
Pie de Página (Footer):
Incluye un mensaje de derechos reservados y enlaces a las redes sociales (Facebook, Instagram, Twitter).
Interactividad (script.js)
El archivo JavaScript contiene la siguiente lógica:

Cambio de Destinos:
Se mantiene un índice currentDestIndex que determina el destino actual visible. Al hacer clic en las flechas izquierda o derecha, el índice cambia y se actualiza la información del destino en la página.
Cambio de Paquetes:
Similar al cambio de destinos, se mantiene un índice currentPackageIndex que permite al usuario navegar entre los paquetes de viaje.
Efectos de Hover en Actividades:
Las actividades muestran un efecto de cambio de color de fondo cuando el usuario pasa el mouse sobre ellas, gracias a las funciones changeColor y resetColor.
Estilos Visuales (styles.css)
El archivo CSS define el diseño y la estética de la página, incluyendo:

Uso de Flexbox para organizar las secciones de contenido.
Una cuadrícula para las actividades del hotel.
Estilos para botones, imágenes y texto.
Efectos de transición al pasar el mouse sobre las actividades del hotel.
Estilos responsivos utilizando media queries para ajustar la disposición de la página en dispositivos móviles.
