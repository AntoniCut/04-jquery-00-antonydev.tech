/*
    --------------------------------------------------------
    ----------  /jquery.antonydev.tech/  -------------------
    ----------  /src/routes/  ------------------------------
    ----------  /routes-jquery-antonydev-tech.js  ----------
    --------------------------------------------------------
*/


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA` de Aprendiendo jQuery.
 *  @import { Route } from '../types/route-types.js'
 *  @type {Route[]}
 */

export const routesJQueryAntonydevTech = [

    {
        id: 'home',
        urlLayoutHeader: '/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/src/pages/00-home.html',
        urlLayoutFooter: '/src/components-layout/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'jQuery Desarrollos by AntonyDev',
        path: '/',
        headerTitle: 'Bienvenido a mis desarrollos con jQuery',
        styles: '/src/styles/pages/00-home.css',
        scripts: []
    },

    {
        id: 'udemy',
        urlLayoutHeader: '/src/components-layout/udemy/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/udemy/layout-navbar.html',
        urlLayoutMain: '/src/pages/01-udemy.html',
        urlLayoutFooter: '/src/components-layout/udemy/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Mis Cursos jQuery de Udemy',
        path: '/01-udemy/projects-jquery/',
        headerTitle: 'Mis cursos de jQuery de Udemy',
        styles: '/src/styles/pages/01-udemy.css',
        scripts: []
    },

    {
        id: 'youtube',
        urlLayoutHeader: '/src/components-layout/youtube/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/youtube/layout-navbar.html',
        urlLayoutMain: '/src/pages/02-youtube.html',
        urlLayoutFooter: '/src/components-layout/youtube/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Mis Cursos de jQuery de YouTube',
        path: '/02-youtube/projects-jquery/',
        headerTitle: 'Mis Cursos de jQuery de YouTube',
        styles: '/src/styles/pages/02-youtube.css',
        scripts: []
    },

    {
        id: 'desWebCom',
        urlLayoutHeader: '/src/components-layout/desarrolloweb.com/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/desarrolloweb.com/layout-navbar.html',
        urlLayoutMain: '/src/pages/03-desarrolloweb.com.html',
        urlLayoutFooter: '/src/components-layout/desarrolloweb.com/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Mis Cursos de jQuery de desarrolloweb.com',
        path: '/03-desarrolloweb.com/projects-jquery/',
        headerTitle: 'Mis Cursos de jQuery de desarrolloweb.com',
        styles: '/src/styles/pages/03-desarrolloweb.com.css',
        scripts: []
    },

    {
        id: 'escuelaIt',
        urlLayoutHeader: '/src/components-layout/escuela.it/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/escuela.it/layout-navbar.html',
        urlLayoutMain: '/src/pages/04-escuela.it.html',
        urlLayoutFooter: '/src/components-layout/escuela.it/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Mis Cursos de jQuery de Escuela IT',
        path: '/04-escuela.it/projects-jquery/',
        headerTitle: 'Mis Cursos de jQuery de Escuela IT',
        styles: '/src/styles/pages/04-escuela.it.css',
        scripts: []
    },

    {
        id: 'books',
        urlLayoutHeader: '/src/components-layout/books/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/books/layout-navbar.html',
        urlLayoutMain: '/src/pages/05-books-jquery.html',
        urlLayoutFooter: '/src/components-layout/books/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Mis Libros de jQuery',
        path: '/05-books/projects-jquery/',
        headerTitle: 'Mis Libros de jQuery',
        styles: '/src/styles/pages/05-books-jquery.css',
        scripts: []
    },

    {
        id: 'manuales',
        urlLayoutHeader: '/src/components-layout/manuales/layout-header.html',
        urlLayoutNavbar: '/src/components-layout/manuales/layout-navbar.html',
        urlLayoutMain: '/src/pages/06-manuales-jquery.html',
        urlLayoutFooter: '/src/components-layout/manuales/layout-footer.html',
        favicon: '/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Mis Manuales de jQuery',
        path: '/06-manuales/projects-jquery/',
        headerTitle: 'Mis Manuales de jQuery',
        styles: '/src/styles/pages/06-manuales-jquery.css',
        scripts: []
    }

];
