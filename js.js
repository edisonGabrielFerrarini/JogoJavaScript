
quadrado = {
	altura : 50,
	largura: 50,
    vida : 2,
	cor : '#d9d9d9',
	vel: 2.5,
	personagem : null,	
	top : 0,
	left: 200,
	criarQuadrado : function(){
		this.personagem  = document.createElement('div')
		this.personagem.style = 'top:'+quadrado.top+';left:'+quadrado.left+';overflow:hidden ;transition: 0.26s ease-out; width:'+quadrado.largura+'px;height:'+quadrado.altura+'px; background-color:'+quadrado.cor+';position:absolute'
		document.body.appendChild(this.personagem)		
	},
	movimentarPersonagem : function(x){
		if(this.personagem.offsetTop+50 < 450){
			switch(event.keyCode){
			case 38:
				if(this.top > 0){
					this.top -= x * this.vel
					this.personagem.style.top = this.top 
				}
				break;
			case 40:
				if(this.top+50 < 500){
					this.top += x * this.vel
					this.personagem.style.top = this.top 
				}
				break;
			case 37:
				if(this.left > 0){
					this.left -= x * this.vel
					this.personagem.style.left = this.left 
				}
				break;
			case 39:
				if(this.left+50 < 500){
					this.left += x * this.vel
					this.personagem.style.left = this.left 
				}
				break;
			}	
		}
	},
	removerTudo: function(){
		document.body.removeChild(obstaculos0.inimigo)
		document.body.removeChild(obstaculos1.inimigo)
		document.body.removeChild(obstaculos2.inimigo)
		document.body.removeChild(obstaculos3.inimigo)
		//document.body.removeChild(quadrado.personagem)
	},
    Morreu: function(){
    	if(this.vida != 0){
    		this.top  = 0
        	this.left = 200
        	document.body.removeChild(this.personagem)
        	this.criarQuadrado()	
    	}else{
    		this.removerTudo()
    		document.body.removeChild(this.personagem)
    		document.body.querySelector('.vitoria').innerText = 'Você Perdeu'
			document.body.querySelector('.vitoria').style = 'color: white; size: 80px; position: absolute; top: 150; left: 120; display: initial'		
    	}	  
	},	
	vitoria: function(){
		if (quadrado.personagem.offsetTop+50 > 450) {
			this.removerTudo()
			document.body.querySelector('.vitoria').style = 'color: white; size: 80px; position: absolute; top: 150; left: 120; display: initial'
		}
	}

}

obstaculos0 = {
	altura: 40,
	largura: 40,
	cor: 'white',
	inimigo: null,
	vel:150,
	frames: 10,
	top: 0,
	left: 460,
	criarInimigo: function(){
		this.inimigo  = document.createElement('div')
        this.top = 105,
		this.inimigo.style = 'top:'+this.top+';left:'+this.left+';overflow:hidden ;transition: 0.26s ease-out; width:'+this.largura+'px;height:'+this.altura+'px; background-color:'+this.cor+';position:absolute'
		document.body.appendChild(this.inimigo)	
	},
	movimentarInimigo: function(){
        if(this.inimigo.offsetLeft > -40){
            this.inimigo.style.left = (this.inimigo.offsetLeft -= this.vel)   
        }else{
            document.body.removeChild(this.inimigo)
            this.criarInimigo()
        }
		 
	},
    ColisaoMostros: function(){
        if((this.inimigo.offsetLeft < quadrado.personagem.offsetLeft+50) && (this.inimigo.offsetTop+40 > quadrado.personagem.offsetTop ) && (this.inimigo.offsetTop < quadrado.personagem.offsetTop+50) && (this.inimigo.offsetLeft+40 > quadrado.personagem.offsetLeft)){
            quadrado.Morreu()
            quadrado.vida--
        }
    }
}
obstaculos1 = {
	altura: 40,
	largura: 40,
	cor: 'white',
	inimigo: null,
	vel:250,
	frames: 10,
	top: 100,
	left: 460,
	criarInimigo: function(){
		this.inimigo  = document.createElement('div')
        this.top = 205,
		this.inimigo.style = 'top:'+this.top+';left:'+this.left+';overflow:hidden ;transition: 0.26s ease-out; width:'+this.largura+'px;height:'+this.altura+'px; background-color:'+this.cor+';position:absolute'
		document.body.appendChild(this.inimigo)	
	},
	movimentarInimigo: function(){
        if(this.inimigo.offsetLeft > -40){
            this.inimigo.style.left = (this.inimigo.offsetLeft -= this.vel)   
        }else{
            document.body.removeChild(this.inimigo)
            this.criarInimigo()
        }
		 
	},
    ColisaoMostros: function(){
        if((this.inimigo.offsetLeft < quadrado.personagem.offsetLeft+50) && (this.inimigo.offsetTop+40 > quadrado.personagem.offsetTop ) && (this.inimigo.offsetTop < quadrado.personagem.offsetTop+50) && (this.inimigo.offsetLeft+40 > quadrado.personagem.offsetLeft)){
            quadrado.Morreu()
            quadrado.vida--
        }
    }
}
obstaculos2 = {
	altura: 40,
	largura: 40,
	cor: 'white',
	inimigo: null,
	vel:130,
	frames: 10,
	top: 200,
	left: 460,
	criarInimigo: function(){
		this.inimigo  = document.createElement('div')
        this.top = 305,
		this.inimigo.style = 'top:'+this.top+';left:'+this.left+';overflow:hidden ;transition: 0.26s ease-out; width:'+this.largura+'px;height:'+this.altura+'px; background-color:'+this.cor+';position:absolute'
		document.body.appendChild(this.inimigo)	
	},
	movimentarInimigo: function(){
        if(this.inimigo.offsetLeft > -40){
            this.inimigo.style.left = (this.inimigo.offsetLeft -= this.vel)   
        }else{
            document.body.removeChild(this.inimigo)
            this.criarInimigo()
        }
		 
	},
    ColisaoMostros: function(){
        if((this.inimigo.offsetLeft < quadrado.personagem.offsetLeft+50) && (this.inimigo.offsetTop+40 > quadrado.personagem.offsetTop ) && (this.inimigo.offsetTop < quadrado.personagem.offsetTop+50) && (this.inimigo.offsetLeft+40 > quadrado.personagem.offsetLeft)){
            quadrado.Morreu()
            quadrado.vida--
        }
    }
}
obstaculos3 = {
	altura: 40,
	largura: 40,
	cor: 'white',
	inimigo: null,
	vel:400,
	frames: 10,
	top: 250,
	left: 460,
	criarInimigo: function(){
		this.inimigo  = document.createElement('div')
        this.top = 405,
		this.inimigo.style = 'top:'+this.top+';left:'+this.left+';overflow:hidden ;transition: 0.26s ease-out; width:'+this.largura+'px;height:'+this.altura+'px; background-color:'+this.cor+';position:absolute'
		document.body.appendChild(this.inimigo)	
	},
	movimentarInimigo: function(){
        if(this.inimigo.offsetLeft > -40){
            this.inimigo.style.left = (this.inimigo.offsetLeft -= this.vel)   
        }else{
            document.body.removeChild(this.inimigo)
            this.criarInimigo()
        }
		 
	},
    ColisaoMostros: function(){
        if((this.inimigo.offsetLeft < quadrado.personagem.offsetLeft+50) && (this.inimigo.offsetTop+40 > quadrado.personagem.offsetTop ) && (this.inimigo.offsetTop < quadrado.personagem.offsetTop+50) && (this.inimigo.offsetLeft+40 > quadrado.personagem.offsetLeft)){
            quadrado.Morreu()
            quadrado.vida--
        }
    }
}

document.addEventListener('keydown', function(){
	quadrado.movimentarPersonagem(20)
});
    
function iniciar(){
	
	quadrado.criarQuadrado() 
    obstaculos0.criarInimigo()
    obstaculos1.criarInimigo()
    obstaculos2.criarInimigo()
    obstaculos3.criarInimigo()
    
    t=setInterval(function(){

        obstaculos0.movimentarInimigo()
        obstaculos0.ColisaoMostros()
        
        obstaculos1.movimentarInimigo()
        obstaculos1.ColisaoMostros()
        
        obstaculos2.movimentarInimigo()
        obstaculos2.ColisaoMostros()
        
        obstaculos3.movimentarInimigo()
        obstaculos3.ColisaoMostros()

    	quadrado.vitoria()
            
    },20);
}

iniciar()