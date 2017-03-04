# Horaires RATP API
    
## Introduction 

Cette API permet à l'utilisateur de récupérer les horaires RATP (RER, Metro, Tramway, Bus et Noctilien) en temps réel à un arrêt défini.

## REST

    Serveur API : https://api-ratp.pierre-grimaud.fr/v3

L'API est principalement RESTful. Les données sont exposées sous la forme d'URI qui représentent des ressources et peuvent être récupérées via des clients HTTP (comme les navigateurs web).

## Code source

Le code source de cette API est disponible ici : [ratp-api-rest](https://github.com/pgrimaud/ratp-api-rest).

Ce projet utilise la librairie [horaires-ratp-sdk](https://github.com/pgrimaud/horaires-ratp-sdk) qui exploite les données de l'API RATP officielle.

## Documentation

La liste des ressources est disponible ici : 

    https://api-ratp.pierre-grimaud.fr/v3/documentation