console.log("remove old site gatsby caches and sw")

caches?.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
});

navigator?.serviceWorker?.getRegistrations()?.then(registrations => {
    for (const registration of registrations) {
        console.log(registration)
        registration.unregister();
    } 
});