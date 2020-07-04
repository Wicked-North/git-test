var rect=require('./rectangle');

function solrect(l,b){
    console.log("Starting to solve......");

    if(l<=0 || b<=0){
        console.log("Wrong dimensions....");

    }else{
        console.log("Area="+rect.area(l,b));
        console.log("Perimeter="+rect.perimeter(l,b));
    }
}

solrect(5,6);