AFRAME.registerComponent('marker-handler',{
    init:function(){
        this.el.addEventListener('markerFound',()=>{
            console.log('marker is found');
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost',()=>{
            console.log('marker is lost');
            this.handleMarkerLost()
        }        
        )
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display='flex'
        var orderButton=document.getElementById('order-button')
        var orderButtonSummary=document.getElementById('order-summary-button')
        orderButton.addEventListener('click',()=>{
            swal({
                icon:'https://i.imgur.com/4NZ6uLY.jpg',
                title:'Thanks for Order!',
                text:' ',
                
            })        
            
        })

        orderButtonSummary.addEventListener('click',()=>{
            swal({
                icon:'warning',
                title:'Order Summary',
                text:'Work In Progress'
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display='none'
    }
    
})