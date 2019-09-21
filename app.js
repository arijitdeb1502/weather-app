const weather=require('./utils/functions');


const address=process.argv[2];

if(!address){
    console.log('Please provide an address!!');
}else{

    weather.geocode(address,(error,{location,latitude,longitude})=>{
    
        if(error){
            console.log(error);
        }else{
            weather.forecast(latitude,longitude,(error,{temperature,precipProbability,summary})=>{
                if(error){
                    console.log(error);
                }else{
                    console.log({location,temperature,precipProbability,summary});
                }
            })
        }
        
    })

}

