<template>
    <div class="declaration">
        <div class="declaration-top-title"> {{ title }}<span data-v-90b5d9ea=""
                style="color: rgb(239, 79, 25);">{{ redTitle }}</span></div>
        <div class="declaration-intro">{{ intro }} </div>
    </div>
</template>

<script>
export default {
    name: "Declaration",
    props: {
        title: {
            type: String,
            required: true,
        },
        redTitle: {
            type: String,
            required: true,
        },
        intro: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>
.declaration {
    position: absolute;
    top: 67px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.declaration-intro {
    font-size: 16px;
    /* color: #000; */
}

.declaration-top-title {
    color: #000;
    font-size: 36px;
    line-height: 100px;
}

.background {
    background-color: rgba(247, 247, 247, 0.7);
    position: absolute;
    top: 67px;
    left: 0;
    height: 300px;
    width: 100%;
}
</style>