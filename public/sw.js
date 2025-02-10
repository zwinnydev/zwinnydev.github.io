console.log("remove orphaned service workers if needed")
navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
        console.log(registration)
        registration.unregister();
    } 
});