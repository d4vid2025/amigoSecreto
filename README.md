# 🎁 Amigo Secreto

## 📌 Descripción
Este proyecto es una aplicación web que permite a los usuarios ingresar nombres de amigos en una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto".

## 🚀 Funcionalidades

✅ **Agregar nombres**: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a una lista visible al hacer clic en el botón **"Adicionar"**.

✅ **Validar entrada**: Si el campo de texto está vacío, se mostrará una alerta indicando que se debe ingresar un nombre válido.

✅ **Visualizar la lista**: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

✅ **Sorteo aleatorio**: Al hacer clic en el botón **"Sortear Amigo"**, se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

## 🛠️ Tecnologías utilizadas
- HTML
- CSS
- JavaScript

## 📂 Estructura del proyecto
```
📁 amigo-secreto/
│-- 📄 index.html       # Página principal
│-- 📄 style.css        # Estilos de la aplicación
│-- 📄 app.js           # Lógica del sorteo
```

## 🎮 Cómo usar la aplicación
1. Abre el archivo `index.html` en un navegador web.
2. Escribe un nombre en el campo de texto y haz clic en **"Adicionar"**.
3. Repite el proceso para agregar más nombres a la lista.
4. Cuando hayas ingresado todos los nombres, haz clic en **"Sortear Amigo"**.
5. Se mostrará el nombre seleccionado aleatoriamente en la pantalla.

## 📝 Ejemplo de código (JavaScript)
```javascript
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<p>🎉 El amigo secreto es: <strong>${ganador}</strong></p>`;
}
```

## 📜 Licencia
Este proyecto es de código abierto y puede ser modificado y distribuido libremente. ¡Diviértete programando! 🚀
