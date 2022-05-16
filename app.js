Vue.createApp({
    // data() {
    //     return {
    //
    //     }
    // }
    data: () => ({
        myHtml: '<h1>Я пытаюсь понять, как работать с Vue</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Zilyash',
            lastName: 'Valieva',
            age: 21
        },
        items: [1, 2, 3]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')