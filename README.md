# c-redux

# React

Una libreria basada en componentes para crear interfaces de usuario.

# JSX

El lenguaje de plantillas que utilizamos para escribis nuestras aplicaciones en react. Fusion entre HTML5 && JS

# Create React App

[More..](https://github.com/facebook/create-react-app)

# Stateful - Stateless

Los _componentes no funcionales_ (stateless) solo manejan informacion y funciones (solo logica)

Los _componentes de clase_ (stateful) manejan un estado interno, información y funciones

y tambien podriamos agregar _componentes presentaciones_ que son similares a los funciones pero no contienen logica alguna.

# Ciclo de Vida

Tenemos 4 fases por los que un componente pasa:

- Initialization: Declaramos nuestro estado o propiedades
  - setup props amd state
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

# Issues

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details
