
====================================================================
PROYECTO: JJB Tech Consulting - Actividad 4 (Buscador de Talentos)
ASIGNATURA: Desarrollo de Aplicaciones Web (UCOM351)
INSTITUCIÓN: Universidad Espíritu Santo (UEES)
====================================================================
INTEGRANTES:
1. Jonathan Ochoa Soto
2. José Escobar
3. Bernabé Ruiz

PROFESOR: Dr. Alex Andrés Santamaría Philco

DESCRIPCIÓN:
Evolución del proyecto JJB Tech Consulting: Aplicación funcional que consume 
la API de GitHub, implementa renderizado dinámico y gestiona estados de 
asincronía profesional.

CUMPLIMIENTO ESTRICTO DE LA RÚBRICA (ACTIVIDAD 4):

--------------------------------------------------------------------
BLOQUE 1: Consumo de API y Lógica Asíncrona.
--------------------------------------------------------------------
- Funciones Asíncronas: Uso estricto de async/await para fetch() y .json(), 
  eliminando mezclas con .then()/.catch().
- URL Dinámica: Construcción de peticiones mediante Template Literals 
  basadas en el valor del input del usuario.
- Validación Robusta: Verificación explícita de 'response.ok' antes de 
  la conversión a JSON.
- Control de Errores: Bloque try...catch que diferencia mensajes para 
  errores 404, errores de servidor (5xx) y pérdida de conexión.
- Transformación de Datos: Extracción de más de 3 propiedades del objeto 
  JSON (avatar, login, followers, etc.) sin mostrar datos crudos.

--------------------------------------------------------------------
BLOQUE 2: Renderizado Dinámico.
--------------------------------------------------------------------
- Inyección Eficiente: Uso de .forEach() para iterar resultados y creación 
  de tarjetas (cards) mediante Template Literals.
- Optimización del DOM: Implementación de 'createDocumentFragment()' para 
  realizar una única operación de inserción, mejorando el rendimiento.
- Limpieza de Interfaz: El contenedor se resetea (innerHTML = '') antes 
  de cada nueva búsqueda.
- Estados de UX: Implementación de los 4 estados requeridos:
  1. Cargando (Spinner activo durante el fetch).
  2. Datos OK (Visualización de tarjetas).
  3. Sin resultados (Mensaje amigable).
  4. Error (Interfaz de fallo con botón 'Reintentar').
- Vista de Detalle: Ejecución de un SEGUNDO fetch() al seleccionar un 
  usuario para mostrar información adicional en un Modal interactivo.

--------------------------------------------------------------------
BLOQUE 3: Sustentación y Exposición.
--------------------------------------------------------------------
- Demostración: Preparados para mostrar búsqueda exitosa, vista de 
  detalle y simulación de error en vivo (Semana 8).
- Explicación Técnica: Capacidad de desglosar el funcionamiento de 
  fetch() y la lógica de renderizado directamente desde el código fuente.
- Defensa del Proyecto: Justificación técnica de las decisiones tomadas 
  (rendimiento, manejo de estados y arquitectura asíncrona).

--------------------------------------------------------------------
CONFIGURACIÓN Y ACCESO:

- Requisito: Conexión a internet para el consumo de la API de GitHub.
====================================================================