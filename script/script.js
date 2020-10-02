let vue = new Vue({
    el:'#app',
    data:{
        message:"salut les gars",
        link:"https://leboncoin.fr",
        success:true,
        persons:['johnatan','marion','mouloud'],
        numero:null,
        classe:true,
        nom:null,
        secondes:0

    },
    methods:{

        close:function(){
            this.success=false;
        },
        changer:function(){
            this.classe==true?this.classe=false:this.classe=true;
        },
        addPerson:function(){
            this.persons.push(this.nom);
        }


    },
        mounted:function()
        {
          this.$interval=  setInterval(()=>
        {
            this.secondes ++
        },1000
        )},
        destroyed:function(){
            clearInterval(this.$interval)
        }
   
})
