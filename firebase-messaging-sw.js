// firebase-messaging-sw.js
// (modo compatible con localhost)

importScripts(
  "https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDLKdKtSocG9hLs8mSggXl0cL4MRcpsW5A",
  authDomain: "iniciosesion-1346.firebaseapp.com",
  projectId: "iniciosesion-1346",
  storageBucket: "iniciosesion-1346.firebasestorage.app",
  messagingSenderId: "746485966333",
  appId: "1:746485966333:web:cbd2b68649a72e936ca594",
  measurementId: "G-ZVE389BCKD",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Notificación en segundo plano:", payload);
  const notification = payload.notification || {};
  self.registration.showNotification(notification.title || "Nuevo mensaje", {
    body: notification.body || "",
    icon: "/icon.png",
  });
});
