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

                    <element [attribute]="field"> </element>

                Event Binding

                    <element (eventDirective)="method()"> </element>

                    html-event      eventDirective
                     onSubmit           ngSubmit
                     onClick            click
                     onBlur             blur
                     onfocus            focus
                     onChange           change
                                        ....etc.,

                Style Binding

                    <element [style.cssProperty]="field"> </element>

                Css Class Binding

                    <element [class.className]="booleanField"> </element>

    Integrating Bootstrap With Angular

        1. install the library

            npm i bootstrap --save

        2. refer to the library

            angular.json
                | - styles          include the node_modules/bootstrap/dist/css/bootstrap.min.css
                | - scripts         include the node_modules/bootstrap/dist/js/bootstrap.min.js

    Angular  Directives

        An angular defined attribute is a Attribute Directive

        inbuilt - directives

            Structural Directives

                *ngIf
                *ngFor
                ngSwitch *ngCase *ngDefault

            Event Directives
            Misc Directives

        custom directives

            @Diorective({
                selector:"",
                providers:[]
            })
            class CheckStockTypeDirective {}

    Angular Pipes

        a pipe is a tranformet that transforms a given value into soemthing elese before it is rendered.

        {{value|pipeName:"pipe-inputs"}}

        inbuilt pipes

            lowercase
            uppercase
            titlecase
            number
            currency
            date
            async
            json

        custom pipes

            @Pipe({
                name:"",
                providers:[]
            })
            class IntoWordsPipe implements Transformer {
                transform(value):any {
                    //....
                }
            }

    Angular Model

        the modles are represented by typescript interfaces.

        the typescript interfaces can have fields.

        any javascript/typescript object that has the fields declared in the interface is
        supposed to an object of that interface type.

    Angular Service

        services are used to hold bussiness logic likle, any compuations or any rest-api communication ..etc.,

        Angular Services are injectables meaning, that an object of the service is supplied into any site where
        it is requested.

            @Injectable({
                providedIn:"root"
            })
            export class EmployeeService {

            }

            constructor(empService:EmployeeService){
                //the empService is injected...
            }

    Inter Componnet Communication - Parent/Child Component Communication

        html
        |-body
            |-app-root
                |-app-dept
                    |-app-dept-form
                    |-app-dept-details

        1. a parent can pass data to a child component through attribute-binding
            the child component must have an attribute
            a field of the child component if marked as @Input() it becomes an attribute.

        2. a child can emit an event and parent can handle the event thorugh EventEmitter
                the event emitter are exposed using @Output() decorator.

    Angular Forms

        Template Driven Forms

            1. the form is defined and structured in html - component template.
            2. these forms are hard to test as everything lies as a mark-up.
            3. Thee forms have controls bound to the field of the component. And hence they have a single source of data.


            FormsModule from '@angular/forms'

                ngForm              valid,invalid
                ngModel             valid,invalid,prestine,dirty,touched,untouched

                all html 5 form validation attributes work with this api.

        Model Driven Forms / Reactive forms

            1. The form is defined in the component class (programatically)
            2. The form is structured in html - componenet template.
            3. These forms are easy to test , as they are defiend in typescript.
            4. These forms have the data managed in the form controls and hence need no additional field to bind.
            5. These forms can handle complex senarios like nested forms ..etc.,

            ReactiveFormsModule from '@angular/forms'

                FormGroup           valid,invalid
                FormControl         valid,invalid,prestine,dirty,touched,untouched

                formControlName

                Validators from Validators class 

    Angular Routing

        allows us to map a path to each component , so that as and when that path comes up in the url, the mapped
        component appears on the screen.

        RoutingModule       from  '@angular/routing'

            Route               {
                                    path:'abcd',
                                    pathMatch:'startsWith|full',
                                    component:'DashboardComponent',
                                    children:[],
                                    redirectTo:''
                                }

            Routes              Route[]

            forRoot()           is a method of RoutingModule used to register the routes created.

            Router              is a service used for navigating programatically.
                                navigate(['pathSegment1','pathSegment2','']),
                                navigateByUrl('completeUrl')

                                        http://localhost:9999/sales/offers/expiredCupons

                                        navigate(['/sales','/offers','/expiredCupons']),
                                        navigateByUrl(/sales/offers/expiredCupons)

            ActivtedRoute       is a service used to extract queryParameters or pathParameters or url detials of
                                the current url.

            routerLink          is a directive to be used on 'a' tag instead of its 'href' attribute.

            routerActiveLink    is a directive of 'a' tag that accepts a css-class to be applied when the 'a' tag is active.

            router-outlet       is a component, that reserves place for a routed-component in the top-level component template.

            