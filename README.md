# Team Todos Web App (Demo)

Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) versione 18.2.7.

## Descrizione 

Basic team todo list demo web app. 

Permette:
- operazioni CRUD
- inserimento nuovi utenti per assegnazione dei task

Tecnologie utilizzate:
- Angular
- Bootstrap (personalizzato con Sass) + CSS

Dati:
- API di test generate con mockapi.io

## Eseguire l'applicazione con Docker (consigliato)

- Se non hai Docker installato, segui le istruzioni dal sito ufficiale: [Docker](https://docs.docker.com/desktop/)
- Esegui `docker build . -t todos-app` per creare l'immagine dell'applicazione con tutte le dipendenze necessarie al suo funzionamento
- Esegui `docker -d --name todos-app-container -p 4200:80 todos-app:latest` per creare ed eseguire il container per avviare l'applicazione
- Naviga `http://localhost:4200/`

## Eseguire l'applicazione sulla tua macchina locale

- Esegui `npm i` per scaricare le dipendenze.
- Esegui `ng serve` per avviare il server di sviluppo.
- Naviga `http://localhost:4200/`.
- L'applicazione si aggiornarà automaticamente ad ogni modifica del file sorgente.


