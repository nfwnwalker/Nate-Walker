<script>
    export let links = [];
</script>

<style>
    .full-page-nav {
        width: 100vw;
        height: 100vh;
    }

    .nav-list {
        height: 100%;
        margin: 0;
        padding-left: 0;
        list-style-type: none;
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: 100%;
    }

    .nav-list__item {
        overflow: hidden;
        border-bottom: 1px solid var(--color-primary);
    }

    .nav-link {
        width: 100%;
        height: 100%;
        display: flex;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
        font-family: 'Roboto';
        font-size: 2.5rem;
        justify-content: center;
        align-items: center;
        transition: transform 300ms ease-in;
    }

    @media (hover: hover) {
        .nav-link:hover {
            cursor: pointer;
            transform: scale(2);
        }
    }

    /* 650px at 16px font */
    @media screen and (min-width: 40.625rem) {
        .nav-list {
            grid-template-columns: repeat(2, 1fr);
        }

        .nav-list__item {
            border-right: 1px solid var(--color-primary);
        }
    }
</style>

<nav class="full-page-nav">
    <ul class="nav-list">
        {#each links as link}
            <li class="nav-list__item">
                <a class="nav-link" href={link.href}>{link.name}</a>
            </li>
        {/each}
    </ul>
</nav>