document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.getElementById('menu-list');
    const componentContainer = document.getElementById('component-container');

    // Lista de Web Components
    const components = [
        { name: 'Mi Widget', path: '../components/mi-widget/mi-widget.html' },
        { name: 'Otro Widget', path: '../components/otro-widget/otro-widget.html' }
    ];

    // Cargar opciones en el menú
    components.forEach(component => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = component.name;
        link.href = "#";
        link.addEventListener('click', function (event) {
            event.preventDefault();
            loadComponent(component.path);
        });
        li.appendChild(link);
        menuList.appendChild(li);
    });

    // Función para cargar el Web Component
    function loadComponent(path) {
        fetch(path)
            .then(response => response.text())
            .then(html => {
                componentContainer.innerHTML = html;
                const script = document.createElement('script');
                script.src = path.replace('.html', '.js');
                document.body.appendChild(script);
            });
    }
});
