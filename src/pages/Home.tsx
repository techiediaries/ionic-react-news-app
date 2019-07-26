import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';

import React from 'react';
import axios from 'axios';

import './Home.css';

const API_KEY = "e40d07f00b094602953cc3bf8537477e";
const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

const fetchArticles = () => {

  return axios({
    url: URL,
    method: 'get'
  }).then(response => {

    console.log(response);
    return response.data;
  })
};

const HomePage: React.FunctionComponent = () => {

  const [articles, setArticles] = React.useState([]);
  const items: any[] = [];

  React.useEffect(() => {

    fetchArticles().then(data => setArticles(data.articles));

  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" >
        <IonList color="primary">

          {
            articles.map(a => {
              
              return (
                <IonItem>
                  {a['title']}
                  <IonButton href={a['url']} color="primary" slot="end">Read</IonButton>
                </IonItem>
              );
            })
          }

        </IonList>
      </IonContent>
    </>
  );
};

export default HomePage;
