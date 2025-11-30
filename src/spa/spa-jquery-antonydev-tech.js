/*
    ------------------------------------------------------
    ----------  /jquery.antonydev.tech/  -----------------
    ----------  /src/scripts/spa/  -----------------------
    ----------  /spa-jquery-antonydev-tech.js  ----------
    ------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route} Route
 * @typedef {import('../types/config-option-spa-types.js').ConfigOptionsSPA} ConfigOptionsSPA
 */


import { routesJQueryAntonydevTech } from '../routes/routes-jquery-antonydev-tech.js';



/**
 *  ------------------------------------
 *  ----- `spaJQueryAntonydevTech` -----
 *  ------------------------------------
 * 
 * - Inicializa la lógica SPA usando jQuery.
 * - Configura las rutas del proyecto y las pasa al plugin dinámico
 *   `spaWithMethodLoadFromJQuery`.
 * - Se encarga únicamente de:
 *   -   ✔ cargar las rutas
 *   -   ✔ pasar la configuración al plugin
 *   -   ✔ inicializar la SPA
 */

export const spaJQueryAntonydevTech = () => {

    console.log('\n');
    console.warn('-----  spa-jquery-antonydev-tech.js cargado  -----');
    console.log('\n');

    /**
     * - Array que combina todas las rutas definidas para la aplicación SPA.
     * @type {Route[]}
     */
    const allRoutes = [
        ...routesJQueryAntonydevTech,
    ];

    /**
     * - Contenedor raíz de la SPA
     * @type {JQuery<HTMLDivElement>}
     */
    const $layout = $('#layout');

    /**
     * - Opciones para el plugin SPA
     *
     * @example - route.components = { "#selector": "archivo.html" }
     *
     * @type {ConfigOptionsSPA}
     */

    const optionsPluginsSPA = {
        routes: allRoutes,
        base: '',
        draggable: true
    };

    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js - v2  ----------
    $layout.spaWithMethodLoadFromJQuery(optionsPluginsSPA);

};
