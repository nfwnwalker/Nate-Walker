<script>
    import { goto } from '@sapper/app'
    import LogoImageView from '../ImageViews/LogoImageView.svelte';
    export let indexRoute;
    export let links = [];
    export let page = '';

    function handleLogoClick(event) {
        goto((indexRoute) ? indexRoute : '/');
    }
</script>

<style>
    .primary-nav {
        width: 100%;
    }

    .nav-list {
        margin: 0;
        padding-left: 0;
        list-style-type: none;
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: repeat(2, 50%);
        align-items: center;
    }

    .nav-list__item {
        padding: 0.5rem;
        display: inline-block;
        border-right: 1px solid var(--color-primary);
        border-bottom: 1px solid var(--color-primary);
        text-align: center;
    }

    .active,
    .nav-list__item:not(.logo):hover {
        background-color: var(--color-primary);
        color: var(--color-white);
    }

    .nav-link {
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
        font-family: 'Roboto';
        font-size: 1.5em;
    }

    .logo { display: none; }

    /* 900px at 16px font */
    @media screen and (min-width: 56.25rem) {
        .primary-nav {
            border-bottom: 1px solid var(--color-primary);
        }

        .nav-list {
            display: flex;
            align-items: center;
        }

        .nav-list__item {
            border: none;
            border-right: 1px solid var(--color-primary);
            text-align: left;
        }

        .nav-link {
            /* 1. Should be height of logo view */
            /* 2. By default it's set to 1.3 */
            font-size: 2.5rem; /* 1. */
            line-height: 0.9; /* 2. */
        }

        .logo { display: initial; }
        .logo:hover { cursor: pointer; }
    }
</style>

<nav class="primary-nav">
    <ul class="nav-list">
        <li class="nav-list__item logo">
            <LogoImageView handleClick={handleLogoClick} />
        </li>
        {#each links as link}
            <li class="nav-list__item" class:active={page === link.href}>
                <a class="nav-link" href={link.href}>{link.name}</a>
            </li>
        {/each}
    </ul>
</nav>