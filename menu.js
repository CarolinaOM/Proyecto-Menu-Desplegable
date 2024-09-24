document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownButton = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-content');
    const selectedItemText = document.getElementById('selected-item');
    let isOpen = false; // Variable para controlar el estado del menú
    let selectedItem = null; // Almacena el elemento seleccionado actualmente

    // Alternar la apertura/cierre del menú cuando se hace clic en el botón
    dropdownButton.addEventListener('click', function() {
        isOpen = !isOpen;
        dropdown.classList.toggle('open', isOpen); // Añade o quita la clase "open"
    });

    // Manejar la selección de un elemento del menú
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace siga el href
            const selectedValue = this.getAttribute('data-value');
            const selectedText = this.textContent;

            // Cambia el texto del botón al texto del elemento seleccionado
            dropdownButton.textContent = selectedText;

            // Actualiza el texto del párrafo con el valor seleccionado
            selectedItemText.textContent = `Has seleccionado: ${selectedText} `;

            // Quita la clase 'selected' del elemento previamente seleccionado
            if (selectedItem) {
                selectedItem.classList.remove('selected');
            }

            // Añade la clase 'selected' al elemento actual
            this.classList.add('selected');
            selectedItem = this; // Guarda el nuevo elemento seleccionado

            // Cierra el menú después de la selección
            isOpen = false;
            dropdown.classList.remove('open');
        });
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            isOpen = false;
            dropdown.classList.remove('open');
        }
    });
});