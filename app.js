window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (point =>{
            long = point.coords.longitude;
            lat = point.coords.latitude;

            const api =`url_api_link`;
        });

        fetch
    }
});