<script context="module">
    export async function preload({ params }) {
        const response = await this.fetch(`portfolio.json`);
        const projects = await response.json();
        return { projects };
    }
</script>

<script>
    export let segment;
    export let projects;
</script>

<style>
    .master-detail {
        /* 1. Parent is a 6-column grid */
        grid-column: 1 / 7; /* 1. */
    }

    .wrapper {
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
    }

    .nav-list {
        margin: 0;
        padding-left: 0;
        list-style-type: none;
    }

    .nav-list__item {
        border-bottom: 1px solid var(--color-primary);
        text-align: center;
    }

    .nav-link,
    .nav-link--loading {
        /* 1. Necessary for text overflow */
        /* 2. 1.3 by default */
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        display: inline-block;
        text-transform: capitalize;
        text-overflow: ellipsis;
        text-decoration: none;
        font-family: 'Roboto';
        font-size: 1.5rem;
        color: inherit;
        overflow: hidden; /* 1. */
        white-space: nowrap; /* 1. */
        line-height: 1; /* 2. */
    }

    .active,
    .nav-list__item:hover {
        background-color: var(--color-primary);
        color: var(--color-white);
    }

    .large-screen { display: none; }

    /* 600px at 16px font */
    @media screen and (min-width: 37.5rem) {
        .large-screen {
            display: initial;
        }

        .master-detail {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-areas: "master detail";
        }

        .master { grid-area: master; }
        .detail { grid-area: detail; }

        .side-nav {
            /* 1. 200px at 16px font */
            width: 12.5em; /* 1. */
            border-right: 1px solid var(--color-primary);
        }

        .nav-list__item { text-align: left; }
    }
</style>

<div class="master-detail">
    <!--
        If there is a project selected AND the screen is small only show detail.
        If there is a project selected AND the screen is large show both master and detail
    -->
    <nav class="master side-nav" class:large-screen={ segment ? true : false }>
        <ul class="nav-list">
            {#if projects}
                {#each projects as project}
                    <li class="nav-list__item" class:active={segment === project.slug}>
                        <a class="nav-link" href={`/portfolio/${project.slug}`}>
                            {project.metadata.title}
                        </a>
                    </li>
                {/each}
            {:else}
                <li><span class="nav-link--loading">Loading...</span></li>
            {/if}
        </ul>
    </nav>
    <!--
        If there is no project selected AND the screen is small only show master.
        If there is no project selected AND the screen is large show both master and detail
    -->
    <section class="detail"  class:large-screen={ segment ? false : true }>
        <div class="wrapper">
            <slot></slot>
        </div>
    </section>
</div>