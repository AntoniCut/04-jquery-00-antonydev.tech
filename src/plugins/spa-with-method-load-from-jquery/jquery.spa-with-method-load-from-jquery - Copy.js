/*
    -------------------------------------------------------------------
    ----------  /spa-with-method-load-from-jquery/  -------------------
    ----------  /jquery.spa-with-method-load-from-jquery.js  ----------
    -------------------------------------------------------------------
*/



/**
 * @typedef {import('../../types/route-types.js').Route} Route
 * @typedef {import('../../types/config-option-spa-types.js').ConfigOptionsSPA} ConfigOptionsSPA
 */



/**
 *  - Este plugin `spaWithMethodLoadFromJQueryPlugins` permite cargar contenido dinámico
 *    en una aplicación SPA utilizando el método `load` de jQuery.
 *  - Envuelve el plugin en una función de `Módulos ES6` para facilitar su integración.
 */

export const spaWithMethodLoadFromJQueryPlugins = () => {


    /**
     * - Función autoejecutable que define el plugin jQuery.
     */
    (function ($) {


        /**
         * - Plugin SPA que añade funcionalidad al prototipo de jQuery.
         * @param {ConfigOptionsSPA} options - Opciones de configuración de la SPA.
         * @returns {JQuery} - Retorna el objeto jQuery para encadenamiento.
         */

        $.fn.spaWithMethodLoadFromJQuery = function (options) {


            // ----------------------------------------------------------------
            // Configuración por defecto (solo lo estrictamente necesario)
            // ----------------------------------------------------------------

            /**
             * @type {ConfigOptionsSPA}
             * settings contiene únicamente: routes, base y draggable
             * 
             */

            const settings = $.extend({
                routes: [],
                base: '',
                draggable: false
            }, options);



            // ------------------------------------------------------------
            // Utilidades internas
            // ------------------------------------------------------------


            /**
             * -----------------------------------
             * -----  `normalizePath(path)`  -----
             * -----------------------------------
             * 
             * - Normaliza una ruta eliminando la barra final y el base
             * 
             * @param {string} path
             * @returns {string}
             */

            const normalizePath = (path) => path.replace(settings.base, '').replace(/\/$/, '');


            /**
             * Actualiza el favicon añadiendo un query para forzar recarga
             * @param {string} favicon
             */

            const updateFavicon = (favicon) => {

                let $favicon = $('link[rel~="icon"]');

                if ($favicon.length === 0) {
                    $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');
                }

                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);

            };



            /**
             * Carga hoja de estilos de página (elimina las anteriores marcadas como data-page-style)
             * @param {string} cssFile
             */

            const loadStylesheet = (cssFile) => {

                $('link[data-page-style="true"]').remove();

                $('<link>')
                    .attr({
                        rel: 'stylesheet',
                        href: `${cssFile}?t=${new Date().getTime()}`,
                        'data-page-style': 'true'
                    })
                    .appendTo('head');
            };



            /**
             * Carga un script si existe (verifica con HEAD)
             * @param {string} scriptUrl
             */

            const loadScriptsIfExists = (scriptUrl) => {

                $.ajax({

                    url: scriptUrl,
                    type: 'HEAD',

                    success: function () {

                        $.getScript(scriptUrl)
                            .done(() => console.log(`Cargado: ${scriptUrl}`))
                            .fail((jqxhr, settings, exception) => console.error(`Error en ${scriptUrl}:`, exception));
                    },

                    error: function () {
                        console.warn(`No existe el script: ${scriptUrl}`);
                    }

                });

            };



            /**
             * Carga todos los componentes pasados en el objeto `components`.
             * components: { "#selector": "/ruta/archivo.html", ... }
             * Devuelve una promesa que se resuelve cuando TODOS los componentes se cargan.
             * @param {Record<string,string>} components
             * @returns {Promise<void[]>}
             */

            const loadComponents = (components) => {

                /**
                 * - Array de promesas para cada carga de componente.
                 * @type {Promise<void>[]}
                 */
                const promises = [];


                for (const selector in components) {

                    if (!Object.prototype.hasOwnProperty.call(components, selector))
                        continue;

                    const url = components[selector];

                    const promise = new Promise((resolve, reject) => {

                        $(selector).load(url, function (response, status, xhr) {

                            if (status === "error") {
                                console.error(`Error al cargar ${url}: ${xhr?.statusText || 'Desconocido'}`);
                                $(selector).html(`<p>Error 404 al cargar: ${url}</p>`);
                                return reject(new Error(`Error al cargar ${url}`));
                            }

                            if (selector === '#layoutNavbar') {
                                console.log('Navbar cargado → iniciando actionsNavbar()');

                                // Esperar un microtick para asegurar que el DOM ya está insertado
                                setTimeout(() => {
                                    actionsNavbar();
                                }, 100);
                            }


                            resolve(undefined);

                        });

                    });

                    promises.push(promise);

                }


                // Promise.all se rechazará si alguna carga falla, tal como antes
                return Promise.all(promises);

            };


            /**
             *  -----------------------------------
             *  -----  `enableDraggables()`   -----
             *  -----------------------------------
             *  
             * - Habilita la funcionalidad de elementos arrastrables.
             * - Busca cualquier elemento con la clase `.draggable` y aplica .draggable() (jQuery UI).
             * - Esto evita depender de selectores rígidos.
             */

            const enableDraggables = () => {

                try {

                    $('.draggable').each(function () {

                        if ($(this).draggable) {

                            $(this).draggable({
                                scroll: false
                            });
                        }

                    });

                } catch (err) {
                    // si jQuery UI no está presente, no hacer nada
                    console.warn('jQuery UI draggable no disponible o falló la inicialización.', err);
                }
            };



            /**
             * -------------------------------
             * -----  `actionsNavbar()`  -----
             * -------------------------------
             * 
             * - Inicializa las acciones del navbar y comportamiento de abrir/cerrar.
             * - En lugar de depender de #layoutNavbar, busca cualquier .navbar__container en el DOM.
             */

            const actionsNavbar = () => {


                //const $navbarContainer = $('.navbar__container');
                

                //  -----  Ocultamos el navbar y el botón de cerrar al inicio  -----
                $('.navbar__container').hide();
                $('#layout .navbar__btn-close').hide();


                //  -----  Evita múltiples bindings usando namespaces  -----
                $(document)

                    .off('mouseenter.navbar mouseleave.navbar click.navbar')

                    .on('mouseenter.navbar', '.navbar__container', function () {
                        $(this).stop(true, true);
                    })

                    //  -----  Botón Abrir  -----
                    .on('click.navbar', '.navbar__btn-open', function (e) {

                        e.stopPropagation();

                        //  -----  Mostrar navbar  -----
                        $('.navbar__container').stop(true, true).slideToggle(1000);

                        // Cambiar botones
                        $(this).hide();                      // oculto abrir
                        $('.navbar__btn-close').show();     // muestro cerrar
                    })


                    //  -----  Botón Cerrar  -----
                    .on('click.navbar', '.navbar__btn-close', function (e) {

                        e.stopPropagation();

                        //  -----  Ocultar navbar  -----
                        $('.navbar__container').stop(true, true).slideUp(1000);

                        //  -----  Cambiar botones  -----
                        $(this).hide();                     // oculto cerrar
                        $('.navbar__btn-open').show();      // muestro abrir
                    })

                    //  -----  Clic fuera  -----
                    .on('click.navbar', function () {
                        $('.navbar__container').stop(true, true).slideUp(1000);
                        $('.navbar__btn-close').hide();     // oculto cerrar
                        $('.navbar__btn-open').show();      // muestro abrir  
                    });

            };





            // ------------------------------------------------------------
            // Funciones principales para carga de rutas
            // ------------------------------------------------------------


            /**
             * Carga el contenido (componentes, título, favicon, css, scripts) para una ruta.
             * @param {Route} route
             * @returns {Promise<void>}
             */

            const loadTodoContentInHtml = (route) => {

                return new Promise((resolve, reject) => {


                    if (!route)
                        return reject(new Error('Ruta inválida'));


                    // Si la ruta no tiene components, resolvemos (pero avisamos)
                    if (!route.components || Object.keys(route.components).length === 0) {

                        console.warn(`La ruta ${route.id} no contiene 'components'`);

                        // Aún así actualizamos título / favicon / url / assets si existen

                        if (route.pageTitle)
                            document.title = route.pageTitle;

                        if (route.favicon)
                            updateFavicon(route.favicon);

                        if (route.styles)
                            loadStylesheet(route.styles);

                        if (route.scripts)
                            route.scripts.forEach(s => loadScriptsIfExists(s));

                        const newUrl = `${settings.base}${route.path}`;

                        if (window.location.pathname !== newUrl) {
                            history.pushState({ path: newUrl }, '', newUrl);
                        }

                        return resolve();

                    }


                    // 1) Cargar todos los componentes declarados en la ruta
                    loadComponents(route.components)

                        .then(() => {

                            // if (route.components.hasOwnProperty('#layoutNavbar')) {
                            //     console.log('Navbar cargado → iniciando actionsNavbar()');
                            //     actionsNavbar();
                            // }

                            // 2) Título
                            if (route.pageTitle)
                                document.title = route.pageTitle;

                            // 3) Favicon
                            if (route.favicon)
                                updateFavicon(route.favicon);

                            // 4) URL (pushState)

                            const newUrl = `${settings.base}${route.path}`;

                            if (window.location.pathname !== newUrl) {
                                history.pushState({ path: newUrl }, '', newUrl);
                            }

                            //  -----  Carga el Título del Header  -----
                            if (route.headerTitle && route.components) {
                                $('#layoutHeader #headerTitle').html(route.headerTitle);
                                $('#layoutFooter #footerTitle').html(route.headerTitle);
                            }



                            // 5) CSS
                            if (route.styles) loadStylesheet(route.styles);

                            // 6) JS
                            if (route.scripts) route.scripts.forEach(script => loadScriptsIfExists(script));

                            // 7) Acciones del navbar y draggables (después de insertar HTML)



                            resolve();
                        })

                        .catch(err => {
                            console.error('Error en loadComponents:', err);
                            reject(err);
                        });

                });

            };


            /**
             * `loadContent(route)`
            * - Carga contenido con o sin ViewTransition.
            * - Siempre devuelve una Promise.
            * @param {Route} route
            * @returns {Promise<void>}
            */

            const loadContent = (route) => {

                return new Promise((resolve, reject) => {

                    if (!route) {
                        console.warn("No se encontró la ruta para loadContent");
                        return resolve();
                    }

                    // Si no existe ViewTransition: carga normal
                    if (!document.startViewTransition) {

                        loadTodoContentInHtml(route)
                            .then(resolve)
                            .catch(reject);

                        return;

                    }


                    // ViewTransition SÍ existe
                    try {

                        const transition = document.startViewTransition(() => {
                            return loadTodoContentInHtml(route);
                        });

                        // Algunos navegadores devuelven un objeto sin then() → lo adaptamos:
                        if (transition && typeof transition.finished?.then === "function") {
                            transition.finished.then(resolve).catch(reject);
                        } else {
                            // Fallback: resolvemos sin bloquear
                            resolve();
                        }

                    } catch (err) {

                        console.error("Error en startViewTransition:", err);
                        loadTodoContentInHtml(route)
                            .then(resolve)
                            .catch(reject);
                    }
                });
            };



            /**
             * Inicializa la app: encuentra la ruta inicial y la carga, o la 404.
             */
            const init = () => {

                const normalizedPath = normalizePath(window.location.pathname);
                const initialRoute = settings.routes.find(route => normalizePath(route.path) === normalizedPath);

                if (initialRoute) {

                    loadContent(initialRoute)
                        .catch(err => console.error('Error cargando ruta inicial', err));

                } else {

                    const route404 = settings.routes.find(route => route.id === '404');

                    if (route404)

                        loadContent(route404)
                            .catch(err => console.error('Error cargando 404', err));
                }

                // Reemplazamos el state inicial (sin crear nuevo entry)
                history.replaceState({ path: window.location.pathname }, '', window.location.pathname);

            };



            // ------------------------------------------------------------
            // Manejadores de navegación (clicks y popstate)
            // ------------------------------------------------------------

            // Enlaces: a[data-id] => data-id corresponde a route.id
            $(document).on('click', 'a[data-id]', function (event) {

                event.preventDefault();

                const dataId = $(this).data('id');
                const route = settings.routes.find(r => r.id === dataId);

                // ocultar menus tipo navbar compact
                $('.layout__navbar').slideUp(200);

                if (route)

                    loadContent(route)
                        .catch(err => console.error('Error loadContent (click):', err));

                else {

                    const route404 = settings.routes.find(r => r.id === '404');

                    if (route404)
                        loadContent(route404)
                            .catch(err => console.error('Error loadContent 404:', err));
                }

            });



            // Popstate: manejar atrás / adelante
            window.addEventListener('popstate', function (event) {

                const rawPath = (event.state?.path || window.location.pathname);
                const normalized = normalizePath(rawPath);
                const matchedRoute = settings.routes.find(route => normalizePath(route.path) === normalized);

                if (matchedRoute) {
                    loadContent(matchedRoute).catch(err => console.error('Error loadContent (popstate):', err));
                } else {
                    const route404 = settings.routes.find(r => r.id === '404');
                    if (route404) loadContent(route404).catch(err => console.error('Error loadContent 404 (popstate):', err));
                }
            });



            // ------------------------------------------------------------
            // Inicio del plugin
            // ------------------------------------------------------------
            console.log('\n');
            console.warn('----------  plugin - jquery.spa-with-method-load-from-jquery.js - cargado  ----------');
            console.log('\n');


            //actionsNavbar(); // bindear handlers (no dependen de existencia inmediata del HTML)

            if (settings.draggable)
                enableDraggables();

            // Inicializar la app (carga la ruta correspondiente)
            init();

            return this;
        };

    })(jQuery);

};
