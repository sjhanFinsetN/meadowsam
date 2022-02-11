const package_mongol =[
    {id:1,name:'Terelji',duration:2,price:300},
    {id:2,name:'Gobi',duration:5,price:700},
    {id:2,name:'Khupsugul',duration:4,price:500}
]

exports.getProduct = (pname,no=null) =>{
    if(pname=='MN') {
        if(no!==null){ 
            return(package_mongol[no])  // not working well :(
        }
        else return(package_mongol)
    }
}