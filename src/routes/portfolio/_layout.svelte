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
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
    }

    .master-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }

    ul a { text-decoration: none; }

    .master-list__item {
        border-bottom: 1px solid var(--color-primary);
        background-color: var(--color-white);
        color: var(--color-primary);
        padding: 0.5em;
    }

    .master-list__item:hover,
    .master-list__item.active {
        color: var(--color-white);
        background-color: var(--color-primary);
    }

    .ghost {
        /* 1. Needs to be the same height as line height in order to look like text */
        background-color: var(--color-primary);
        height: 1.2em; /* 1. */
        margin: 0;
    }

    .wrapper {
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
    }

    .large-screen { display: none; }

    /* 600px at 16px font */
    @media screen and (min-width: 37.5rem) {
        .large-screen { display: initial; }

        .master-detail {
            display: grid;
            grid-template-columns: calc(100vw / 6) 1fr;
            grid-template-areas: "master detail";
        }

        .master {
            grid-area: master;
            border-right: 1px solid var(--color-primary);
            overflow-y: scroll;
        }

        .detail { 
            grid-area: detail; 
            overflow-y: scroll;
        }
    }
</style>

<!--
    If there is a project selected AND the screen is small only show detail.
    If there is no project selected AND the screen is small only show master.
    If the screen is large show both master and detail
-->

<section class="master-detail">
    <div class="master" class:large-screen={ segment ? true : false }>
        <ul class="master-list">
            {#if projects}
                {#each projects as project}
                    <a href={`/portfolio/${project.slug}`}>
                        <li class="master-list__item" class:active={segment === project.slug}>
                            {project.metadata.title}
                        </li>
                    </a>
                {/each}
            {:else}
                <li class="master-list__item">
                    <p class="ghost"></p>
                </li>
            {/if}
        </ul>
    </div>
    <div class="detail" class:large-screen={ segment ? false : true }>
        <slot></slot>
    </div>
</section>