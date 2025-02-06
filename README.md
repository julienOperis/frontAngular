# Bien d�buter avec Angular

Angular est un framework puissant pour construire des applications web modernes. Ce guide vous aidera ? d�marrer et ? comprendre les bases d'Angular pour progresser efficacement.

## Pr�requis

Avant de commencer, assurez-vous de ma�triser les concepts de base suivants :
- **HTML** : pour structurer les composants.
- **CSS** : pour le style des composants.
- **JavaScript (et id�alement TypeScript)** : Angular est �crit en TypeScript, donc comprendre les bases de TypeScript est un plus.

## Installation des Outils N�cessaires

Pour utiliser Angular, vous aurez besoin de quelques outils :
1. **Node.js et npm** : Angular utilise `npm` pour g�rer les d�pendances.
   - [T�l�charger Node.js](https://nodejs.org/)
2. **Angular CLI** : La ligne de commande Angular est l'outil principal pour g�n�rer, d�velopper et tester les projets Angular.
   - Installez Angular CLI en ex�cutant :
     ```bash
     npm install -g @angular/cli
     ```

## Cr�er Votre Premier Projet Angular

Avec Angular CLI, cr�ez un projet de base :
```bash
ng new nom-du-projet
```
## Explorer la Structure d�un Projet Angular

Lorsqu'on cr�e un projet Angular avec Angular CLI, une structure de dossier est automatiquement g�n�r�e. Voici les dossiers principaux et leurs r�les :

- **src/app** : Contient les composants, services et autres fonctionnalit�s de l'application. C'est le dossier principal o? vous d�velopperez les fonctionnalit�s sp�cifiques de votre application.
- **app.module.ts** : Le module racine de l�application o? vous importez et d�clarez les composants, services et autres modules n�cessaires.
- **main.ts** : Fichier principal qui lance l'application Angular en utilisant `AppModule` comme module racine.
- **assets** : Dossier pour les fichiers statiques (images, fichiers JSON, etc.).
- **environments** : Dossier contenant les fichiers de configuration pour les environnements (par exemple, d�veloppement ou production).

Familiarisez-vous avec cette structure pour mieux organiser et d�velopper votre application.

---

## Comprendre les Composants (Components)

Les composants sont au c?ur d�Angular. Un composant est une classe TypeScript qui contr�le une partie de l�interface utilisateur (UI). Chaque composant est constitu� de trois �l�ments principaux :

1. **Fichier TypeScript (.ts)** : La logique du composant (fichier `.ts`) g?re les donn�es, les �v�nements, et les m�thodes.
2. **Fichier HTML (.html)** : Le template qui d�finit la structure et le contenu de l�interface utilisateur.
3. **Fichier CSS/SCSS (.css/.scss)** : Les styles associ�s au composant pour contr�ler son apparence.

Pour cr�er un composant avec Angular CLI :
```bash
ng generate component nom-du-composant
```

## Utiliser l'Op�rateur de D�composition (`...`) en TypeScript

L'op�rateur de d�composition (`...`) en TypeScript permet de **fusionner des objets** ou de **copier leurs propri�t�s** dans un nouvel objet. Cette syntaxe est simple et efficace pour concat�ner des objets ou cr�er des copies avec des modifications sp�cifiques.

### Exemple Basique : Fusion de Deux Objets

Supposons que vous avez deux objets avec certaines propri�t�s en commun et que vous voulez les fusionner dans un nouvel objet :

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }
```

```typescript
@Injectable({ // Pour dire que c'est un service
  providedIn: 'root' // Pour dire qu'on partage ce m�me composant pour les autres composants
})
```


Comprendre les Composants (Components) , Liaison de Donn�es (Data Binding), Utiliser les Directives , Travailler avec les Services et l�Injection de D�pendances 
# GetStartedAngular
GetStartedAngular
https://ngrx.io/
https://rxjs.dev/api/operators/
operator typescript


* [https://primeng.org](The Next-Gen UI Suite for Angular)
* [A progressive Node.js framework for building efficient, reliable and scalable server-side applications.](https://nestjs.com/)
* [Rapidly build modern websites without ever leaving your HTML](https://tailwindcss.com/)

**Docker**
* [You can install and run Coder using the official Docker images published on GitHub Container Registry.](https://coder.com/docs/install/docker)

**An import map is a JSON object that allows developers to control how the browser resolves module specifiers when importing**
* [importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)

**ionicframework est un framework qui vient au dessus d''angular et qui permet d''avoir le m?me code pour web, ios et android**
* [Ionic avec Angular Pour faire une application mobile en m?me temps que du web](https://ionicframework.com/)
* [Application angular multi-langue avec ngx-translate](https://ngx-translate.org/)
* [Interactive diagrams of Rx Observables](https://rxmarbles.com/)
* [RxJS Operators](https://rxjs.dev/guide/operators)

**NgRx**

* [NgRx](https://ngrx.io/)
NgRx est une biblioth?que de gestion d'�tat pour les applications Angular, bas�e sur le mod?le Redux. Elle permet de centraliser, g�rer et synchroniser l'�tat (les donn�es) de l'application de mani?re pr�dictible et efficace. Voici une explication d�taill�e?:

* Input Parent vers l''enfant Oupout invers pour des composants

# Guards - Protection des routes 

***Un Guard sur Angular est une fonctionnalit� qui vous permet de contr�ler l'acc?s ? des routes sp�cifiques dans votre application. Vous pouvez utiliser des guards pour ex�cuter certaines v�rifications ou actions avant de permettre l'acc?s ? une route, par exemple pour v�rifier si l'utilisateur est authentifi� ou a les droits d'acc?s appropri�s.**

1. Cr�ez un guard, par exemple dans un fichier auth.guard.ts :

```TS
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const AuthGuard = () => {
    return true
}
```

Utilisez ce guard dans votre route (dans le fichier app.routes.ts par exemple) :

```TS
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard], // Utilisation du guard
  }
];
```
Exemple avec l'authentification
Voici un exemple de service d'authentification que vous pouvez utiliser avec le guard ci-dessus :


Qu'est qu'un guard sur Angular ? [?](#qu-est-qu-un-guard-sur-angular)
=====================================================================

Un Guard sur Angular est une fonctionnalit� qui vous permet de contr�ler l'acc?s ? des routes sp�cifiques dans votre application. Vous pouvez utiliser des guards pour ex�cuter certaines v�rifications ou actions avant de permettre l'acc?s ? une route, par exemple pour v�rifier si l'utilisateur est authentifi� ou a les droits d'acc?s appropri�s.

Voici un exemple tr?s simple

1.  Cr�ez un guard, par exemple dans un fichier `auth.guard.ts` :

```TS
    import { inject } from "@angular/core";
    import { Router } from "@angular/router";
    
    export const AuthGuard = () => {
        return true
    }
```

1.  Utilisez ce guard dans votre route (dans le fichier `app.routes.ts` par exemple) :

```TS

    import { AuthGuard } from './auth.guard';
    import { AdminComponent } from './admin.component';
    
    const routes: Routes = [
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard], // Utilisation du guard
      }
    ];
```

Exemple avec l'authentification [?](#exemple-avec-l-authentification)
---------------------------------------------------------------------

Voici un exemple de service d'authentification que vous pouvez utiliser avec le guard ci-dessus :

```TS
    import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })
    export class AuthService {
      private isAuthenticated = false;
    
      login() {
        this.isAuthenticated = true;
      }
    
      logout() {
        this.isAuthenticated = false;
      }
    
      isAuthenticated(): boolean {
        return this.isAuthenticated;
      }
    }
```

Ce service contient une m�thode `login` qui d�finit la variable `isAuthenticated` sur `true`, une m�thode `logout` qui d�finit la variable `isAuthenticated` sur `false`, et une m�thode `isAuthenticated` qui retourne la valeur de la variable `isAuthenticated`. Vous pouvez utiliser ces m�thodes pour g�rer l'authentification de l'utilisateur et pour contr�ler l'acc?s ? certaines routes avec le guard `AuthGuard`.

> Notez que cet exemple est tr?s simplifi� et ne prend pas en compte la persistance de l'�tat d'authentification entre les sessions ou la v�rification des donn�es d'identification de l'utilisateur. Il est recommand� de mettre en place une gestion de l'authentification plus compl?te et s�curis�e dans votre application.

### Le guard [?](#le-guard)

Voici un exemple de guard qui v�rifie si l'utilisateur est connect� ? l'application avant de lui permettre l'acc?s ? une route :

```TS
    import { inject } from "@angular/core";
    import { Router } from "@angular/router";
    import { AuthService } from "./auth.service";
    
    export const AuthGuard = () => {
        const auth = inject(AuthService);
        const router = inject(Router);
    
        if(!auth.isAuthenticated()) {
            router.navigateByUrl('/login')
            return false
        }
        return true
    }
```

Dans ce cas, le code cr�e un "AuthGuard" qui v�rifie si un utilisateur est authentifi� avant de lui permettre d'acc�der ? une route prot�g�e.

1.  On cr�e la fonction `AuthGuard` qui sera utilis�e comme guard. Dans cette fonction, on injecte les d�pendances pour `AuthService` et `Router`.
    
2.  On v�rifie si l'utilisateur est authentifi� en utilisant la m�thode `isAuthenticated()` de l'instance `auth`. Cette m�thode doit ?tre impl�ment�e dans le service d'authentification (`AuthService`) pour d�terminer si un utilisateur est authentifi� ou non.
    
3.  Si l'utilisateur n'est pas authentifi� (c'est-?-dire si `auth.isAuthenticated()` renvoie `false`), on redirige l'utilisateur vers la page de connexion en utilisant la m�thode `navigateByUrl('/login')` de l'instance `router`. Ensuite, on retourne `false` pour indiquer que l'acc?s ? la route prot�g�e n'est pas autoris�.
    
4.  Si l'utilisateur est authentifi�, on retourne simplement `true`, ce qui permet l'acc?s ? la route prot�g�e.
    

On l'applique au routeur:

```TS
    // ... code pr�c�dent
    
    const routes: Routes = [
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard], // Utilisation du guard
      }
    ];
```

Vous pouvez �galement utiliser ce guard pour prot�ger plusieurs routes en utilisant un tableau de routes imbriqu�es, comme ceci :

```TS

    // ... code pr�c�dent
    
    const routes: Routes = [
      {
        path: 'admin',
        canActivate: [AuthGuard], // Utilisation du guard
        children: [
          {
            path: '',
            component: AdminComponent
          },
          {
            path: 'users',
            component: UsersComponent
          }
        ]
      }
    ];
```
Dans cet exemple, le guard `AuthGuard` sera utilis� pour contr�ler l'acc?s ? toutes les routes enfants de `/admin`, y compris `/admin` et `/admin/users`. Si l'utilisateur n'est pas connect�, il ne pourra pas acc�der ? aucune de ces routes.




* Resolvers - Permet de faire des choses avant l''initialisation des pages, (Information du profil utilisateurs au chargement de la page utilisateur )
* Interceptors - Intecepter les requ?te http, pour la gestion d''erreur 
* Store - Service Angular ou (Librairies ngRx plus tard) Moyen de partager les donn�es sans qu''il soit parents

# Exemple d'interface g�n�rique pour gestion erreur API (back) :

```TS
interface ApiErrorResponse { 
    message: string, // Message explicatif global pour l'utilisateur 
    details: Details[], // Liste d'erreurs compl?te
    metadonnees: { 
      timestamp: string, // Moment de l'erreur au format ISO 
      endpoint: string, // URL appel�e (doit-on mettre le nom de domaine?) 
      correlationId: string, // Identifiant de la requ?te pour pouvoir la suivre dans tous les services impact�s (UUID) 
    } 
  } interface Details { // Champs pr�sent pour tous les cas possibles code: string, // Un code identifiant l'erreur de fa�on unique pour simplifier le d�bogage. Ex : FORMAT_INVALIDE, OBLIGATOIRE message: string, // Message explicatif de cette erreur particuli?re pour l'utilisateur parametres:   Record<string, any>, // Morceaux dynamiques du message d'erreur si besoin de le reformuler pour diff�rents persona localisation: string[], // Chemin dans la requ?te vers la partie probl�matique, permet de pointer pr�cis�ment et programmatiquement. Ex : [ "body", "champs", "DX1NZ5" ] ou [ "headers", "Accept" ] 
  } 
```


# Observable exemple d'utilisation

```TS
 public inscription(): void {
    //Observable<User>

    this.inscriptionService
      .inscription$(this.inscriptionForm.value)
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          this.alertService.setAlert('Une erreur est survenue');
          return EMPTY; //Couper le flux,
        }),
        tap((reponse) => {
          this.serviceSuccess.setDataSuccess(reponse);
          this.router.navigate(['/connexion']);
        })
      )
      .subscribe();
    //status: 409, error statusCode	409
    //status: 201, Create
  }
```

### **D�roulement du Code**

1. **R�cup�ration des donn�es du formulaire** :
   - `this.inscriptionForm.value` : extrait les donn�es saisies par l'utilisateur dans le formulaire.

2. **Appel au service `inscription$`** :
   - `this.inscriptionService.inscription$(...)` : envoie les donn�es du formulaire au backend via un service. Ce service renvoie un **Observable** contenant la r�ponse du serveur.

3. **Cha�nage des op�rateurs RxJS** :
   - `pipe(...)` : permet d'appliquer des transformations ou de g�rer les erreurs dans le flux d'observable.

   #### Op�rateurs utilis�s :
   - **`take(1)`** :
     - Ne prend en compte qu'une seule r�ponse du serveur (unsubscribe automatiquement apr?s la premi?re �mission).
   - **`catchError((error) => {...})`** :
     - En cas d'erreur (ex. : r�ponse HTTP avec un code 409 ou 500), l'erreur est captur�e.
     - La m�thode affiche un message d'erreur avec `this.alertService.setAlert('Une erreur est survenue')`.
     - `return EMPTY` : stoppe le flux d'observable sans �mettre d'autres �v�nements.
   - **`tap((reponse) => {...})`** :
     - Permet de g�rer une r�ponse r�ussie du serveur (ex. : code HTTP 201).
     - Actions effectu�es :
       - Appel de `this.serviceSuccess.setDataSuccess(reponse)` pour stocker les donn�es de succ?s.
       - Navigation vers la route `/connexion` avec `this.router.navigate(['/connexion'])`.

4. **Abonnement avec `subscribe()`** :
   - Finalise l'ex�cution de l'observable en d�clenchant le flux d�fini dans les �tapes pr�c�dentes.

# Structure d'un projet basique Angular

src
??? app
?   ??? components **Composants Angular**
?   ?   ??? alert
?   ?   ??? dialoggeneric
?   ?   ??? header
?   ??? core ** Angular**
?   ?   ??? models
?   ?   ??? services **Services Angular sont des classes d�di�es ? la logique m�tier et au partage des donn�es**
?   ?   ??? validators **validateur qui v�rifie la validit� des donn�es saisies**
?   ??? pages


## Service

# R�sum� des Services Angular

## Qu'est-ce qu'un Service Angular ?

Un **service** Angular est une classe qui fournit des fonctionnalit�s ou des comportements r�utilisables dans l'application. Les services permettent de centraliser la logique m�tier et de partager des donn�es ou des fonctionnalit�s entre les composants.

## Pourquoi utiliser des services ?

Les services permettent de :
- Centraliser la logique de l'application.
- Partager des donn�es entre diff�rents composants.
- Manipuler des donn�es de mani?re asynchrone (par exemple, via HTTP).
- Faciliter les tests unitaires en isolant la logique dans des classes d�di�es.

## Cr�ation d'un Service

Un service Angular est g�n�ralement cr�� avec la commande CLI suivante :
```bash
ng generate service service-name
```

```TS
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Rend le service disponible dans toute l'application
})
export class DataService {
  constructor() {}

  getData() {
    return 'Some data';
  }
}
```

## Injection de D�pendance

Les services dans Angular utilisent l'injection de d�pendance (DI) pour ?tre fournis aux composants ou autres services. Cela permet ? Angular de g�rer la cr�ation et la gestion de l'instance du service.


Exemple d'Injection dans un Composant

```TS
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-my-component',
  template: '<div>{{ data }}</div>',
})
export class MyComponent implements OnInit {
  data: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
```


## Validators

### Voici quelques exemples de validateurs int�gr�s :

| **Validateur**             | **Description**                                        |
|----------------------------|-------------------------------------------------------|
| `Validators.required`      | V�rifie que le champ n'est pas vide.                  |
| `Validators.min(length)`   | V�rifie que la valeur est sup�rieure ou �gale ? un minimum. |
| `Validators.max(length)`   | V�rifie que la valeur est inf�rieure ou �gale ? un maximum. |
| `Validators.minLength(length)` | V�rifie que la longueur minimale est respect�e.         |
| `Validators.maxLength(length)` | V�rifie que la longueur maximale est respect�e.         |
| `Validators.pattern(regex)`    | V�rifie que la valeur correspond ? une expression r�guli?re. |

#### Exemple d'utilisation :
```typescript
import { FormBuilder, Validators } from '@angular/forms';

export class ExampleComponent {
  myForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.min(18), Validators.max(99)]]
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.myForm.valid) {
      console.log('Formulaire valide?:', this.myForm.value);
    } else {
      console.log('Formulaire invalide?!');
    }
  }
}
```

### **R�sum�**

Un validateur Angular est une m�thode cl� pour garantir la validit� des donn�es saisies dans les formulaires. Vous pouvez :

- **Utiliser des validateurs int�gr�s** pour des r?gles standard comme `Validators.required`, `Validators.minLength`, etc.
- **Cr�er vos propres validateurs personnalis�s** pour des cas sp�cifiques, comme v�rifier un domaine d'e-mail ou des r?gles m�tier particuli?res.
- **�tendre les validateurs avec des op�rations asynchrones** pour des v�rifications qui n�cessitent un appel r�seau (par exemple, v�rifier si un nom d'utilisateur existe d�j? dans une base de donn�es).

Cela am�liore :
- **La robustesse** des donn�es saisies.
- **La s�curit�** des informations collect�es.
- **La maintenabilit�** et la testabilit� des applications Angular.

Les validateurs permettent de garantir que les donn�es entrantes respectent les exigences avant d�?tre trait�es ou envoy�es ? un serveur.


# Tuto
## ANGULAR

[Get started Javascript](https://www.w3schools.com/js/)

[Get started TypeScript](https://www.typescriptlang.org/fr/docs/handbook/typescript-in-5-minutes.html)

[Get started with The Angular CLI](https://angular.dev/tools/cli)

[Get started with rxjs](https://rxjs.dev/guide/overview)

[Stocker un �tat dans un service avec BehaviorSubject ](https://angular.fr/services/behavior-subject)

[Comment afficher une bo�te de dialogue modale dans Angular](https://hackernoon.com/lang/fr/comment-afficher-une-bo%C3%AEte-de-dialogue-modale-en-angulaire)


**Installation**
```
npm install @developer-partners/ngx-modal-dialog
```

# Les Op�rateurs en TypeScript

TypeScript, �tant une surcouche de JavaScript, prend en charge les m?mes op�rateurs que JavaScript. Voici une liste d�taill�e des diff�rents types d'op�rateurs avec des exemples et explications.

---

## 1. **Op�rateurs Arithm�tiques**
Utilis�s pour effectuer des calculs math�matiques.

| Op�rateur | Description         | Exemple          | R�sultat  |
|-----------|---------------------|------------------|-----------|
| `+`       | Addition            | `5 + 2`          | `7`       |
| `-`       | Soustraction        | `5 - 2`          | `3`       |
| `*`       | Multiplication      | `5 * 2`          | `10`      |
| `/`       | Division            | `5 / 2`          | `2.5`     |
| `%`       | Modulo (reste)      | `5 % 2`          | `1`       |
| `++`      | Incr�mentation      | `let a = 5; a++` | `6`       |
| `--`      | D�cr�mentation      | `let a = 5; a--` | `4`       |

---

## 2. **Op�rateurs de Comparaison**
Utilis�s pour comparer deux valeurs et retourner un bool�en (`true` ou `false`).

| Op�rateur | Description                        | Exemple          | R�sultat |
|-----------|------------------------------------|------------------|----------|
| `==`      | �galit� de valeur                 | `5 == '5'`       | `true`   |
| `===`     | �galit� stricte (valeur + type)   | `5 === '5'`      | `false`  |
| `!=`      | Diff�rence de valeur             | `5 != '5'`       | `false`  |
| `!==`     | Diff�rence stricte               | `5 !== '5'`      | `true`   |
| `<`       | Inf�rieur ?                      | `5 < 10`         | `true`   |
| `>`       | Sup�rieur ?                      | `5 > 10`         | `false`  |
| `<=`      | Inf�rieur ou �gal                | `5 <= 5`         | `true`   |
| `>=`      | Sup�rieur ou �gal                | `5 >= 6`         | `false`  |

---

## 3. **Op�rateurs Logiques**
Utilis�s pour combiner plusieurs conditions.

| Op�rateur | Description                     | Exemple                  | R�sultat |
|-----------|---------------------------------|--------------------------|----------|
| `&&`      | ET logique                     | `true && false`          | `false`  |
| `||`      | OU logique                     | `true || false`          | `true`   |
| `!`       | NON logique (n�gation)         | `!true`                  | `false`  |

---

## 4. **Op�rateurs Bit-?-Bit**
Op?rent directement sur les repr�sentations binaires des nombres.

| Op�rateur | Description                     | Exemple        | R�sultat |
|-----------|---------------------------------|----------------|----------|
| `&`       | ET bit-?-bit                   | `5 & 1`        | `1`      |
| `|`       | OU bit-?-bit                  | `5 | 1`        | `5`      |
| `^`       | OU exclusif (XOR)             | `5 ^ 1`        | `4`      |
| `~`       | NON bit-?-bit                 | `~5`           | `-6`     |
| `<<`      | D�calage ? gauche             | `5 << 1`       | `10`     |
| `>>`      | D�calage ? droite             | `5 >> 1`       | `2`      |
| `>>>`     | D�calage ? droite sans signe  | `5 >>> 1`      | `2`      |

---

## 5. **Op�rateurs d'Assignation**
Utilis�s pour attribuer une valeur ? une variable.

| Op�rateur | Description                  | Exemple      | R�sultat |
|-----------|------------------------------|--------------|----------|
| `=`       | Assignation simple           | `a = 5`      | `a = 5`  |
| `+=`      | Addition et assignation      | `a += 2`     | `a = 7`  |
| `-=`      | Soustraction et assignation  | `a -= 2`     | `a = 3`  |
| `*=`      | Multiplication et assignation| `a *= 2`     | `a = 10` |
| `/=`      | Division et assignation      | `a /= 2`     | `a = 2.5`|
| `%=`      | Modulo et assignation        | `a %= 2`     | `a = 1`  |

---

## 6. **Op�rateur Ternaire**
Simplifie les expressions conditionnelles.

**Syntaxe :**
```typescript
condition ? valeurSiVrai : valeurSiFaux;
```

**Exemple :**
```typescript
const age = 18;
const isAdult = age >= 18 ? 'Oui' : 'Non'; // R�sultat : 'Oui'
```

---

## 7. **Op�rateurs de Cha�ne**

| Op�rateur | Description             | Exemple             | R�sultat         |
|-----------|-------------------------|---------------------|------------------|
| `+`       | Concat�nation de cha�ne| `'Hello' + 'World'` | `'HelloWorld'`   |
| `+=`      | Concat�nation et assignation | `a += 'World'` | `a = 'HelloWorld'` |

---

## 8. **Op�rateurs de Type (TypeScript)**
Sp�cifiques ? TypeScript pour v�rifier ou convertir des types.

| Op�rateur | Description                             | Exemple                       | R�sultat          |
|-----------|-----------------------------------------|-------------------------------|-------------------|
| `typeof`  | Renvoie le type d'une variable         | `typeof 42`                  | `'number'`        |
| `instanceof` | V�rifie si un objet appartient ? une classe | `obj instanceof MyClass` | `true / false`    |
| `as`      | Conversion de type explicite           | `value as string`            | `string`          |
| `<type>`  | Conversion de type (alternative ? `as`) | `<string>value`              | `string`          |

---

## 9. **Op�rateurs Optionnels (TypeScript)**

### a. **Op�rateur de Cha�nage Optionnel (`?.`)**
Permet d'acc�der ? une propri�t� sans v�rifier explicitement si l'objet est d�fini.

**Exemple :**
```typescript
const user = { name: 'John', address: null };
console.log(user?.address?.city); // R�sultat : undefined
```

### b. **Op�rateur de Coalescence Nulle (`??`)**
Retourne la valeur de droite uniquement si la valeur de gauche est `null` ou `undefined`.

**Exemple :**
```typescript
const name = null;
const defaultName = name ?? 'Anonymous'; // R�sultat : 'Anonymous'
```

---

## 10. **Op�rateurs Avanc�s (ES6+)**

| Op�rateur          | Description                               | Exemple                        | R�sultat           |
|--------------------|-------------------------------------------|--------------------------------|--------------------|
| `...` (spread)     | �tale les �l�ments d'un tableau ou objet  | `[...array1, ...array2]`      | Nouveau tableau    |
| `...` (rest)       | Rassemble les arguments restants          | `function(...args) {}`        | Tableau d'arguments|

---

Ce guide couvre les op�rateurs les plus couramment utilis�s en TypeScript. Pour aller plus loin, vous pouvez explorer leur comportement sp�cifique dans le contexte de types complexes et de fonctionnalit�s avanc�es de TypeScript.


# T�che en cours
## AFAIRE

* Remonte les erreurs du back au Front dans l'alert
* Faire la session avec le LocalStorage
