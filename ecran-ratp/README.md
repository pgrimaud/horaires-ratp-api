# Écran RATP

![Screenshot écran ratp](http://i.imgur.com/m9wJIzph.png)

## Informations

Inspiré du design de la RATP, cet écran permet de visualiser les prochains horaires d'une station d'une ligne vers une destination.

## Configuration

Editer les valeurs des lignes suivantes du fichier js/main.js

    Ligne 7 : var schedules_url = '';
    Ligne 8 : var traffic_url = '';

*Exemple :*  
    
    var schedules_url = 'https://api-ratp.pierre-grimaud.fr/v3/schedules/rers/b/arcueil+cachan/A';
    var traffic_url   = 'https://api-ratp.pierre-grimaud.fr/v3/traffic/rers/b';
    
Ce qui affichera les horaires des prochains trains du **RER B** en direction de **Charles De Gaulle - Mitry Claye** à la station **Arcueil-Cachan** ainsi que l'état du trafic sur la ligne.

## Données

Pour obtenir les informations d'une autre ligne de transport, d'une autre station ou d'une autre direction, consulter la documention de l'API  [horaires-ratp-api](http://github.com/pgrimaud/horaires-ratp-api).