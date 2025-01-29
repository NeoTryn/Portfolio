<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<nav id="nav-bar">
    <ul id="nav-list">
        <li>
            <RouterLink to="/" class="router-link">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="router-link">About</RouterLink>
        </li>
    </ul>
</nav>
</template>

<style lang="css" scoped>

    #nav-bar {
        padding: 1rem 3rem;

        background: linear-gradient(to bottom right, #101010, #050505);
        box-shadow: 0 0 2rem #070707;

        top: 0;
        left: 0;

        position: fixed;

        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 1000;
    }

    #nav-list {
        list-style-type: none;

        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: row;

        gap: 3rem;
    }

    .router-link {
        text-decoration: none;
        color: whitesmoke;
        font-family: 'Orbitron', serif;
        
        transition: opacity 0.3s;

        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    .router-link:hover {
        /*background: linear-gradient(to bottom right, var(--neon-cyan-less-opaque), rgba(128, 0, 128, 0.644));*/
        text-shadow: 0 0 0.2rem var(--neon-cyan),
         0 0 1rem var(--neon-pink);
    }
</style>