import React from "react";
import "./Settings.css";
import {
  IonCard,
  IonAvatar,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/react";

const Settings: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Paramètres</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Mes paramètres</IonCardTitle>
          <IonCardSubtitle>Mon profil</IonCardSubtitle>
        </IonCardHeader>
        <div className="personal-infos">
          <IonAvatar className="avatar-profile">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonText>
            <h3>Youssef Drif</h3>
            <p>Gros lard</p>
          </IonText>
        </div>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Settings;
