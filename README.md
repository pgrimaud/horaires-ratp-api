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
    
# Données

## Format
   
De base, les données renvoyées sont disponibles au format JSON. Mais il est possible de les récupérer au format XML en ajoutant à chaque requête le paramètre **_format**.

*Exemple JSON :*

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B?_format=json
    
    {
        "result": {
            "stations": [
                {
                    "slug": "porte+des+lilas",
                    "name": "Porte des Lilas"
                },
                {
                    "slug": "saint+fargeau",
                    "name": "Saint-Fargeau"
                },
                {
                    "slug": "pelleport",
                    "name": "Pelleport"
                },
                {
                    "slug": "gambetta",
                    "name": "Gambetta"
                }
            ]
        },
        "_metadata": {
            "call": "GET /stations/metros/3B",
            "date": "2017-03-04T02:02:32+01:00",
            "version": 3
        }
    }

*Exemple XML:*

    GET https://api-ratp.pierre-grimaud.fr/v3/stations/metros/3B?_format=xml
    
    <?xml version="1.0" encoding="UTF-8"?>
    <response>
      <result>
        <stations>
          <entry>
            <slug><![CDATA[porte+des+lilas]]></slug>
            <name><![CDATA[Porte des Lilas]]></name>
          </entry>
          <entry>
            <slug><![CDATA[saint+fargeau]]></slug>
            <name><![CDATA[Saint-Fargeau]]></name>
          </entry>
          <entry>
            <slug><![CDATA[pelleport]]></slug>
            <name><![CDATA[Pelleport]]></name>
          </entry>
          <entry>
            <slug><![CDATA[gambetta]]></slug>
            <name><![CDATA[Gambetta]]></name>
          </entry>
        </stations>
      </result>
      <_metadata>
        <call><![CDATA[GET /stations/metros/3B]]></call>
        <date><![CDATA[2017-03-04T02:04:33+01:00]]></date>
        <version>3</version>
      </_metadata>
    </response>