<template>
    <div>
        Hiya. The count is: {{getCount}}
        <hr />
        <button @click="increment()">Add 1</button>
    </div>
</template>

<script>
export default {
    computed: {
        getCount() {
            return this.$store.state.count;

        }
    },
    methods: {
        increment() {
            this.$store.commit('addCount');
        }
    }
}
</script>