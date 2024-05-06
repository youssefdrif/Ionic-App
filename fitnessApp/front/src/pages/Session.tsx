import React, { useState, useEffect } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const handleClick = () => {
  // Handle click logic here
  console.log("Dévloppé incliné");
};

const Session: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ma séance</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ma séance du jour</IonCardTitle>
          <IonCardSubtitle>Dimanche 28 avril 2024</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonCard color="tertiary" onClick={handleClick}>
            <IonCardHeader>Développé incliné</IonCardHeader>
            <IonCardContent>4-6 rep</IonCardContent>
          </IonCard>
        </IonCardContent>
        <IonCardContent>
          <IonCard color="tertiary">
            <IonCardHeader>Tractions lestées</IonCardHeader>
            <IonCardContent>4-6 rep</IonCardContent>
          </IonCard>
        </IonCardContent>
        <IonCardContent>
          <IonCard color="tertiary">
            <IonCardHeader>Élévations frontales</IonCardHeader>
            <IonCardContent>4-6 rep</IonCardContent>
          </IonCard>
        </IonCardContent>
        <IonCardContent>
          <IonCard color="tertiary">
            <IonCardHeader>Curl incliné haltères</IonCardHeader>
            <IonCardContent>4-6 rep</IonCardContent>
          </IonCard>
        </IonCardContent>
        <IonCardContent>
          <IonCard color="tertiary">
            <IonCardHeader>Élévations latérales</IonCardHeader>
            <IonCardContent>4-6 rep</IonCardContent>
          </IonCard>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Session;
