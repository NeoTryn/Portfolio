<script setup lang="ts">
</script>

<template>
    <main>
        <div class="project-grid">
            <div class="project-card">
                <h1>Project 1</h1>
                <h3>
                    This is a description of project 1. It is a web application that
                    allows users to create and share recipes. The application is built
                    using HTML, CSS, JavaScript, Vue.js, Node.js, Express, and MongoDB.
                </h3>
            </div>
            <div class="project-card">
                <h1>Project 2</h1>
                <h3>
                    This is a description of project 2. It is a mobile app that allows
                    users to track their fitness goals. The app is built using React
                    Native and Firebase.
                </h3>
            </div>
            <div class="project-card">
                <h1>Project 3</h1>
                <h3>
                    This is a description of project 3. It is a game that allows users
                    to play against each other online. The game is built using HTML, CSS,
                    JavaScript, and Node.js.
                </h3>
            </div>
        </div>
    </main>
</template>

<style lang="css" scoped>
    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;

        align-content: center;
        justify-content: center;

        margin-top: 10rem;
    }
</style>