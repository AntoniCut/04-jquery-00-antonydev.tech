/*
    ------------------------------------------------------
    ----------  /jquery.antonydev.tech/  -----------------
    ----------  /src/scripts/spa/  -----------------------
    ----------  /spa-jquery-antonydev-tech.js/  ----------
    ------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route} Route
 * @typedef {import('../types/config-option-spa-types.js').ConfigOptionsSPA} ConfigOptionsSPA
 */


import { routesJQueryAntonydevTech } from '../routes/routes-jquery-antonydev-tech.js';



/**  ----------------------------------------------------------------------------------------------------
 *   ----- `spaJQueryAntonydevTech`  -----
 *   
 * - Inicializa la lógica **SPA** (Single Page Application) para
 *   El Proyecto Principal jQuery.antonydev.tech utilizando jQuery.
 *
 * - Esta función configura las rutas, opciones y elementos del
 *   layout, y luego invoca el plugin `spaWithMethodLoadFromJQuery`
 *   para manejar la navegación dinámica dentro de la aplicación.
 *
 *  - Importa las rutas definidas en:`routesJQueryAntonydevTech`.
 *  - Combina las rutas en un array `allRoutes`.
 *  - Obtiene una referencia al contenedor principal `#layout`.
 *  - Configura las opciones necesarias para el plugin SPA,
 *    incluyendo las secciones del layout `header`, `navbar`, `main`, `footer`.
 *  - Invoca el plugin `spaWithMethodLoadFromJQuery` para activar la navegación en una sola página.
 *  ----------------------------------------------------------------------------------------------------
 */

export const spaJQueryAntonydevTech = () => {


    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-jquery.js  -----');


    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
       
   /**
    * - Array que combina todas las rutas definidas para la aplicación SPA.
    * @type {Route[]}
    */
    
    const allRoutes = [

        ...routesJQueryAntonydevTech,

    ];


    //  ----------  referencias al HTML  ----------

    /**
     * -  Elemento raíz de la aplicación SPA.
     * -  Selecciona el contenedor principal de la aplicación SPA utilizando jQuery.
     *  @type {JQuery<HTMLDivElement>}
     */
    
    const $layout = $('#layout');


    //  ----------  Opciones que le pasamos al plugins  ----------

    /**
     * - Configuración de opciones para el plugin SPA.
     * @type {ConfigOptionsSPA}
     */

    const optionsPluginsSPA = {
        routes: allRoutes,
        base: '',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        draggable: true
    }


    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js  ----------
    $layout.spaWithMethodLoadFromJQuery(optionsPluginsSPA);

}
