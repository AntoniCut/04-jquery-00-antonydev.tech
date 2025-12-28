/*
    -----------------------------------------------
    ----------  /jquery.antonydev.tech/  ----------
    ----------  /src/main.js  ---------------------
    -----------------------------------------------
*/


import { registerServiceWorker } from './scripts/register-service-worker.js';
import { effectLoadingPage } from './scripts/effect-loading-page.js';
import { fallbackJQueryJQueryUI } from './libs/jquery/loaders/fallback-jquery-jquery-ui.js'
import { spaWithMethodLoadFromJQueryPlugins } from './plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js';
import { spaJQueryAntonydevTech } from './spa/spa-jquery-antonydev-tech.js';



//  -----  Registrar el Service Worker  -----
registerServiceWorker();

//  -----  Efecto de Loading de la Página  -----
effectLoadingPage();


/*
    ---------------------------------------------------------------------------------
    -----  Esperar a la Carga de jQuery + jQuery UI con fallback (CDN → local)  -----
    -----  y luego iniciar el plugin y la SPA  --------------------------------------
    ---------------------------------------------------------------------------------
*/

fallbackJQueryJQueryUI()

    .then(() => {
        
        console.log('\n');
        console.warn("----- jQuery y jQuery UI cargados correctamente -----");
        console.log('\n');

        //  -----  Iniciar el plugin que carga la SPA  -----
        spaWithMethodLoadFromJQueryPlugins();

        //  -----  Iniciar la SPA específica del sitio  -----
        spaJQueryAntonydevTech();

        //  -----  Limpiar la consola para produccion  -----
        //console.clear();

    })

    .catch(err => {
        console.log('\n');
        console.error("Error cargando jQuery / jQuery UI:", err);
        console.log('\n');
    });



