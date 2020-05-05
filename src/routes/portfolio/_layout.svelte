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
    .grid.master-detail {
        grid-template-columns: 100%;
        grid-template-rows: 100%;
    }

    .grid.master-detail > .master,
    .grid.master-detail > .detail {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
    }

    .top {
        z-index: 1;
    }

    .master-detail {
        width: 100%;
    }

    .master,
    .detail {
        background-color: var(--color-white);
        overflow-y: scroll;
    }

    .master-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }

    .master-list__item {
        border-bottom: 1px solid var(--color-primary);
        background-color: var(--color-white);
        color: var(--color-primary);
    }

    .master-list__item:hover,
    .master-list__item.active {
        color: var(--color-white);
        background-color: var(--color-primary);
    }

    .master-list__item > a {
        padding: 0.5em;
        display: block;
        text-decoration: none;
        color: inherit;
    }

    /* 600px at 16px font */
    @media screen and (min-width: 37.5rem) {

        .grid.master-detail {
            grid-template-columns: minmax(12.5rem, 20%) 1fr;
            grid-template-rows: 100%;
        }

        .grid.master-detail > .master {
            grid-column: 1 / 2;
        }

        .grid.master-detail > .detail {
            grid-column: 2 / -1;
        }

        .master {
            border-right: 2px solid var(--color-primary);
        }
    }
</style>

<div class="grid master-detail">
    <section class="master" class:top={ segment ? false : true }>
        <ul class="master-list">
            {#if projects}
                {#each projects as project}
                    <li class="master-list__item" class:active={segment === project.slug}>
                        <a href={`/portfolio/${project.slug}`}>{project.metadata.title}</a>
                    </li>
                {/each}
            {/if}
        </ul>
    </section>
    <section class="detail" class:top={ segment ? true : false }>
        <slot></slot>
    </section>
</div>