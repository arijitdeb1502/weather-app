const weather=require('./utils/functions');


const address=process.argv[2];

if(!address){
    console.log('Please provide an address!!');
}else{

    weather.geocode(address,(error,data)=>{
    
        if(error){
            console.log(error);
        }else{
            weather.forecast(data.latitude,data.longitude,(error,forecastData)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(data.location);
                    console.log(forecastData);
                }
            })
        }
        
    })

}

