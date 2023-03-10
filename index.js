window.onload = () => {
           randomUserGenerator()
}

const randomUserGenerator = () => {
    console.log(fetch('https://randomuser.me/api'))
}