const weather=require('./utils/functions');

weather.getWeather(34.0544,-118.2439,(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})


weather.geocode('Los Angeles',(error,data)=>{
    
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
    
})