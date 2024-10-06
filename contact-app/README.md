# Gestor de Contactos
Esta es una aplicación web construida con React que permite gestionar una lista de contactos de manera sencilla. Los contactos se obtienen de la API pública de JSONPlaceholder, y la aplicación permite añadir, buscar y mostrar una lista aleatoria de contactos.

## 📋 Características
Realizar una UI en react como se muestra en la imagen, donde se conecte a una API
para proveer lo datos de listas de contactos y realice una búsqueda de los contactos (GET QUERY).

Cada bloque mostrado de la UI debe ser un componente de REACT.

Se entrega, un documento breve de las apis empleadas y las bibliotecas usadas.
Y la URL en github de código de su actividad.

## 🚀 Tecnologías Utilizadas
- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **CSS3**: Para el diseño de la interfaz, utilizando flexbox y estilos modernos.
- **JSONPlaceholder API**: Proporciona datos ficticios para la lista inicial de contactos. [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 📦 Instalación
Sigue estos pasos para clonar y ejecutar la aplicación en tu entorno local:

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/marzod03/contact-app.git
   cd contact-app
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia la aplicación**:

   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## 🛠️ Uso de la Aplicación

1. **Obtener Contactos Aleatorios**: La aplicación obtiene contactos de la API de JSONPlaceholder y selecciona de manera aleatoria 5 contactos para mostrar. Puedes cambiar el número de contactos aleatorios modificando el código en `ContactApp.js`.
2. **Buscar Contactos**: Usa la barra de búsqueda para filtrar los contactos en tiempo real. Los resultados se actualizarán a medida que escribes.
3. **Añadir Contactos**: Completa el formulario con el nombre y número de un nuevo contacto y haz clic en "Añadir" para agregarlo a la lista actual.

## 📁 Estructura del Proyecto

```
contact-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── AddContactForm.js
│   │   ├── ContactApp.js
│   │   ├── ContactItem.js
│   │   ├── ContactList.js
│   │   └── SearchContact.js
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
```

## 🌐 API Usada

La aplicación consume la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), que proporciona una lista de usuarios para simular contactos.

### Ejemplo de Endpoint

- **GET** `/users`: Obtiene una lista de 10 contactos ficticios.

### Estructura de los Contactos

Cada contacto tiene la siguiente estructura:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "phone": "1-770-736-8031"
}
```

## 💡 Personalización

Si deseas cambiar el número de contactos aleatorios mostrados, puedes modificar el siguiente fragmento de código en el componente `ContactApp.js`:

```js
const randomContacts = selectRandomContacts(allContacts, 5);
```

Cambia `5` por el número de contactos que quieras mostrar.

## 🚧 Integrantes de la creacion de este proyecto:

- Miguel Armando Arroyo Narvaez
- Martin Zamora Ornelas



