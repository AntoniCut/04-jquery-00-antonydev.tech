/*
    --------------------------------------------------------
    ----------  /jquery.antonydev.tech/  -------------------
    ----------  /src/routes/  ------------------------------
    ----------  /routes-jquery-antonydev-tech.js  ----------
    --------------------------------------------------------
*/



/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routesJQueryAntonydevTech = [

    {
        id: 'home',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "jQuery Desarrollos by AntonyDev",
        path: "/",
        components: {
            "#layoutHeader": "/src/components/layout/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/00-home.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Bienvenido a mis desarrollos con jQuery",
        styles: [
            { href: "/src/styles/pages/00-home.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: 'udemy',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos jQuery de Udemy",
        path: "/01-udemy/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/udemy/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/01-udemy.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },

        headerTitle: "Mis cursos de jQuery de Udemy",
        styles: [ 
            { href: "/src/styles/pages/01-udemy.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: 'youtube',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos de jQuery de YouTube",
        path: "/02-youtube/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/youtube/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/02-youtube.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Mis Cursos de jQuery de YouTube",
        styles: [
            { href: "/src/styles/pages/02-youtube.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: 'desWebCom',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos de jQuery de desarrolloweb.com",
        path: "/03-desarrolloweb.com/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/desarrolloweb.com/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/03-desarrolloweb.com.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Mis Cursos de jQuery de desarrolloweb.com",
        styles: [
            { href: "/src/styles/pages/03-desarrolloweb.com.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: 'escuelaIt',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos de jQuery de Escuela IT",
        path: "/04-escuela.it/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/escuela.it/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/04-escuela.it.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Mis Cursos de jQuery de Escuela IT",
        styles: [
            { href: "/src/styles/pages/04-escuela.it.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: 'books',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Libros de jQuery",
        path: "/05-books/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/books/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/05-books-jquery.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },

        headerTitle: "Mis Libros de jQuery",
        styles: [
            { href: "/src/styles/pages/05-books-jquery.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: 'manuales',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Manuales de jQuery",
        path: "/06-manuales/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/manuales/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": '/src/components/layout/layout-navbar-themes-jquery-ui.html',
            "#layoutMain": "/src/pages/06-manuales-jquery.html",
           "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Mis Manuales de jQuery",
        styles: [
            { href: "/src/styles/pages/06-manuales-jquery.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    },

    {
        id: '404NotFoundPage',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "404 | Not Found",
        path: "/404",
        components: {
            "#layoutHeader": undefined,
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#btnNavbarThemesJQueryUI": "/src/components/buttons/btn-navbar-themes-jquery-ui.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutNavbarThemesUI": undefined,
            "#layoutMain": "/src/pages/404-not-found-page.html",
            "#layoutFooter": undefined,
        },
        headerTitle: "Página no encontrada - 404",
        styles: [
            { href: "/src/styles/pages/00-home.css" }
        ],
        scripts: [
            { src: "/src/scripts/tooltips.js" }
        ]
    }

];
