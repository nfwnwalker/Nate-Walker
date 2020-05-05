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
    .nav-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    .nav-list__item {
        width: 50%;
        border-right: 2px solid var(--color-primary);
        border-bottom: 2px solid var(--color-primary);
        font-size: 1.5em;
    }

    .nav-list__item:hover {
        background-color: var(--color-primary);
        color: var(--color-white);
    }

    .nav-list__item.logo {
        display: none;
    }

    .nav-list__item.logo:hover {
        background-color: initial;
    }

    .nav-link {
        padding: 0.25em 0.5em;
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        color: inherit;
    }

    /* 900px at 16px font */
    @media screen and (min-width: 56.25rem) {

        .primary-nav {
            border-bottom: 2px solid var(--color-primary);
        }

        .nav-list__item {
            width: auto;
            border-bottom: none;
        }

        .nav-list__item.logo {
            padding: 0.25em 0.5em;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
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