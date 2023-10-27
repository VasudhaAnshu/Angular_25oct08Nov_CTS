Angular
-----------------------------------------------------------------------------------------------------------

    Pre-Requisites
    1. HTML 5
    2. CSS 3
    3. Javascript (ES6)
            String,Math,Window,
            Arrow Functions
            Class and Object, Prototype
            Modules
            Closures, Call backs
            Promise and Asynchronous Programming.

    Angular is a typescript based SPA framework.

    SPA - Single Page Application.

    rest-api    is used by the SPA to mange data .

    Application/Web Server                                      Client

                    <---------------First Req-------------

        spa-bundle
                    -----RESP(index.html + *.js + *.css)--->
                                                                index.html gets loaded along with
                                                                spa JS code.

                                                                In the event of form submittion or clicking
                                                                links or any other event, the JS
                                                                generates the needed html part, dynamically
                                                                and replaces the content on the index.html.

        rest-api       <------REQ/RESP (.json/.xml)-------->    for data operations

    Framework?

        1. Increased Productivity
            a. Standarded Experimented Setup (ready-to-cook type)
            b. Support at the reach of our hand

    SPA - Frameworks

        AngularJS
        Angular
        ReactJS
        VueJs
        .....etc.,

    Angular

        Typescript      =       JavaScript + Data Types

        Angular is a typescript based spa framework.

        Angular 12

        babel is used to trnaspell typescript into javascript.

    NodeJS

        is a javascript runtime. It is used to execute java script in a standalone mode.
        Javascript has evolved to faciliatate server-side script as well. And such server side scripts
        or stand alone code snippets can be executed on NodeJS.


        1. Compose the code                 editor (VS Code)
        2. compile the code                 transpeller (babel)
        3. mange the dependencies           build tool (npm)
        4. build the app                    build tool (npm)
        5. test the app                     testing tool (jasmin & karma)
        ....etc.,

        npm - node package manager

    Lab SetUp

        VS Code
        NodeJs                  node --version      https://nodejs.org
                                npm version

        Angular CLI             ng version          npm i -g @angular/cli


    Angular Archetecture

        1. All the angular resources are typescript classes.
        2. These classea are marked with decorators to identify their purpose.
        3. These decorators are supplied with a JSON object called meta-data, 
            which has the configuaration of the resource.

        Modules
            @NgModule({
                declarations:[],
                exports:[],
                imports:[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule{}

        Components
            @Component({
                selector:"",
                styleUrls:[],
                templateUrl:"",
                providers:[]
            })
            class DashboardComponent {}

        Directives
            @Diorective({
                selector:"",
                providers:[]
            })
            class CheckStockTypeDirective {}

        Pipes
            @Pipe({
                name:"",
                providers:[]
            })
            class IntoWordsPipe {}

        Services
            @Injectable({
                providedIn:"root"
            })
            class StockRestApiService {}

    Angular CLI

        ng new proj-name

        cd proj-name

            ng serve                        compiling, building and running the app on a development server @4200 port
            ng serve --port 8989            compiling, building and running the app on a development server @8989 port
            ng serve --port 8989 -o         compiling, building and running the app on a development server @8989 port 
                                            and launch the app on a browser

            ng build                        compiling, building and pack the app into a 'dist' folder.
            ng test                         compiling, building and testing the app 

            ng generate module ModuleName
            ng generate component ComponentName
            ng generate service ServiceName
            ng generate pipe PipeName
            ng generate directive DirectiveName
            ng generate class ClassName
            ng generate interface InterfaceName

            we can use 'g' fro generate
            we can use 'c' for component

            we can use '--skip-tests' for skipping auto generated test cases.

    Angular Modules

        An angular module is a collection of components, services, directives, pipes and other modules.
        An angular module is a typescript class and is different from javascript/typescript modules.
        An angular module is a single unit of charge in the memory.

        Every angular project has one and only top-level module called ROOT MODULE
        and all other modules are called FEATURE MODULES

            @NgModule({
                declarations:[
                    //list of components,directives and pipes that belong to this modules
                ],
                exports:[
                    //list of components,directives and pipes that belong to this modules and are allowed to be
                    //used in other modules
                    //the ROOT MODULE meta-data will not have this property.
                ],
                imports:[
                    //list of other modules that are to be imported in here..
                ],
                providers:[
                    //list of services that are available for injection at this module
                ],
                bootstrap:[
                    //list of default / top-level components
                    //this section is avaialble only to the top-level module.
                ]
            })
            class SalesModule{}

    Angular Component

        Angular features HTML extandability, which means we can create our own html elements(tags) and our own
        html attributes in angular.

        A new html element created in angular is called a component.

        An angular component has three parts:
            1. the component class              provides all the fields (for hodling data) and methods (for handling events)

                dashboard.component.ts

                 @Component({
                    selector:"my-dashboard",
                    styleUrls:["dashboard.component.css"],
                    templateUrl:"dashboard.component.html"
                })
                class DashboardComponent {
                    title:string;

                    constructor(){
                        this.title="My Dashboard";
                    }
                }

            2. the component template           provides the html part to appear for this component on the screen

                dashboard.component.html

                    <header>
                        <h2>{{title}}</h2>
                    </header>

            3. the component style              provides the css part of the component

                dashboard.component.css

                    header{
                        border: 2px solid black;
                        text-=align:center;
                    }        

            <my-dashboard></my-dashboard>

        Data Binding

            is all about using the fields and method of the component class
            in the component template.

            Interpolation
                {{angular-expression}}

                    the angular expression is evalauted and the result is rendered on the screen.
                    if any variables involved in the expression change their value, the expression
                    is reevaluated and the value on the screen is update automatically.

            Two-Way Data Binding

                to support data pulling from form-controls.

                this technique allows to load a value into a form-control from a field
                and vice-versa.

                NgModel directive from FormsModule (@angular/forms) is used
                on all form-control to bind with a field in two-way.

                <input name=""  [(ngModel)]="field" />

            One-Way Data Binding
                Attribute Binding
                Event Binding
                Style Binding
                Css Class Binding