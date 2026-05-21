import {Route} from "react-router-dom"
import {useState, useEffect} from "react"

window.onload = function(){

  var images = ['../multimedia/images/Familia.jpg', '../multimedia/images/Familia-Shineyder.jpg', '../multimedia/images/Alex.jpg']

  
      function addTask(){
          const taskImage = document.querySelector("#nil").value;
          if(taskImage){
              const template = document.querySelector(".template");
              const newTask = template.cloneNode(true);
              newTask.querySelector("#nil").textContent = taskImage;
              newTask.classList.remove("hide");
          }
      }
      const nilson = document.querySelector("#nilson")
      nilson.addEventListener("click", function(e){
          e.preventDefault();
          console.log(this);
          this.style.color = "red";
          addTask();
          
          /* .nilson:target {
              background: url('../multimedia/images/Familia.jpg') no-repeat;
              background-color: rgba(0, 0, 0, .4);
              box-shadow: 3px 3px 5px 1px;
          }
          .buffet:target {
              background: url('../multimedia/images/Familia-Shineyder.jpg') no-repeat;
              background-color: rgba(0, 0, 0, .4);
              box-shadow: 3px 3px 5px 1px;
          }
          .alex:target {
              background: url('../multimedia/images/Alex.jpg') no-repeat;
              background-color: rgba(0, 0, 0, .4);
              box-shadow: 3px 3px 5px 1px;
          } */
      });
      
      function addTask(){
          const taskImage = document.querySelector("#buff").value;
          if(taskImage){
          }
      }
      const buffet = document.querySelector("#buffet")
      buffet.addEventListener("click", function(e){
          e.preventDefault();
          addTask();
          console.log(this);
          this.style.color = "red";
      });

      function addTask(){
          const taskImage = document.querySelector("#ale").value;
          if(taskImage){
          }
      }
      const alex = document.querySelector("#alex")
      alex.addEventListener("click", function(e){
          e.preventDefault();
          addTask();
          console.log(this);
          this.style.color = "red";
      });

  }

  function swapper() {
    toggleClass(document.getElementById('overlay'), 'open');
    }
    
    var el = document.getElementById('overlayBtn');
    el.addEventListener('click', swapper, false);
    
    var text = document.getElementById('overlayBtn');
    text.onclick = function(){
    this.innerHTML = (this.innerHTML === "Menu") ? "Close" : "Menu";
    return false;
    };

    window.onload=function(){
      var mb = document.getElementById("b");
      mb.addEventListener("click", handler);
      mb.addEventListener("click", handler2);
  }
  
  
  function handler() {
      $("p").html("<br>" + $("p").text() + "<br>You clicked me-1!<br>");
  }
  
  function handler2() {
      $("p").html("<br>" + $("p").text() + "<br>You clicked me-2!<br>");
  }

var nilson = document.querySelector("#nilson");
nilson.addEventListener("click", function(){
    nilson.computedStyleMap = "../../multimedia/images/Familia.jpg"
})



var nilson = document.querySelector("#nilson");
nilson.addEventListener("click", function(){
    nilson.computedStyleMap = "../multimedia/images/Familia.jpg"
})
var buffet = document.querySelector("#buffet");
buffet.addEventListener("click", function(){
    buffet.computedStyleMap = "../multimedia/images/Familia-Shineyder.jpg"
})
var alex = document.querySelector("#alex");
alex.addEventListener("click", function(){
    alex.computedStyleMap = "../multimedia/images/Alex.jpg"
})


function App() {

    const [state, setState] = useState();

    function change(){
      if(currentImgIndex == ImgSrcArray.length){
          currentImgIndex = 0;
      }
      document.getElementById("nilson").src=ImgSrcArray[currentImgIndex];
      currentImgIndex++;
  }

    var image0 = ['../multimedia/images/Familia.jpg']
    var image1 = ['../multimedia/images/Familia-Shineyder.jpg']
    var image2 = ['../multimedia/images/Alex.jpg']

    var images = [image0, image1, image2]

    let imagens = {
      img1: '../../multimedia/images/Familia.jpg',
      img2: '../../multimedia/images/Familia-Shineyder.jpg',
      img3: '../../multimedia/images/Alex.jpg',
    }
    const trocarimagem = () => {
      setImagem(state => state === 'img1' ? 'img2': 'img1');
      setImagem(state => state === 'img2' ? 'img3': 'img2');
      setImagem(state => state === 'img3' ? 'img1': 'img3');
    }
    const [imagem, setImagem] = useState('img1');
    return (
      <div> 
        <div style={{marginTop: '15px'}}>
          <a onClick={trocarimagem}>Trocar para {imagem === 'img1' ? 'img2': 'img1'}</a>
        </div>
        <div style={{marginTop: '15px'}}>
          <a onClick={trocarimagem}>Trocar para {imagem === 'img2' ? 'img3': 'img2'}</a>
        </div>
        <div style={{marginTop: '15px'}}>
          <a onClick={trocarimagem}>Trocar para {imagem === 'img3' ? 'img1': 'img3'}</a>
        </div>
        <div style={{marginTop: '15px'}}>
          <img src={imagens[imagem]} style={{width:'75%'}} />
        </div>      
      </div>
    );
  }
  ReactDOM.render( <App/> , document.getElementById('root'));
  

useEffect(() => {
    async function carregaDescricao(){
        var a = document.getElementById('nilson')
        a.addEventListener('click', clicar)
        var a = document.getElementById('buffet')
        a.addEventListener('click', clicar)
        var a = document.getElementById('alex')
        a.addEventListener('click', clicar)
        function clicar(){
            a.style.backgroundImage = "../../multimedia/images/Familia.jpg"
            a.style.backgroundImage = "../../multimedia/images/Familia-Shineyder.jpg"
            a.style.backgroundImage = "../../multimedia/images/Alex.jpg"
        }
        const resposta = await fetch({Almoco});
        const menu = await resposta.json();

        setMenu(menu);
    } carregaDescricao();
}, []);



<section>
<section className={styles.eventos}>
                <section className={styles.group_events}>
                    <fieldset id="evento"><legend>Cardápio</legend>
                    <p><label for="cEven">Evento</label>
                        <select name="tEven" id="cEven">
                            <option value="Al">Almoço</option>
                            <option value="ACa">Almoço de Casamento</option>
                            <option value="ACh">Almoço de Churrasco</option>
                            <option value="An">Aniversário</option>
                            <option value="AC">Aniversário de Casamento</option>
                            <option value="Ca" Selected>Casamento</option>
                            <option value="Co">Confraternização</option>
                            <option value="CC">Coquetel de Casamento</option>
                            <option value="Ch">Churrasco</option>
                            <option value="Fo">Formatura</option>
                            <option value="Ja">Janta</option>
                        </select></p>
                    </fieldset>
                </section>
                <section className={styles.caracteristica_evento}>
                    <ul>
                        <li><u>Entradas</u> Coxinha (Frango, Queijo e Camarão), Molho Branco, Quibes, Croquetes (Milho c/ Queijo, Camarão e Frango c/ Queijo), Bolinhos (Queijo, Presunto e Bacalhau), Empadas, Pastéis, Goiabinha de Queijo, Bolo e Doces Gourmet.</li><br/>
                        <li><u>Cardápio</u> Arroz Branco, Massas, Escalopinho ao Molho Madeira, Frango Grelhado ao Molho Branco, Batata Soutê e Saladas.</li><br/>
                        <li><u>Bebidas</u> Suco, Refrigerante, Coquetel e Água.</li>
                    </ul>
                </section>
            </section>
            </section>