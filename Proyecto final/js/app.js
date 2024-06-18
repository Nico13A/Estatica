/*document.addEventListener('DOMContentLoaded', function() {
    fetch('../js/productos.json')
        .then(response => response.json())
        .then(productos => {
            const contenedorProductos = document.getElementById('productos');
            productos.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');

                const img = document.createElement('img');
                img.src = producto.img;
                img.alt = producto.nombre;

                const detalles = document.createElement('div');
                const nombre = document.createElement('h2');
                nombre.textContent = producto.nombre;

                const peso = document.createElement('p');
                peso.textContent = `Peso: ${producto.peso}g`;

                const precio = document.createElement('p');
                precio.textContent = `Precio: $${(producto.precio / 1000).toFixed(2)}`;

                const tipo = document.createElement('p');
                tipo.textContent = `Tipo: ${producto.tipo}`;

                detalles.appendChild(nombre);
                detalles.appendChild(peso);
                detalles.appendChild(precio);
                detalles.appendChild(tipo);

                productoDiv.appendChild(img);
                productoDiv.appendChild(detalles);

                contenedorProductos.appendChild(productoDiv);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});*/
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const respuesta = await fetch('../js/productos.json');
        const productos = await respuesta.json();
        console.log(productos);
        const contenedorProductos = document.getElementById('productos');

        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            const img = document.createElement('img');
            img.src = producto.img;
            img.alt = producto.nombre;

            const detalles = document.createElement('div');
            const nombre = document.createElement('h2');
            nombre.textContent = producto.nombre;

            const peso = document.createElement('p');
            peso.textContent = `Peso: ${producto.peso}g`;

            const precio = document.createElement('p');
            precio.textContent = `Precio: $${(producto.precio / 100).toFixed(2)}`;

            const tipo = document.createElement('p');
            tipo.textContent = `Tipo: ${producto.tipo}`;

            detalles.appendChild(nombre);
            detalles.appendChild(peso);
            detalles.appendChild(precio);
            detalles.appendChild(tipo);

            productoDiv.appendChild(img);
            productoDiv.appendChild(detalles);

            contenedorProductos.appendChild(productoDiv);
        });
    } catch (error) {
        console.error('Error al cargar el JSON: ', error);
    }
});