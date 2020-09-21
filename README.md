# c-redux

# React

Una libreria basada en componentes para crear interfaces de usuario.

# JSX

El lenguaje de plantillas que utilizamos para escribis nuestras aplicaciones en react. Fusion entre HTML5 && JS. JSX es una abreviatura de JavaScript XML. Este es un tipo de archivo usado por React que utiliza la sintaxis de JavaScript junto con la sintaxis HTML como plantilla.

# Create React App

[More..](https://github.com/facebook/create-react-app)

# Stateful - Stateless

Los _componentes funcionales_ (stateless) solo manejan informacion y funciones (solo logica)

Los _componentes de clase_ (stateful) manejan un estado interno, información y funciones

y tambien podriamos agregar _componentes presentaciones_ que son similares a los funciones pero no contienen logica alguna.

# Ciclo de Vida

Tenemos 4 fases por los que un componente pasa:

- Initialization: Declaramos nuestro estado o propiedades
  - setup props y state
- Mounting: Todo componente debe tener render. Es obligatorio.
  - render
  - componentDidMount
- Update
  - componentWillReceiveState
  - shouldComponentUpdate
  - render
  - componentDidUpdate
- Unmounting: Solo hay una función en caso de que queramos hacer algo cuando se destruya un component

  - componentWillUnmount

- Errors
  - componentDidCatch

# Redux

![](https://desarrolloweb.com/archivoimg/general/4460.png)

- Que es?

  Una Herramienta que nos permite manejar todo el estado de nuestra app en un solo lugar.

- Principios

  - Almacenamiento;
  - Inmutabilidad (estados read.only)
  - Centralizado

    En resumen estados inmutables en un solo lugar

- Cuando utilizarlo?

  - Grandes Aplicaciones
  - El flujo de la informacion es compartido por muchos componentes
  - Es para manejar informacion NO! formatos (colores, estilos etc)

- Pilares de Redux
  - Store (almacenamiento de todo la info/estados)
  - Reducers (estado, dependiendo del componente la información que vamos a tener)
  - Action Creator (funciones para pedir informacion)
  - Componentes (codigo jsx, react, interfax)

![proceso](https://miro.medium.com/max/700/0*anKjqdKmALEjVbAR.png)

# React-Redux

<https://react-redux.js.org/introduction/quick-start>

![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20de%202020-09-17%2016-44-18-72e50a98-66f3-45e3-90ae-fb1d6f9d69e2.jpg)

# Store

El store tiene las siguientes responsabilidades:

Contiene el estado de la aplicación
Permite el acceso al estado vía getState()
Permite que el estado sea actualizado vía dispatch(action)
Registra los listeners vía subscribe(listener)
Maneja la anulación del registro de los listeners via el retorno de la función de subscribe(listener)

# Reducers

Las Action Creators describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

El Provider es el componente de Redux en el cual encerraremos nuestra aplicación para que puedan comunicarse los componentes entre ellos.

# Redux Thunk

Redux Thunk permite a las action creators invertir el control despachando funciones. Van a recibir dispatch como argumento y capaz llamarlo asíncronamente. Estas funciones son llamas thunks.

# Datos

## Inmutabilidad

Inmutabilidad, el estado es read-only. Ninguna interacción puede cambiarlo directamente. Lo único que puedes hacer para conseguirlo es emitir una acción que expresa su intención de cambiarlo.

<http://blog.enriqueoriol.com/2018/08/que-es-redux.html>

## Normalizacion

“normalizado”, para quienes no estén familiarizados con el término se refiere a modelar las relaciones de asociación entre un objeto y otro mediante referencias en lugar de embeber directamente esa entidad.

En el mundo JS existen librerías que se suelen usar con redux para normalizar (/ desnormalizar) datos, como por ejemplo normalizr

## <https://medium.com/@javierfernandes/redruco-truco-para-aprender-redux-parte-2-90663b2758ff>

# Issues

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details
