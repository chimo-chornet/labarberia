'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">My app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AcordeonComponent.html" data-type="entity-link" >AcordeonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/App.html" data-type="entity-link" >App</a>
                            </li>
                            <li class="link">
                                <a href="components/AreaAdminComponent.html" data-type="entity-link" >AreaAdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AreaUsuarioComponent.html" data-type="entity-link" >AreaUsuarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CabeceraComponent.html" data-type="entity-link" >CabeceraComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalAdmin.html" data-type="entity-link" >CalAdmin</a>
                            </li>
                            <li class="link">
                                <a href="components/CalComponent.html" data-type="entity-link" >CalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalUsuarioComponent.html" data-type="entity-link" >CalUsuarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CarruselComponent.html" data-type="entity-link" >CarruselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CitaAdmin.html" data-type="entity-link" >CitaAdmin</a>
                            </li>
                            <li class="link">
                                <a href="components/CitaDia.html" data-type="entity-link" >CitaDia</a>
                            </li>
                            <li class="link">
                                <a href="components/CitasAdminComponent.html" data-type="entity-link" >CitasAdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CitasComponent.html" data-type="entity-link" >CitasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CitaUsuarioComponent.html" data-type="entity-link" >CitaUsuarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Emergente.html" data-type="entity-link" >Emergente</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="components/ModpassComponent.html" data-type="entity-link" >ModpassComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Pruebas.html" data-type="entity-link" >Pruebas</a>
                            </li>
                            <li class="link">
                                <a href="components/UsuarioComponent.html" data-type="entity-link" >UsuarioComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Peticiones.html" data-type="entity-link" >Peticiones</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeticionesService.html" data-type="entity-link" >PeticionesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScriptLoaderService.html" data-type="entity-link" >ScriptLoaderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});