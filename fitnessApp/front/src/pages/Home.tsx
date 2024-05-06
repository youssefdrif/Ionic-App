import React, { useState, useEffect } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { ellipse } from 'ionicons/icons';
import "./Home.css";
import { useHistory } from "react-router";
import fitnesspark from "../images/fitnesspark.png";

const Home: React.FC = () => {
  const history = useHistory();
  const [schedule, setSchedule] = useState<string | null>(null);

  const handleRedirect = () => {
    history.push("/session");
  };

  const fetchSchedule = async () => {
    const apiUrl = 'http://localhost:3000/api/places?placeId=ChIJ_Y6CeBVoBEgRKuM5zF7ncJ4&apiKey=AIzaSyA8YrxzYR9Gix93tZ-x4aVIekH4EGoQhx4';

    console.log('Before fetch');
    try {
      const response = await fetch(apiUrl);
      console.log('Response:', response); // Log the response object
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Result:', result); // Log the result object
      if (result && result.result && result.result.opening_hours) {
        setSchedule(JSON.stringify(result.result.opening_hours, null, 2));
      } else {
        setSchedule('Opening hours not available.');
      }
    } catch (error) {
      console.error('Error fetching schedule:', error);
      setSchedule('Error fetching schedule.');
    }
    console.log('After fetch');
  };

  useEffect(() => {
    fetchSchedule(); // Fetch schedule when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="tertiary">
          <IonCardHeader>
            <IonCardTitle>Ma salle de sport</IonCardTitle>
            <IonCardSubtitle>Fitness park</IonCardSubtitle>
            <IonImg className="img-gym" src={fitnesspark} alt="Fitness Park"></IonImg>
          </IonCardHeader>
          <IonCardContent>
            {schedule !== null ? (
              <IonText>
                <h3>Ouvert <IonIcon className='icon-status' icon={ellipse} size="large" color="success"></IonIcon></h3>
                <p>{schedule}</p>
              </IonText>
            ) : (
              <p>Chargement des horaires...</p>
            )}
          </IonCardContent>
        </IonCard>
        <IonCard color="tertiary">
          <IonCardHeader>
            <IonCardTitle>Ma séance</IonCardTitle>
            <IonCardSubtitle>Dimanche 28 avril 2024</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton shape="round" color="light" onClick={handleRedirect}>
              Voir ma séance
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
