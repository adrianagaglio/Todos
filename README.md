# Todos Web App (Demo)

Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) versione 18.2.7.

## Eseguire l'applicazione con Docker (consigliato)

- Se non hai Docker installato, segui le istruzioni dal sito ufficiale: [Docker](https://docs.docker.com/desktop/)
- Esegui `docker build . -t todos-app` per creare l'immagine
- Esegui `docker -d --name todos-app-container -p 4200:80 todos-app:lates` per creare ed eseguire il container
- Naviga `http://localhost:4200/`

## Eseguire l'applicazione sulla tua macchina locale

- Esegui `npm i` per scaricare le dipendenze.
- Esegui `ng serve` per avviare il server di sviluppo.
- Naviga `http://localhost:4200/`.
- L'applicazione si aggiornarà automaticamente ad ogni modifica del file sorgente.


