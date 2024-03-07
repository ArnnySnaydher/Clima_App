<template>
    <div class="alerta">
        <slot></slot>
    </div>
</template>

<style>
    .alerta {
        text-align: center;
        margin-bottom: 2rem;
        /* color: var(--blanco); */
        color:#CA8A04;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 1.2rem;
        padding: .5rem
    }
</style>