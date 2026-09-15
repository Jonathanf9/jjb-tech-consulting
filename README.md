
====================================================================
PROYECTO: JJB Tech Consulting - Actividad 3 (JS, DOM y Validación)
ASIGNATURA: Desarrollo de Aplicaciones Web (UCOM351)
INSTITUCIÓN: Universidad Espíritu Santo (UEES)
====================================================================
INTEGRANTES:
1. Jonathan Ochoa Soto
2. José Escobar
3. Bernabé Ruiz

DESCRIPCIÓN DE LA ENTREGA:
Se presenta la evolución del proyecto JJB Tech Consulting, integrando
dinamismo mediante JavaScript, manipulación del DOM y persistencia de 
datos en el backend.

CUMPLIMIENTO ESTRICTO DE LA RÚBRICA:

- BLOQUE 1 (Conexión de Eventos y Control): 
  Capturamos el formulario principal usando addEventListener('submit') 
  sobre la etiqueta <form>. Implementamos event.preventDefault() como 
  primera línea para evitar recargas de página. Utilizamos rigurosamente 
  document.querySelector() para obtener el .value de la búsqueda y 
  manejamos múltiples tipos de eventos (submit, input, blur, click).
  
- BLOQUE 2 (Validación de Formulario con Regex): 
  Se validan en tiempo real 4 campos mediante Regex (Nombre, Email, 
  Teléfono de 10 dígitos y Detalles del Proyecto). Cada campo despliega 
  un mensaje específico y descriptivo debajo de este, el cual desaparece 
  automáticamente al corregir el error. El botón submit se mantiene 
  disabled mientras haya un solo error activo.

- BLOQUE 3 (Manipulación del DOM y Estados Visuales): 
  Se incluyen 3 estados visuales claramente diferenciados: Inicial, 
  Buscando y Resultado. Todo se gestiona mediante classList.add() y 
  classList.remove() (absolutamente prohibido manipular style directo). 
  El estado intermedio inyecta el mensaje exacto "Buscando información 
  de [valor]...". Por último, la función limpiarYResetear() aplica 
  .reset() al formulario y lo regresa al estado inicial.

- BLOQUE 5 (Calidad y Estructura del Código): >   El script.js está separado y organizado con los comentarios de sección
exactamente solicitados. Está modularizado en más de 3 funciones de
responsabilidad única (validar, actualizar DOM, manejar submit). Se
usa consistentemente let y const (cero uso de var), sin atributos
onclick en el HTML, y no arroja ningún error ni warning en consola.

VALOR AGREGADO: 
Adelantándonos a los retos de consumo de API de la Actividad 4, el 
proyecto integra un servidor Node.js (Express) y una base de datos local 
(SQLite). Se utiliza fetch() asíncrono para registrar y recuperar los 
datos desde el frontend de forma verdaderamente dinámica y profesional.


VERIFIACIÓN DE BACKEND DE MANERA LOCAL:

1. Ejecutamos 'npm install' en la raíz.
2. Iniciamos el servidor con 'node server.js'.
3. Abrimos la sección de 'contacto.html' en el navegador.
4 Verificamos los datos alojados en nuestra base de datos previamente registrados en nuestro formulario.
====================================================================