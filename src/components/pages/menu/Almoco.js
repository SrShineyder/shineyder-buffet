

function Cardapio() {


    function addMenu(){
        const taskMenu = document.querySelector("#even").value;
        if(taskMenu){
            const template = document.querySelector(".template");
            const newTask = template.cloneNode(true);
            newTask.querySelector("#even").textContent = taskMenu;
            newTask.classList.remove("hide");
        }
    }
    // valores sem desconto
const menu = {
    1: "Almoço",
    2: "Almoço de Casamento",
    3: "Almoço de Churrasco",
    4: "Aniversário",
    5: "Aniversário de Casamento",
    6: "Casamento",
    7: "Confraternização",
    8: "Coquetel",
    9: "Coquetel de Casamento",
    10: "Churrasco",
    11: "Formatura",
    12: "Jantar",
    13: "Jantar de Casamento"
  };
  
    // Quando trocar...
    $("#periodo").on('change', function() {
  
      var periodo = this;
  
    });

<section className={styles.eventos}>
                <section className={styles.group_events}>
                    <fieldset id="evento"><legend>Cardápio</legend>
                    <p><label for="even">Evento</label>
                        <select id="even">
                            <option value="1">Almoço</option>
                            <option value="2">Almoço de Casamento</option>
                            <option value="3">Almoço de Churrasco</option>
                            <option value="4">Aniversário</option>
                            <option value="5">Aniversário de Casamento</option>
                            <option value="6" Selected>Casamento</option>
                            <option value="7">Confraternização</option>
                            <option value="8">Coquetel</option>
                            <option value="9">Coquetel de Casamento</option>
                            <option value="10">Churrasco</option>
                            <option value="11">Formatura</option>
                            <option value="12">Jantar</option>
                            <option value="13">Jantar de Casamento</option>
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


  
    $("#periodo").trigger('change');
    
<div id="periodo-selecionado">
  <div class="periodo-item" data-plano="1">
    <h2>Plano 01</h2>
    <div class="preco"></div>
    <a class="link">Link 1</a>
  </div>
  <div class="periodo-item" data-plano="2">
    <h2>Plano 02</h2>
    <div class="preco"></div>
    <a class="link">Link 2</a>
  </div>
  <div class="periodo-item" data-plano="3">
    <h2>Plano 03</h2>
    <div class="preco"></div>
    <a class="link">Link 3</a>
  </div>
  <div class="periodo-item" data-plano="4">
    <h2>Plano 04</h2>
    <div class="preco"></div>
    <a class="link">Link 4</a>
  </div>
</div>
  
  };

