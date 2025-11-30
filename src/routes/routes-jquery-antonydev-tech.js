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
            "#layoutMain": "/src/pages/00-home.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Bienvenido a mis desarrollos con jQuery",
        styles: "/src/styles/pages/00-home.css",
        scripts: []
    },

    {
        id: 'udemy',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos jQuery de Udemy",
        path: "/01-udemy/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/udemy/layout-header.html",
            "#btnNavbar": "/src/components/buttons/btn-navbar.html",
            "#layoutNavbar": "/src/components/layout/udemy/layout-navbar.html",
            "#layoutMain": "/src/pages/01-udemy.html",
            "#layoutFooter": "/src/components/layout/udemy/layout-footer.html",
        },

        headerTitle: "Mis cursos de jQuery de Udemy",
        styles: "/src/styles/pages/01-udemy.css",
        scripts: []
    },

    {
        id: 'youtube',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos de jQuery de YouTube",
        path: "/02-youtube/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/youtube/layout-header.html",
            "#layoutNavbar": "/src/components/layout/youtube/layout-navbar.html",
            "#layoutMain": "/src/pages/02-youtube.html",
            "#layoutFooter": "/src/components/layout/youtube/layout-footer.html",
        },
        headerTitle: "Mis Cursos de jQuery de YouTube",
        styles: "/src/styles/pages/02-youtube.css",
        scripts: []
    },

    {
        id: 'desWebCom',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos de jQuery de desarrolloweb.com",
        path: "/03-desarrolloweb.com/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/desarrolloweb.com/layout-header.html",
            "#layoutNavbar": "/src/components/layout/desarrolloweb.com/layout-navbar.html",
            "#layoutMain": "/src/pages/03-desarrolloweb.com.html",
            "#layoutFooter": "/src/components/layout/desarrolloweb.com/layout-footer.html",
        },
        headerTitle: "Mis Cursos de jQuery de desarrolloweb.com",
        styles: "/src/styles/pages/03-desarrolloweb.com.css",
        scripts: []
    },

    {
        id: 'escuelaIt',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Cursos de jQuery de Escuela IT",
        path: "/04-escuela.it/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/escuela.it/layout-header.html",
            "#layoutNavbar": "/src/components/layout/escuela.it/layout-navbar.html",
            "#layoutMain": "/src/pages/04-escuela.it.html",
            "#layoutFooter": "/src/components/layout/escuela.it/layout-footer.html",
        },
        headerTitle: "Mis Cursos de jQuery de Escuela IT",
        styles: "/src/styles/pages/04-escuela.it.css",
        scripts: []
    },

    {
        id: 'books',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Libros de jQuery",
        path: "/05-books/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/books/layout-header.html",
            "#layoutNavbar": "/src/components/layout/books/layout-navbar.html",
            "#layoutMain": "/src/pages/05-books-jquery.html",
            "#layoutFooter": "/src/components/layout/books/layout-footer.html",
        },

        headerTitle: "Mis Libros de jQuery",
        styles: "/src/styles/pages/05-books-jquery.css",
        scripts: []
    },

    {
        id: 'manuales',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "Mis Manuales de jQuery",
        path: "/06-manuales/projects-jquery/",
        components: {
            "#layoutHeader": "/src/components/layout/manuales/layout-header.html",
            "#layoutNavbar": "/src/components/layout/manuales/layout-navbar.html",
            "#layoutMain": "/src/pages/06-manuales-jquery.html",
            "#layoutFooter": "/src/components/layout/manuales/layout-footer.html",
        },
        headerTitle: "Mis Manuales de jQuery",
        styles: "/src/styles/pages/06-manuales-jquery.css",
        scripts: []
    },

    {
        id: '404',
        favicon: "/assets/favicon/jquery-favicon.ico",
        pageTitle: "404 | Not Found",
        path: "/404",
        components: {
            "#layoutHeader": "/src/components/layout/layout-header.html",
            "#layoutNavbar": "/src/components/layout/layout-navbar.html",
            "#layoutMain": "/src/pages/404-not-found.html",
            "#layoutFooter": "/src/components/layout/layout-footer.html",
        },
        headerTitle: "Página no encontrada - 404",
        styles: "/src/styles/pages/00-home.css",
        scripts: []
    }

];
