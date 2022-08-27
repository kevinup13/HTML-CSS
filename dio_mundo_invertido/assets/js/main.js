import { subscribeToMundoInvertido } from "./firebase/mundo-invertido.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    // Salvar no banco de dados!
    const subscriptionId = await subscribeToMundoInvertido(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)
})