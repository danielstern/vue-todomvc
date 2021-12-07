/**
 * Vue TODOMVC Application
 * Author : Daniel Stern
 * Free to use and modify without attribution.
 **/

/**
* Les todos sont le "modèle" de cette application. Dans un exemple réel, ils seraient probablement chargés de manière asynchrone, bien qu'ils puissent également être injectés via le rendu côté serveur.
* Changer ces todos changera leur apparence dans l'application.
 */
let todos = [{
    name:"Debug UI",
    complete: false,
},{
    name:"Refactor build step",
    complete: true
},{
    name: "Upgrade Component",
    complete: false
}];

/**
 * Toutes les applications Vue sont initialisées avec un appel de méthode `new Vue()`. L'objet qui est passé à l'appel de méthode est la configuration de l'ensemble de notre application.
 */
new Vue({
    /**
     *L'option "el" indique dans quel élément HTML l'application doit initialement charger. Si vous regardez `index.html`, vous remarquerez une balise div avec l'ID #app. Ce processus de chargement initial est également connu sous le nom de "bootstrapping."
     */
    el:`#app`,

    /**
     * Le modèle de l'application définit la structure de base de son HTML.
      * Il existe de nombreuses façons de définir un modèle dans Vue, mais cet exemple utilise des modèles HTML. Si vous regardez le fichier d'index, vous verrez une balise `x-template` avec cet ID. Changer le contenu de cette balise changera l'apparence de l'application.
      * D'autres façons de définir un modèle incluent l'utilisation de JSX ou simplement d'une chaîne JavaScript.
     */
    template:"#app-template",

    /**
     *  La méthode de données est appelée par le composant et les valeurs renvoyées deviennent le modèle de données pour ce composant.
      * Les todos passés ici sont définis en haut de ce fichier.
     */
    data:()=>(
        {
            todos,
            text:``,
            showComplete:true,
        }
    ),

    /**
        * Les propriétés calculées sont comme des données, sauf qu'au lieu d'une valeur spécifique, elles sont une fonction. La fonction est appelée, puis le composant peut utiliser la valeur renvoyée, comme une propriété normale.
        * Les propriétés calculées peuvent prendre en compte divers facteurs - par exemple, la propriété calculée filteredTodos est différente selon le statut de la propriété showComplete de l'application.
     */
    computed:{

        /**
         * Renvoie une liste de tâches avec celles terminées supprimées, lorsque l'application est ainsi configurée.
         */
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },

        /**
         * Un booléen indiquant si le bouton de soumission doit être désactivé, en fonction du contenu de la zone de saisie.
          * Cette méthode pourrait être mise à niveau pour prendre en compte d'autres choses - comme si l'entrée de texte est valide en fonction de la sortie d'un validateur.
         */
        submitIsDisabled(){
            return this.text == "";
        }
    },

    /**
     *  La propriété methodes d'une application Vue contient des fonctions, qui sont généralement appelées à partir du modèle, bien qu'elles puissent également être appelées à partir d'ailleurs dans le script.
      * Si vous regardez dans le modèle, vous trouverez un formulaire qui appelle cette méthode "addTodo()".
      * Les méthodes sont la manière préférée d'effectuer une action qui modifie le modèle de données.
     */
    methods:{
        /**
         * addTodo() prend tout ce qui se trouve dans la zone de saisie de texte et en fait un élément de liste. Il n'est pas nécessaire d'appeler une méthode `render()`, car Vue peut déterminer par elle-même ce qu'il faut redessiner.
         */
        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });

            /**
             * Les composants Vue peuvent accéder à leurs propres propriétés via le mot-clé spécial "this".
             */
            this.text = ``;
        },
    }
});