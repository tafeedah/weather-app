window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(point => {
            long = point.coords.longitude;
            lat = point.coords.latitude;

            const proxy = `https://damp-hollows-33025.herokuapp.com/`
            const api = `${proxy}api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            //const api = `${proxy}https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}/?key=85AHPGPC33RG5732PS2EJNYGQ`;
            //const api = `${proxy}https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=85AHPGPC33RG5732PS2EJNYGQ&taskId=b9571a483e4406fe77ed1064db7314a5&zip=false`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary} =data.currently;
                    //Set DOM Elements from API
                    temperatureDegree.textContent = temperature;
                    //https://weather.visualcrossing.com/VisualCrossingWebServices/${lat},${long}/85AHPGPC33RG5732PS2EJNYGQ              
                });
        });


    }
});