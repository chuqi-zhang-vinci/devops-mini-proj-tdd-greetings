# devops-mini-proj-tdd-greetings

groupe 27
Mona Naït mazi<br>
Karim Naviaux<br>
Chuqi Zhang<br>


## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
notre fichier YML définit un workflow d'intégration continue qui permet de déclencher automatiquement lors de l'ouverture ou de la modification d'un pull request et d'installer les dépendances de notre projet.
avec uses on lui passe le code source qu'il peut avoir l'accès
ensuite il affiche soit un message lorsqu'on le souhaite avec un echo
ou exécuter un code dans le script du package.json avec un npm run

```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
le 'on' permet de dire à notre workflow de s'executer dès qu'une condition dans le 'on' est remplie
la différence entre le 'on push' et le 'on request' est que dans le 'on push', meme si on travaille dans une branche autre que le main, 
le workflow va s'exécuter alors que le 'on pull request' il s'éxecutera que si on essaye de merge avec une autre branche.
On conseillerai le 'on pull request' à un groupe de développeur junior car cela leur permettra de garder une sécurité (par exemple un merge du code sans le vouloir) tout en travaillant efficacement avec notamment des testes automatisés et du ciblage des erreurs.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<votre réponse ici>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<votre réponse ici>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<votre réponse ici>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<votre réponse ici>
```