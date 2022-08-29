const app = new Vue({
    el: '#app',
    data: {
        title: 'Contador',
        number: 0,
        errorMessage: ''
    },
    methods: {
        decrease() {
            if (this.number < 1) {
                this.errorMessage = '*No se permiten numeros negativos'
                return
            }
            this.errorMessage = ''
            this.number--
        },
        increase() {
            this.errorMessage = ''
            this.number++
        },
        reset() {
            this.errorMessage = ''
            this.number = 0
        }
    }
})