console.log("remove old gatsby cache and service workers")

if(caches)
{caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
});}

if(navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
        console.log(registration)
        registration.unregister();
    } 
});
}