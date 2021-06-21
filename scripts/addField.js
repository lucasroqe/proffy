var button = document.querySelector('#add-time')

button.addEventListener('click', cloneField)

function cloneField() {
    //Duplicar os campos     //Selecionar o campo p diplicar
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar todos os inputs
    const fields = newFieldsContainer.querySelectorAll('input')
    //Para cara campo
    fields.forEach(field => {
        //Limpar
        field.value =''
    });
    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}